export const prerender = false; // Enable on-demand rendering
import type { APIRoute } from "astro";
import client from "@sendgrid/client";

// Set SendGrid API key
const SENDGRID_API_KEY = import.meta.env.SENDGRID_API_KEY || "";
const LIST_ID = import.meta.env.SENDGRID_LIST_ID || "";

// Initialize SendGrid client
client.setApiKey(SENDGRID_API_KEY);

// Define types for SendGrid error handling
interface SendGridError {
  code?: number;
  response?: {
    statusCode?: number;
    body?: {
      errors?: Array<{
        message?: string;
        field?: string;
        help?: string;
      }>;
      [key: string]: unknown;
    };
    [key: string]: unknown;
  };
  message?: string;
  [key: string]: unknown;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    let email;
    
    // Check content type to determine how to parse the request
    const contentType = request.headers.get('content-type') || '';
    
    if (contentType.includes('application/json')) {
      // Handle JSON data
      const json = await request.json();
      email = json.email;
    } else {
      // Handle form data
      const data = await request.formData();
      email = data.get("email");
    }

    // Validate email
    if (!email || typeof email !== "string") {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Email is required",
        }),
        { status: 400 }
      );
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Please provide a valid email address",
        }),
        { status: 400 }
      );
    }

    // Debug info
    console.log("SendGrid API Key length:", SENDGRID_API_KEY ? SENDGRID_API_KEY.length : 0);
    console.log("List ID:", LIST_ID);
    
    // Check if API key and List ID are set
    if (!SENDGRID_API_KEY) {
      console.error("SendGrid API key is not set");
      return new Response(
        JSON.stringify({
          success: false,
          message: "Newsletter service is not properly configured (missing API key)",
        }),
        { status: 500 }
      );
    }
    
    if (!LIST_ID) {
      console.error("SendGrid List ID is not set");
      return new Response(
        JSON.stringify({
          success: false,
          message: "Newsletter service is not properly configured (missing list ID)",
        }),
        { status: 500 }
      );
    }

    // Add contact to SendGrid with list ID
    const data_to_send = {
      list_ids: [LIST_ID],
      contacts: [
        {
          email: email,
        },
      ],
    };

    const request_data = {
      url: `/v3/marketing/contacts`,
      method: "PUT" as const,
      body: data_to_send,
    };

    console.log("Sending request to SendGrid:", JSON.stringify(request_data));
    
    // Validate that the SendGrid client is properly initialized
    if (!client) {
      console.error("SendGrid client is not initialized");
      return new Response(
        JSON.stringify({
          success: false,
          message: "Newsletter service is not properly configured (client initialization failed)",
        }),
        { status: 500 }
      );
    }
    
    try {
      const [response, body] = await client.request(request_data);
      console.log("SendGrid response status:", response.statusCode);
      console.log("SendGrid response body:", JSON.stringify(body));
      
      return new Response(
        JSON.stringify({
          success: true,
          message: "Thank you for subscribing!",
        }),
        { status: 200 }
      );
    } catch (sendgridError) {
      const error = sendgridError as SendGridError;
      console.error("SendGrid API Error:", error.code);
      console.error("SendGrid Error Response:", JSON.stringify(error.response?.body || {}));
      
      // Return a more specific error message
      return new Response(
        JSON.stringify({
          success: false,
          message: "Failed to add to mailing list: " + 
                   (error.response?.body?.errors?.[0]?.message || 
                    "Unknown error from email service"),
          debug: import.meta.env.DEV ? JSON.stringify(error.response?.body || {}) : undefined
        }),
        { status: 500 }
      );
    }
  } catch (error: unknown) {
    const errorObj = error as Error;
    console.error("Error adding subscriber:", errorObj);
    return new Response(
      JSON.stringify({
        success: false,
        message: "An error occurred while subscribing: " + (errorObj.message || "Unknown error"),
        debug: import.meta.env.DEV ? (errorObj.stack || "No stack trace") : undefined
      }),
      { status: 500 }
    );
  }
}; 
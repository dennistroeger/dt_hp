export const prerender = false; // Enable on-demand rendering
import type { APIRoute } from "astro";
import client from "@sendgrid/client";

// Initialize SendGrid client with API key
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
if (!SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable is not set");
}
client.setApiKey(SENDGRID_API_KEY);

// List ID to add subscribers to
const LIST_ID = "5e0ce347-a96d-4e43-b283-7b9a96cc1a71";

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const email = data.get("email");

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

    await client.request(request_data);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Thank you for subscribing!",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error adding subscriber:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "An error occurred while subscribing. Please try again later.",
      }),
      { status: 500 }
    );
  }
}; 
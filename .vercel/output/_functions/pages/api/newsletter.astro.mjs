import client from '@sendgrid/client';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const SENDGRID_API_KEY = "";
const LIST_ID = "";
client.setApiKey(SENDGRID_API_KEY);
const POST = async ({ request }) => {
  try {
    let email;
    const contentType = request.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const json = await request.json();
      email = json.email;
    } else {
      const data = await request.formData();
      email = data.get("email");
    }
    if (!email || typeof email !== "string") {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Email is required"
        }),
        { status: 400 }
      );
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Please provide a valid email address"
        }),
        { status: 400 }
      );
    }
    console.log("SendGrid API Key length:", SENDGRID_API_KEY ? SENDGRID_API_KEY.length : 0);
    console.log("List ID:", LIST_ID);
    if (!SENDGRID_API_KEY) {
      console.error("SendGrid API key is not set");
      return new Response(
        JSON.stringify({
          success: false,
          message: "Newsletter service is not properly configured (missing API key)"
        }),
        { status: 500 }
      );
    }
    if (!LIST_ID) {
      console.error("SendGrid List ID is not set");
      return new Response(
        JSON.stringify({
          success: false,
          message: "Newsletter service is not properly configured (missing list ID)"
        }),
        { status: 500 }
      );
    }
    const data_to_send = {
      list_ids: [LIST_ID],
      contacts: [
        {
          email
        }
      ]
    };
    const request_data = {
      url: `/v3/marketing/contacts`,
      method: "PUT",
      body: data_to_send
    };
    console.log("Sending request to SendGrid:", JSON.stringify(request_data));
    if (!client) {
      console.error("SendGrid client is not initialized");
      return new Response(
        JSON.stringify({
          success: false,
          message: "Newsletter service is not properly configured (client initialization failed)"
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
          message: "Thank you for subscribing!"
        }),
        { status: 200 }
      );
    } catch (sendgridError) {
      const error = sendgridError;
      console.error("SendGrid API Error:", error.code);
      console.error("SendGrid Error Response:", JSON.stringify(error.response?.body || {}));
      return new Response(
        JSON.stringify({
          success: false,
          message: "Failed to add to mailing list: " + (error.response?.body?.errors?.[0]?.message || "Unknown error from email service"),
          debug: false ? JSON.stringify(error.response?.body || {}) : void 0
        }),
        { status: 500 }
      );
    }
  } catch (error) {
    const errorObj = error;
    console.error("Error adding subscriber:", errorObj);
    return new Response(
      JSON.stringify({
        success: false,
        message: "An error occurred while subscribing: " + (errorObj.message || "Unknown error"),
        debug: void 0
      }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

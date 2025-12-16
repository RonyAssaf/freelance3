import { Resend } from "resend";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, message } = req.body ?? {};

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
    await resend.emails.send({
      from: "Pro-Luma Website <admin@pro-luma.com>",
      to: ["admin@pro-luma.com"],
      replyTo: email,
      subject: "New Contact Form Submission",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6">
          <h2>New Contact Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <p>${String(message).replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("RESEND ERROR:", error);
    return res.status(500).json({ message: "Email failed to send" });
  }
}

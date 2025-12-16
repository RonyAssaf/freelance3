import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, message } = req.body ?? {};

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: "Missing fields" });
  }

  // ✅ SMTP RELAY TRANSPORT (NO AUTH, NO PASSWORD)
  const transporter = nodemailer.createTransport({
    host: "smtp-relay.gmail.com",
    port: 587,
    secure: false,
  });

  try {
    await transporter.sendMail({
      from: "Pro-Luma Website <admin@pro-luma.com>",
      to: "admin@pro-luma.com",
      replyTo: email,
      subject: "New Contact Form Submission",
      html: `
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${String(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("EMAIL ERROR:", err);
    return res.status(500).json({ message: "Email failed to send" });
  }
}

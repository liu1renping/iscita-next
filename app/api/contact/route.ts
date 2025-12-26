// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { COMPANY_EMAIL, GMAIL_USER, GMAIL_PASS } from "@/lib/constants";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASS,
  },
});

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  try {
    await transporter.sendMail({
      from: GMAIL_USER,
      to: COMPANY_EMAIL,
      cc: email,
      replyTo: email,
      subject: `Query from ${name}: ${subject}`,
      text: message,
      html: `
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}

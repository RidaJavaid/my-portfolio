import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Karachi",
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).formatToParts(new Date());

    const getPart = (type: Intl.DateTimeFormatPartTypes) =>
      parts.find((part) => part.type === type)?.value || "";

    const submittedAt =
      `${getPart("weekday")}, ` +
      `${getPart("month")} ` +
      `${getPart("day")}, ` +
      `${getPart("year")} ` +
      `${getPart("hour")}:` +
      `${getPart("minute")} ` +
      `${getPart("dayPeriod")} (PKT)`;

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["ridajavaid.2704@gmail.com"],
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Portfolio Contact Message</h2>

          <p>
            <strong>Name:</strong><br>
            ${escapeHtml(name)}
          </p>

          <p>
            <strong>Email:</strong><br>
            ${escapeHtml(email)}
          </p>

          <p>
            <strong>Subject:</strong><br>
            ${escapeHtml(subject)}
          </p>

          <p>
            <strong>Message:</strong><br>
            ${escapeHtml(message).replace(/\n/g, "<br>")}
          </p>

          <hr>

          <p>
            <strong>Submitted at:</strong>
            ${submittedAt}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Failed to send message." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully.",
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
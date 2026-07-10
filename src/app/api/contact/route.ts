import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiter
const submissions = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (submissions.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  submissions.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

function sanitize(input: string) {
  return input.replace(/[<>]/g, "").trim().slice(0, 2000);
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Try again later." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name    = sanitize(String(body.name    ?? ""));
  const email   = sanitize(String(body.email   ?? ""));
  const subject = sanitize(String(body.subject ?? ""));
  const message = sanitize(String(body.message ?? ""));
  const honeypot = String(body.company ?? "");

  if (honeypot) return NextResponse.json({ ok: true });

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!name || !emailPattern.test(email) || message.length < 10) {
    return NextResponse.json({ error: "Invalid form data." }, { status: 422 });
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "dg.dharshini24@gmail.com",
      replyTo: email,
      subject: `Portfolio: ${subject || "New message from " + name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "—"}\n\n${message}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;">
          <h2 style="color:#2563eb;">New Portfolio Contact</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px;font-weight:bold;color:#555;">Name</td><td style="padding:8px;">${name}</td></tr>
            <tr style="background:#f9f9f9;"><td style="padding:8px;font-weight:bold;color:#555;">Email</td><td style="padding:8px;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px;font-weight:bold;color:#555;">Subject</td><td style="padding:8px;">${subject || "—"}</td></tr>
          </table>
          <div style="margin-top:20px;padding:16px;background:#f1f3f6;border-radius:8px;white-space:pre-wrap;">${message}</div>
        </div>
      `,
    });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

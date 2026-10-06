"use server";

import { services, site } from "@/lib/site";

export type InquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "country" | "message" | "consent", string>>;
  // Echoed back so the form keeps what the visitor typed (React resets forms after an action).
  values?: { [key: string]: string | string[] | boolean };
};

const text = (formData: FormData, key: string, max = 200) =>
  String(formData.get(key) ?? "").trim().slice(0, max);

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

// Sends the inquiry by email through Resend (https://resend.com). Set
// RESEND_API_KEY and CONTACT_TO_EMAIL in the Vercel project to turn it on;
// CONTACT_FROM_EMAIL must be an address on a domain verified in Resend.
export async function sendInquiry(_prev: InquiryState, formData: FormData): Promise<InquiryState> {
  // Honeypot field: real visitors never see or fill it.
  if (text(formData, "website")) return { status: "success" };

  const data = {
    name: text(formData, "name", 120),
    company: text(formData, "company", 160),
    email: text(formData, "email", 200),
    phone: text(formData, "phone", 40),
    country: text(formData, "country", 80),
    productType: text(formData, "productType", 60),
    services: formData
      .getAll("services")
      .map(String)
      .filter((s) => services.some((svc) => svc.title === s)),
    message: text(formData, "message", 5000),
    consent: formData.get("consent") === "on",
  };

  const errors: InquiryState["errors"] = {};
  if (!data.name) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Please enter a valid email address.";
  if (!data.country) errors.country = "Please tell us which country you ship from.";
  if (data.message.length < 10) errors.message = "Please tell us a little about your products.";
  if (!data.consent) errors.consent = "Please agree to the Privacy Policy so we can reply.";
  if (Object.keys(errors).length) {
    return { status: "error", message: "Please check the highlighted fields.", errors, values: data };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? `${site.name} <onboarding@resend.dev>`;
  if (!apiKey || !to) {
    console.error("Contact form is not configured: set RESEND_API_KEY and CONTACT_TO_EMAIL.");
    return {
      status: "error",
      message: `Our form is not accepting messages yet. Please email us at ${site.email}.`,
      values: data,
    };
  }

  const rows: [string, string][] = [
    ["Name", data.name],
    ["Company", data.company || "-"],
    ["Email", data.email],
    ["Phone", data.phone || "-"],
    ["Ships from", data.country],
    ["Product type", data.productType || "-"],
    ["Services", data.services.join(", ") || "-"],
  ];
  const html = `<h2>New website inquiry</h2><table>${rows
    .map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`)
    .join("")}</table><p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: to.split(",").map((s) => s.trim()),
      reply_to: data.email,
      subject: `Website inquiry from ${data.name}${data.company ? ` (${data.company})` : ""}`,
      html,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return {
      status: "error",
      message: `Something went wrong sending your message. Please email us at ${site.email}.`,
      values: data,
    };
  }

  return {
    status: "success",
    message: "Thank you. We received your message and will reply by email.",
  };
}

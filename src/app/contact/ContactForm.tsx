"use client";

import Link from "next/link";
import { useActionState } from "react";
import { sendInquiry, type InquiryState } from "./actions";
import { productTypes, services, site } from "@/lib/site";

const input =
  "mt-2 block w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-navy-900 shadow-sm placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30";
const label = "block text-sm font-medium text-navy-900";

function FieldError({ message, id }: { message?: string; id: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-sm text-red-600">
      {message}
    </p>
  );
}

export function ContactForm({ defaultService }: { defaultService?: string }) {
  const [state, action, pending] = useActionState<InquiryState, FormData>(sendInquiry, { status: "idle" });
  const errors = state.errors ?? {};
  const values = state.values ?? {};
  const value = (key: string) => (typeof values[key] === "string" ? (values[key] as string) : undefined);
  const chosen = Array.isArray(values.services) ? values.services : undefined;

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8">
        <h2 className="text-xl font-semibold text-navy-900">Message sent</h2>
        <p className="mt-2 leading-7 text-slate-700">{state.message ?? "Thank you, we will be in touch."}</p>
      </div>
    );
  }

  return (
    <form action={action} noValidate className="space-y-6">
      {state.status === "error" && state.message && (
        <div role="alert" className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.message}
        </div>
      )}

      {/* Honeypot for spam bots */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>
            Full name <span className="text-red-600">*</span>
          </label>
          <input id="name" name="name" defaultValue={value("name")} autoComplete="name" required className={input} aria-invalid={!!errors.name} aria-describedby="name-error" />
          <FieldError id="name-error" message={errors.name} />
        </div>
        <div>
          <label htmlFor="company" className={label}>
            Company
          </label>
          <input id="company" name="company" defaultValue={value("company")} autoComplete="organization" className={input} />
        </div>
        <div>
          <label htmlFor="email" className={label}>
            Business email <span className="text-red-600">*</span>
          </label>
          <input id="email" name="email" defaultValue={value("email")} type="email" autoComplete="email" required className={input} aria-invalid={!!errors.email} aria-describedby="email-error" />
          <FieldError id="email-error" message={errors.email} />
        </div>
        <div>
          <label htmlFor="phone" className={label}>
            Phone or WhatsApp
          </label>
          <input id="phone" name="phone" defaultValue={value("phone")} type="tel" autoComplete="tel" className={input} />
        </div>
        <div>
          <label htmlFor="country" className={label}>
            Country you ship from <span className="text-red-600">*</span>
          </label>
          <input id="country" name="country" defaultValue={value("country")} autoComplete="country-name" required className={input} aria-invalid={!!errors.country} aria-describedby="country-error" />
          <FieldError id="country-error" message={errors.country} />
        </div>
        <div>
          <label htmlFor="productType" className={label}>
            Product type
          </label>
          <select key={value("productType") ?? "none"} id="productType" name="productType" defaultValue={value("productType") ?? ""} className={input}>
            <option value="" disabled>
              Select one
            </option>
            {productTypes.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </div>
      </div>

      <fieldset>
        <legend className={label}>Services you need</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {services.map((s) => (
            <label key={s.slug} className="flex items-center gap-3 rounded-md border border-slate-200 px-3 py-2.5 text-sm text-slate-700 has-[:checked]:border-brand-500 has-[:checked]:bg-brand-50">
              <input type="checkbox" name="services" value={s.title} defaultChecked={chosen ? chosen.includes(s.title) : s.slug === defaultService} className="h-4 w-4 accent-brand-600" />
              {s.title}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="message" className={label}>
          Tell us about your products <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          defaultValue={value("message")}
          rows={6}
          required
          placeholder="What you make, where it is made, how you plan to sell in the US, and your target ship date."
          className={input}
          aria-invalid={!!errors.message}
          aria-describedby="message-error"
        />
        <FieldError id="message-error" message={errors.message} />
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm leading-6 text-slate-600">
          <input type="checkbox" name="consent" defaultChecked={values.consent === true} required className="mt-1 h-4 w-4 accent-brand-600" aria-describedby="consent-error" />
          <span>
            I agree that {site.name} may use these details to reply to my inquiry, as described in the{" "}
            <Link href="/privacy" className="font-medium text-brand-600 underline-offset-2 hover:underline">
              Privacy Policy
            </Link>
            . <span className="text-red-600">*</span>
          </span>
        </label>
        <FieldError id="consent-error" message={errors.consent} />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-md bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-navy-800 disabled:opacity-60 sm:w-auto"
      >
        {pending ? "Sending..." : "Send inquiry"}
      </button>
      <p className="text-xs leading-5 text-slate-500">
        Please do not include confidential formulas or trade secrets in this form. We will ask for
        documents once we start working together.
      </p>
    </form>
  );
}

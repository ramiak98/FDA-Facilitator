import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Check, PageHero } from "@/components/ui";
import { site } from "@/lib/site";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a consultation on FDA registration, US Agent services, customs entry, USPTO trademarks or shipping FDA-regulated products to the United States.",
};

export default async function ContactPage({ searchParams }: PageProps<"/contact">) {
  const { service } = await searchParams;

  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Contact"
          title="Tell us what you want to bring to the US"
          text="Send us a few details about your products and we'll reply with the FDA, CBP and USPTO steps that apply, and how we can help."
          crumbs={[{ label: "Contact", href: "/contact" }]}
        />

        <section className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
            <div className="lg:col-span-2">
              <ContactForm defaultService={typeof service === "string" ? service : undefined} />
            </div>
            <aside className="space-y-8">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="font-semibold text-navy-900">Prefer email?</h2>
                <a href={`mailto:${site.email}`} className="mt-2 block text-sm font-medium text-brand-600 hover:text-navy-900">
                  {site.email}
                </a>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h2 className="font-semibold text-navy-900">What happens next</h2>
                <ul className="mt-4 space-y-3">
                  {[
                    "We review your products and where they are made.",
                    "We reply with the registrations, filings and documents you need.",
                    "If you want our help, we send a proposal before any work starts.",
                  ].map((t) => (
                    <li key={t} className="flex gap-3 text-sm leading-6 text-slate-700">
                      <Check />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-xs leading-5 text-slate-500">
                Sending this form does not create an attorney-client relationship or engage us to act
                for you. We will confirm any engagement in writing.
              </p>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

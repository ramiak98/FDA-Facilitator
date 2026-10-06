import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Check, ContactCta, PageHero, ServiceIcon } from "@/components/ui";
import { services, steps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "FDA compliance, customs and import, USPTO trademark and logistics services for companies bringing products to the United States.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Services"
          title="Everything you need to sell in the United States"
          text="Four services that cover what FDA, CBP and the USPTO expect from foreign manufacturers and US importers. Use one, or let us run the whole process."
          crumbs={[{ label: "Services", href: "/services" }]}
        />

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
            {services.map((s) => (
              <article
                key={s.slug}
                className="grid gap-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-5"
              >
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-4">
                    <ServiceIcon id={s.id} />
                    <div>
                      <h2 className="text-xl font-semibold text-navy-900">{s.title}</h2>
                      <p className="text-sm text-slate-500">{s.agency}</p>
                    </div>
                  </div>
                  <p className="mt-5 leading-7 text-slate-600">{s.summary}</p>
                  <Link
                    href={`/services/${s.slug}`}
                    className="mt-6 inline-block rounded-md bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-800"
                  >
                    Explore {s.title}
                  </Link>
                </div>
                <ul className="grid content-start gap-3 sm:grid-cols-2 lg:col-span-3">
                  {s.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
                      <Check />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">How we work together</h2>
            <ol className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, idx) => (
                <li key={step.title}>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 text-sm font-semibold text-white">
                    {idx + 1}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-navy-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <ContactCta />
      </main>
      <Footer />
    </>
  );
}

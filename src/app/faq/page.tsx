import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ContactCta, Faqs, PageHero } from "@/components/ui";
import { serviceDetails } from "@/lib/service-details";
import { faqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about FDA registration, US Agents, Prior Notice, FSVP, customs entry, USPTO trademarks and shipping to the US.",
};

export default function FaqPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="FAQ"
          title="Frequently asked questions"
          text="Straight answers about bringing FDA-regulated products into the United States."
          crumbs={[{ label: "FAQ", href: "/faq" }]}
        />

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl space-y-14 px-4 sm:px-6 lg:px-8">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-navy-900">General</h2>
              <div className="mt-6">
                <Faqs items={faqs} />
              </div>
            </div>
            {serviceDetails.map((d) => (
              <div key={d.slug}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy-900">{d.title}</h2>
                  <Link href={`/services/${d.slug}`} className="text-sm font-medium text-brand-600 hover:text-navy-900">
                    View service &rarr;
                  </Link>
                </div>
                <div className="mt-6">
                  <Faqs items={d.faqs} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <ContactCta />
      </main>
      <Footer />
    </>
  );
}

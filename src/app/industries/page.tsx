import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Check, ContactCta, PageHero } from "@/components/ui";
import { photos } from "@/lib/images";
import { industries, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "US import and FDA requirements for food, dietary supplements, cosmetics, medical devices, drugs and consumer goods.",
};

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Industries"
          title="The US rules that apply to your products"
          text="Each product category has its own FDA, CBP and labeling requirements. Here is an overview of the main ones we help with."
          crumbs={[{ label: "Industries", href: "/industries" }]}
          image={photos.industries}
        >
          <div className="mt-10 flex flex-wrap gap-2">
            {industries.map((i) => (
              <a
                key={i.id}
                href={`#${i.id}`}
                className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm text-white transition hover:bg-white/10"
              >
                {i.name}
              </a>
            ))}
          </div>
        </PageHero>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-5xl space-y-10 px-4 sm:px-6 lg:px-8">
            {industries.map((i) => (
              <article key={i.id} id={i.id} className="scroll-mt-24 rounded-2xl border border-slate-200 p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-navy-900">{i.name}</h2>
                <p className="mt-4 leading-7 text-slate-600">{i.intro}</p>
                <h3 className="mt-8 text-sm font-semibold uppercase tracking-widest text-brand-600">
                  Main requirements
                </h3>
                <ul className="mt-4 space-y-3">
                  {i.rules.map((r) => (
                    <li key={r} className="flex gap-3 text-sm leading-6 text-slate-700">
                      <Check />
                      {r}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  {services
                    .filter((s) => i.services.includes(s.slug))
                    .map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="rounded-md border border-slate-200 px-4 py-2 text-sm font-medium text-navy-900 transition hover:border-brand-500 hover:text-brand-600"
                      >
                        {s.title} &rarr;
                      </Link>
                    ))}
                </div>
              </article>
            ))}
            <p className="text-sm leading-6 text-slate-500">
              This overview is general information, not legal advice. Requirements depend on the
              specific product and how it is marketed, and they change over time.
            </p>
          </div>
        </section>

        <ContactCta />
      </main>
      <Footer />
    </>
  );
}

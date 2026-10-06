import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Check, ContactCta, PageHero, SectionHeading, ServiceIcon } from "@/components/ui";
import { photos } from "@/lib/images";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} is a single point of contact for companies bringing FDA-regulated products into the United States.`,
};

const principles = [
  {
    title: "Grounded in the actual rules",
    text: "Our guidance points to the regulation behind it, in the Code of Federal Regulations and official FDA, CBP and USPTO guidance, so you know why each step is required.",
  },
  {
    title: "One point of contact",
    text: "Registration, customs, trademark and freight usually involve several providers. We coordinate them so you deal with one team.",
  },
  {
    title: "Licensed professionals where the law requires them",
    text: "Customs entries are filed by licensed US customs brokers and trademark legal work is handled by US-licensed attorneys.",
  },
  {
    title: "Clear about what we can't promise",
    text: "FDA, CBP and USPTO make their own decisions. We prepare you as well as possible and are honest about the risks.",
  },
];

const audiences = [
  "Manufacturers outside the US exporting food, supplements, cosmetics, devices or drugs",
  "US importers and distributors who need foreign suppliers to be compliant",
  "Brands launching on US retail and e-commerce channels",
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="About us"
          title="Your partner for entering the US market"
          text={`${site.name} helps companies bring FDA-regulated products into the United States, from facility registration to cleared cargo and a protected brand.`}
          crumbs={[{ label: "About", href: "/about" }]}
          image={photos.hero}
        />

        <section className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-navy-900">Why we exist</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Selling in the US means meeting the requirements of several federal agencies at once.
                A food maker needs an FDA facility registration, a US Agent, Prior Notice for every
                shipment and an importer who meets FSVP. A cosmetics brand needs MoCRA registration and
                listing. Every shipment needs to clear CBP, and every brand should be protected at the
                USPTO.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Missing one step can mean a detained shipment or a product that can&apos;t be sold. We
                bring these steps together in one service so you can focus on your customers.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h2 className="text-lg font-semibold text-navy-900">Who we work with</h2>
              <ul className="mt-5 space-y-4">
                {audiences.map((a) => (
                  <li key={a} className="flex gap-3 leading-7 text-slate-700">
                    <Check />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="How we work" title="What you can expect from us" />
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {principles.map((p) => (
                <div key={p.title} className="rounded-xl border border-slate-200 bg-white p-6">
                  <h3 className="font-semibold text-navy-900">{p.title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Services" title="Everything you need in one place" />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="rounded-xl border border-slate-200 p-6 transition hover:border-brand-500/40 hover:shadow-md"
                >
                  <ServiceIcon id={s.id} />
                  <h3 className="mt-4 font-semibold text-navy-900">{s.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{s.agency}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ContactCta />
      </main>
      <Footer />
    </>
  );
}

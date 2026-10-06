import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Check, ContactCta, Faqs, PageHero, ServiceIcon } from "@/components/ui";
import { servicePhoto } from "@/lib/images";
import { getServiceDetail, serviceDetails } from "@/lib/service-details";
import { services } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceDetails.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const detail = getServiceDetail(slug);
  if (!detail) return {};
  return {
    title: detail.title,
    description: detail.metaDescription,
    openGraph: { title: detail.title, description: detail.metaDescription },
  };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const detail = getServiceDetail(slug);
  if (!detail) notFound();

  const related = services.filter((s) => detail.related.includes(s.slug));

  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow={detail.agency}
          title={detail.headline}
          text={detail.intro}
          image={servicePhoto(detail.slug)}
          crumbs={[
            { label: "Services", href: "/services" },
            { label: detail.title, href: `/services/${detail.slug}` },
          ]}
        >
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={`/contact?service=${detail.slug}`}
              className="rounded-md bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600"
            >
              Get a consultation
            </Link>
            <a
              href="#offerings"
              className="rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              What&apos;s included
            </a>
          </div>
        </PageHero>

        {/* Overview and who it's for */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">Overview</h2>
              {detail.overview.map((p) => (
                <p key={p} className="mt-5 text-lg leading-8 text-slate-600">
                  {p}
                </p>
              ))}
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 lg:col-span-2">
              <h2 className="font-semibold text-navy-900">Who this is for</h2>
              <ul className="mt-5 space-y-3">
                {detail.whoNeedsIt.map((w) => (
                  <li key={w} className="flex gap-3 text-sm leading-6 text-slate-700">
                    <Check />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Offerings */}
        <section id="offerings" className="scroll-mt-16 bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">What we handle</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {detail.offerings.map((o) => (
                <article key={o.title} className="rounded-xl border border-slate-200 bg-white p-6">
                  <h3 className="font-semibold text-navy-900">{o.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{o.text}</p>
                  {o.ref && (
                    <p className="mt-4 inline-flex rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-600">
                      {o.ref}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Key facts */}
        <section className="bg-navy-900 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Key dates and deadlines</h2>
            <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {detail.keyFacts.map((f) => (
                <div key={f.label} className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <dt className="text-sm text-slate-400">{f.label}</dt>
                  <dd className="mt-2 font-semibold text-white">{f.value}</dd>
                  {f.ref && <dd className="mt-3 text-xs text-brand-500">{f.ref}</dd>}
                </div>
              ))}
            </dl>
            {detail.note && <p className="mt-8 max-w-3xl text-sm leading-6 text-slate-400">{detail.note}</p>}
          </div>
        </section>

        {/* Process and documents */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">How it works</h2>
              <ol className="mt-8 space-y-8">
                {detail.process.map((step, idx) => (
                  <li key={step.title} className="flex gap-5">
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-navy-900 text-sm font-semibold text-white">
                      {idx + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-navy-900">{step.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-2xl border border-slate-200 p-8 lg:col-span-2">
              <h2 className="font-semibold text-navy-900">What we&apos;ll need from you</h2>
              <ul className="mt-5 space-y-3">
                {detail.documents.map((d) => (
                  <li key={d} className="flex gap-3 text-sm leading-6 text-slate-700">
                    <Check />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">
              {detail.title} questions
            </h2>
            <div className="mt-8">
              <Faqs items={detail.faqs} />
            </div>
          </div>
        </section>

        {/* Related services */}
        <section className="pt-16 sm:pt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">Related services</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="flex gap-4 rounded-xl border border-slate-200 p-6 transition hover:border-brand-500/40 hover:shadow-md"
                >
                  <ServiceIcon id={s.id} />
                  <span>
                    <span className="block font-semibold text-navy-900">{s.title}</span>
                    <span className="mt-1 block text-sm leading-6 text-slate-600">{s.summary}</span>
                  </span>
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

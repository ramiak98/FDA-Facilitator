import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { deadlines, faqs, industries, services, site, steps } from "@/lib/site";

const serviceIcons: Record<string, React.ReactNode> = {
  fda: <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3M7.5 14h9" />,
  customs: <path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6" />,
  trademark: <path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4l-5.2 2.7 1-5.8L3.5 9.2l5.9-.9L12 3z" />,
  logistics: <path d="M2 7h11v9H2zM13 10h4l3 3v3h-7M6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM17 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />,
};

function Check() {
  return (
    <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 flex-none text-brand-600" fill="currentColor" aria-hidden="true">
      <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0z" />
    </svg>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-lg leading-8 text-slate-600">{text}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-navy-900">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 80% 20%, #2b86e8 0, transparent 45%), radial-gradient(circle at 10% 90%, #12305a 0, transparent 40%)",
            }}
            aria-hidden="true"
          />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
            <div>
              <p className="inline-flex rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-brand-100">
                FDA &middot; CBP &middot; USPTO compliance for US market entry
              </p>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Bring your products to the US market, compliant from day one.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                We handle FDA registration and US Agent services, customs entry, trademark
                protection and logistics, so you can focus on selling in the United States.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-md bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600"
                >
                  Get a free consultation
                </a>
                <a
                  href="#services"
                  className="rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explore services
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
              <p className="text-sm font-semibold text-white">Your US entry checklist</p>
              <ul className="mt-5 space-y-4">
                {[
                  ["FDA facility registration", "Food, drug, device and cosmetic facilities"],
                  ["US Agent designation", "Required for foreign facilities"],
                  ["Prior Notice & FSVP", "Before food shipments arrive"],
                  ["CBP entry & ISF", "Filed through licensed customs brokers"],
                  ["USPTO trademark", "Protect your brand before launch"],
                ].map(([title, note]) => (
                  <li key={title} className="flex gap-3">
                    <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-500">
                      <svg viewBox="0 0 20 20" className="h-3 w-3 text-white" fill="currentColor" aria-hidden="true">
                        <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0z" />
                      </svg>
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-white">{title}</span>
                      <span className="block text-sm text-slate-400">{note}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Agencies strip */}
        <section className="border-b border-slate-200 bg-brand-50">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 text-center sm:grid-cols-3 sm:px-6 lg:px-8">
            {[
              ["FDA", "Food and Drug Administration"],
              ["CBP", "Customs and Border Protection"],
              ["USPTO", "Patent and Trademark Office"],
            ].map(([abbr, name]) => (
              <div key={abbr}>
                <p className="text-2xl font-semibold text-navy-900">{abbr}</p>
                <p className="text-sm text-slate-600">U.S. {name} requirements</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-16 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Services"
              title="One partner for every step into the US"
              text="Four services that cover what US regulators expect from importers and foreign manufacturers."
            />
            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {services.map((s) => (
                <article
                  key={s.id}
                  id={s.id}
                  className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-brand-500/40 hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        {serviceIcons[s.id]}
                      </svg>
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-navy-900">{s.title}</h3>
                      <p className="text-sm text-slate-500">{s.agency}</p>
                    </div>
                  </div>
                  <p className="mt-5 leading-7 text-slate-600">{s.summary}</p>
                  <ul className="mt-6 space-y-3">
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
          </div>
        </section>

        {/* Industries */}
        <section id="industries" className="scroll-mt-16 bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Industries"
              title="Built for FDA-regulated products"
              text="Each product category has its own US rules. We know which ones apply to yours."
            />
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((i) => (
                <div key={i.name} className="rounded-xl border border-slate-200 bg-white p-6">
                  <h3 className="font-semibold text-navy-900">{i.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{i.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="scroll-mt-16 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="How it works" title="From first call to cleared cargo" />
            <ol className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, idx) => (
                <li key={step.title} className="relative">
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

        {/* Deadlines */}
        <section id="deadlines" className="scroll-mt-16 bg-navy-900 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-500">Key deadlines</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                FDA renewal dates you can&apos;t miss
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                A lapsed registration can stop your shipments at the border. We track these dates for you.
              </p>
            </div>
            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {deadlines.map((d) => (
                <div key={d.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <h3 className="font-semibold text-white">{d.title}</h3>
                  <p className="mt-2 text-sm font-medium text-brand-500">{d.when}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{d.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-16 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="FAQ" title="Common questions" />
            <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
              {faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-navy-900 [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="text-xl text-brand-600 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 leading-7 text-slate-600">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="scroll-mt-16 px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-3xl bg-brand-600 px-6 py-14 text-center sm:px-12">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Ready to enter the US market?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-brand-100">
              Tell us about your products and where you ship from. We&apos;ll tell you exactly which
              FDA, CBP and USPTO steps apply.
            </p>
            <a
              href={`mailto:${site.email}?subject=Consultation%20request`}
              className="mt-8 inline-block rounded-md bg-white px-6 py-3 text-sm font-semibold text-brand-600 shadow-sm transition hover:bg-brand-50"
            >
              Email {site.email}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

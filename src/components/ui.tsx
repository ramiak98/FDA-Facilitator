import Image from "next/image";
import Link from "next/link";
import type { Photo } from "@/lib/images";
import { site } from "@/lib/site";

const serviceIcons: Record<string, React.ReactNode> = {
  fda: <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3M7.5 14h9" />,
  customs: <path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6" />,
  trademark: <path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4l-5.2 2.7 1-5.8L3.5 9.2l5.9-.9L12 3z" />,
  logistics: <path d="M2 7h11v9H2zM13 10h4l3 3v3h-7M6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM17 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />,
};

export function ServiceIcon({ id, className = "h-12 w-12" }: { id: string; className?: string }) {
  return (
    <span className={`flex flex-none items-center justify-center rounded-xl bg-brand-100 text-brand-600 ${className}`}>
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {serviceIcons[id]}
      </svg>
    </span>
  );
}

export function Check() {
  return (
    <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 flex-none text-brand-600" fill="currentColor" aria-hidden="true">
      <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0z" />
    </svg>
  );
}

export function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-lg leading-8 text-slate-600">{text}</p>}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  crumbs,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  text: string;
  crumbs?: { label: string; href: string }[];
  image?: Photo;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      {image && <HeroImage photo={image} />}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 85% 15%, #2b86e8 0, transparent 45%), radial-gradient(circle at 5% 95%, #12305a 0, transparent 40%)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-400">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              {crumbs.map((c) => (
                <li key={c.href} className="flex items-center gap-2">
                  <span aria-hidden="true">/</span>
                  <Link href={c.href} className="hover:text-white">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        )}
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-500">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{text}</p>
        {children}
      </div>
    </section>
  );
}

// Full-bleed background photo with a navy overlay so white text stays readable.
export function HeroImage({ photo }: { photo: Photo }) {
  return (
    <>
      <Image src={photo.src} alt={photo.alt} fill preload sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/85 to-navy-900/50" aria-hidden="true" />
    </>
  );
}

export function ContactCta() {
  return (
    <section id="contact" className="scroll-mt-16 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
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
  );
}

export function Faqs({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-slate-200 border-y border-slate-200">
      {items.map((f) => (
        <details key={f.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-navy-900 [&::-webkit-details-marker]:hidden">
            {f.q}
            <span className="text-xl text-brand-600 transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 leading-7 text-slate-600">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

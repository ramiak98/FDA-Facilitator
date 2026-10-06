import Link from "next/link";
import { Logo } from "@/components/Logo";
import { nav, services } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="FDA Facilitator home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((item) =>
            item.href === "/services" ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-medium text-slate-600 transition hover:text-navy-900"
                >
                  {item.label}
                  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4z" />
                  </svg>
                </Link>
                <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="block rounded-lg px-3 py-2.5 hover:bg-brand-50"
                      >
                        <span className="block text-sm font-medium text-navy-900">{s.title}</span>
                        <span className="block text-xs text-slate-500">{s.agency}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition hover:text-navy-900"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <Link
          href="/contact"
          className="hidden rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-navy-800 md:inline-block"
        >
          Get a consultation
        </Link>
        <details className="group relative md:hidden">
          <summary className="cursor-pointer list-none rounded-md p-2 text-navy-900 [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Open menu</span>
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          </summary>
          <div className="absolute right-0 mt-2 w-64 rounded-lg border border-slate-200 bg-white p-2 shadow-lg">
            {nav.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-brand-50"
                >
                  {item.label}
                </Link>
                {item.href === "/services" &&
                  services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="block rounded-md py-1.5 pl-6 pr-3 text-sm text-slate-500 hover:bg-brand-50"
                    >
                      {s.title}
                    </Link>
                  ))}
              </div>
            ))}
            <Link
              href="/contact"
              className="mt-1 block rounded-md bg-brand-600 px-3 py-2 text-center text-sm font-semibold text-white"
            >
              Get a consultation
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}

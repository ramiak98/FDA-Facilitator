import { Logo } from "@/components/Logo";
import { nav } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" aria-label="FDA Facilitator home">
          <Logo />
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-navy-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-navy-800 md:inline-block"
        >
          Get a consultation
        </a>
        <details className="group relative md:hidden">
          <summary className="cursor-pointer list-none rounded-md p-2 text-navy-900 [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Open menu</span>
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          </summary>
          <div className="absolute right-0 mt-2 w-56 rounded-lg border border-slate-200 bg-white p-2 shadow-lg">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-brand-50"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-1 block rounded-md bg-brand-600 px-3 py-2 text-center text-sm font-semibold text-white"
            >
              Get a consultation
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}

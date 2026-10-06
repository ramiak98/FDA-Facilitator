import { Logo } from "@/components/Logo";
import { nav, services, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo light />
            <p className="mt-4 max-w-sm text-sm leading-6">{site.description}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="hover:text-white">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.slice(1).map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-xs leading-5">
          <p>
            {site.name} is a private company. It is not affiliated with, endorsed by, or acting on
            behalf of the U.S. Food and Drug Administration (FDA), U.S. Customs and Border
            Protection (CBP), or the U.S. Patent and Trademark Office (USPTO). FDA registration
            does not denote FDA approval. Information on this site is general and is not legal
            advice. Trademark legal services are provided by US-licensed attorneys, and customs
            entries are filed by licensed US customs brokers.
          </p>
          <p className="mt-4">
            &copy; {year} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

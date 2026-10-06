import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { services } from "@/lib/site";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex flex-1 items-center bg-slate-50">
        <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">404</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy-900">Page not found</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            The page you are looking for doesn&apos;t exist or has moved.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/" className="rounded-md bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-navy-800">
              Back to home
            </Link>
            <Link href="/contact" className="rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-navy-900 transition hover:bg-white">
              Contact us
            </Link>
          </div>
          <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="font-medium text-brand-600 hover:text-navy-900">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}

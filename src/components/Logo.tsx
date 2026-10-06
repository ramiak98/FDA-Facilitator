import { site } from "@/lib/site";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
        <rect width="32" height="32" rx="7" className="fill-brand-600" />
        <path
          d="M9 16.5l4.5 4.5L23 11.5"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className={`text-lg font-semibold tracking-tight ${light ? "text-white" : "text-navy-900"}`}
      >
        {site.name}
      </span>
    </span>
  );
}

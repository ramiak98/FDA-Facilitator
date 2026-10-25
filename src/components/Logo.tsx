import Image from "next/image";
import { site } from "@/lib/site";

// The official FDA Facilitator logo, redrawn as SVG from the client's artwork.
// `light` swaps the dark-blue wordmark for white, for use on dark backgrounds.
export function Logo({ light = false, className = "h-11 w-auto" }: { light?: boolean; className?: string }) {
  return (
    <Image
      src={light ? "/brand/fda-facilitator-logo-on-dark.svg" : "/brand/fda-facilitator-logo.svg"}
      alt={site.name}
      width={1808}
      height={917}
      unoptimized
      className={className}
    />
  );
}

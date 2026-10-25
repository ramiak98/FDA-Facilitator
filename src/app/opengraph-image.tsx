import { ImageResponse } from "next/og";
import { brandColors, brandImage } from "@/lib/brand";
import { site } from "@/lib/site";

export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Preview image shown when the site is shared on LinkedIn, WhatsApp, X, etc.
export default async function OpengraphImage() {
  const logo = await brandImage("fda-facilitator-logo.svg");
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#ffffff" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 72px 56px" }}>
          <img src={logo} width={276} height={140} alt="" />
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div style={{ fontSize: 62, fontWeight: 700, lineHeight: 1.1, maxWidth: 1000, color: brandColors.navy }}>
              Bring your products to the US market, compliant from day one.
            </div>
            <div style={{ fontSize: 28, color: brandColors.blue }}>
              FDA registration &amp; US Agent · Customs &amp; import · Trademark · Logistics
            </div>
          </div>
        </div>
        <div style={{ display: "flex", height: 22 }}>
          <div style={{ flex: 7, background: brandColors.blue }} />
          <div style={{ flex: 3, background: brandColors.lightBlue }} />
        </div>
      </div>
    ),
    size,
  );
}

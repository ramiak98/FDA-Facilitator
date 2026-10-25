import { ImageResponse } from "next/og";
import { brandImage } from "@/lib/brand";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const mark = await brandImage("fda-facilitator-mark.svg");
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#ffffff" }}>
        <img src={mark} width={136} height={136} alt="" />
      </div>
    ),
    size,
  );
}

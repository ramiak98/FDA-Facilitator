import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Brand colors sampled from the FDA Facilitator logo.
export const brandColors = {
  blue: "#3567B0",
  lightBlue: "#42B8E8",
  navy: "#0f2445",
};

// Loads a logo file from public/brand as a data URI, for generated images (icons, share preview).
export async function brandImage(file: string) {
  const svg = await readFile(join(process.cwd(), "public/brand", file));
  return `data:image/svg+xml;base64,${svg.toString("base64")}`;
}

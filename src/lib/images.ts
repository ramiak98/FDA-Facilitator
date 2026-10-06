// Stock photos from Unsplash, used under the Unsplash License
// (https://unsplash.com/license): free for commercial use, no attribution
// required. Credits are kept here for reference. Only free (non-Unsplash+)
// photos are used.
export type Photo = { src: string; alt: string; credit: string; page: string };

const unsplash = (id: string) => `https://images.unsplash.com/${id}`;

export const photos = {
  hero: {
    src: unsplash("photo-1590496793907-4d66e2994b4d"),
    alt: "Container ship being loaded by cranes at a port at dusk",
    credit: "timelabpro",
    page: "https://unsplash.com/photos/yx20mpDyr2I",
  },
  services: {
    src: unsplash("photo-1565688534245-05d6b5be184a"),
    alt: "Two people reviewing documents at a meeting table",
    credit: "Van Tay Media",
    page: "https://unsplash.com/photos/TFFn3BYLc5s",
  },
  industries: {
    src: unsplash("photo-1601598851547-4302969d0614"),
    alt: "Shopping cart in a grocery store aisle",
    credit: "Eduardo Soares",
    page: "https://unsplash.com/photos/QsYXYSwV3NU",
  },
  "fda-compliance": {
    src: unsplash("photo-1551884170-09fb70a3a2ed"),
    alt: "Workers in protective coats and masks inside a production facility",
    credit: "Walter Otto",
    page: "https://unsplash.com/photos/PT70CT6mATQ",
  },
  "customs-import": {
    src: unsplash("photo-1606964212858-c215029db704"),
    alt: "Stacked shipping containers at a port",
    credit: "barrettward",
    page: "https://unsplash.com/photos/5WQJ_ejZ7y8",
  },
  trademark: {
    src: unsplash("photo-1681505531034-8d67054e07f6"),
    alt: "Two people shaking hands over a signed document",
    credit: "Amina Atar",
    page: "https://unsplash.com/photos/4mEyvORkbN0",
  },
  logistics: {
    src: unsplash("photo-1553413077-190dd305871c"),
    alt: "Large warehouse with stocked shelving",
    credit: "Ruchindra Gunasekara",
    page: "https://unsplash.com/photos/GK8x_XCcDZg",
  },
} satisfies Record<string, Photo>;

export function servicePhoto(slug: string): Photo | undefined {
  return (photos as Record<string, Photo>)[slug];
}

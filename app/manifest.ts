import type { MetadataRoute } from "next";

import { COMPANY_NAME, COMPANY_SHORTNAME } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: COMPANY_NAME,
    short_name: COMPANY_SHORTNAME,
    description: `${COMPANY_NAME} is the financial and contracting entity for international engineering and science conferences in Australia.`,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f766e",
    icons: [
      {
        src: "/icons/iscita-android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/iscita-android-icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MobilTarif — Akıllı İlaç Hatırlatma",
    short_name: "MobilTarif",
    description:
      "MobilTarif ile ilaçlarınızı hiç unutmayın. Akıllı ilaç hatırlatma, reçete yönetimi, ilaç takip ve aile paylaşımı tek uygulamada.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2c76be",
    lang: "tr",
    icons: [
      {
        src: "/mobiltarif-svg-1.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/mobiltarif-svg-1.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}

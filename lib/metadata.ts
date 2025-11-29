import { env } from "@/env";

import type { Metadata } from "next/types";

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: env.NEXT_PUBLIC_APP_URL,
      images: "/logo-dark.svg",
      siteName: "DocsBoxs",
      ...override.openGraph,
    },

    twitter: {
      card: "summary_large_image",
      creator: "@mrboxs",
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: "/logo-dark.svg",
      ...override.twitter,
    },

    metadataBase: override.metadataBase ?? new URL(env.NEXT_PUBLIC_APP_URL),
  };
}

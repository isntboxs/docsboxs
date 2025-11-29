import { AppProvider } from "@/components/providers/app-provider";
import { geistMono, geistSans } from "@/lib/fonts";
import { createMetadata } from "@/lib/metadata";

import "@/styles/globals.css";

export const metadata = createMetadata({
  title: {
    template: "%s | DocsBoxs",
    default: "DocsBoxs",
  },
  description: "Simple blog application, written by boxs.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        rel: "icon",
        href: "/logo-dark.svg",
        url: "/logo-dark.svg",
      },
      {
        media: "(prefers-color-scheme: light)",
        rel: "icon",
        href: "/logo-light.svg",
        url: "/logo-light.svg",
      },
    ],
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}

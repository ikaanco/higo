import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://higo.com.tr"),

  title: "HiGO | Yandex Pro Resmi İş Ortağı",

  description:
    "İstanbul'da sürücüler için daha güçlü, daha şeffaf ve daha verimli sistem.",

  keywords: [
    "HiGO",
    "Yandex Pro",
    "İstanbul",
    "Taksi",
    "Sürücü",
  ],

  applicationName: "HiGO",

  openGraph: {
    title: "HiGO",

    description:
      "İstanbul'da Yandex Pro resmi iş ortağı.",

    url: "https://higo.com.tr",

    siteName: "HiGO",

    locale: "tr_TR",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "HiGO",

    description:
      "İstanbul'da Yandex Pro resmi iş ortağı.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">

      <head>

        <link
          rel="icon"
          href="/hi.png"
          type="image/png"
        />

        <link
          rel="shortcut icon"
          href="/hi.png"
        />

        <link
          rel="apple-touch-icon"
          href="/hi.png"
        />

      </head>

      <body
        className={`
        ${geist.className}
        bg-black
        text-white
        antialiased
        min-h-screen
        `}
      >
        {children}
      </body>

    </html>
  );
}
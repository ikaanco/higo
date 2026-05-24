import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
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
    "Yandex",
  ],

  applicationName: "HiGO",

  icons: {
    icon: "hi.png",
  },

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geist.variable} scroll-smooth`}
    >
      <body
        className="
        bg-black
        text-white
        antialiased
        min-h-screen"
      >
        {children}
      </body>
    </html>
  );
}
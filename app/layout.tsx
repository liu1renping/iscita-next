import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL, COMPANY_NAME, COMPANY_EMAIL, COMPANY_SHORTNAME } from "@/lib/constants";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/Geist-Variable.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
  style: "normal",
});

const geistMono = localFont({
  src: "./fonts/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
  style: "normal",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: COMPANY_NAME + " - International Conference Management",
    template: `%s · ${COMPANY_NAME}`,
  },
  description: `${COMPANY_SHORTNAME} hosts international engineering and science conferences, such as International Symposium on Communications and Information Technologies (ISCIT), in Australia.`,
  icons: {
    icon: [
      { url: "/iscita-favicon.ico" }, // default favicon 48x48
      { url: "/iscita-favicon-16x16.png", sizes: "16x16" },
      { url: "/iscita-favicon-32x32.png", sizes: "32x32" },
    ],
    apple: "/icons/iscita-apple-touch-icon.png",
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-AU": SITE_URL,
      "en-AP": SITE_URL,
    },
  },
  openGraph: {
    type: "website",
    title: COMPANY_NAME,
    description: "Join international communications and information technology leaders.",
    url: SITE_URL,
    siteName: COMPANY_NAME,
    images: [{ url: "/images/iscita-ogimg.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: COMPANY_NAME,
    description: "Join international communications and information technology leaders.",
    images: ["/images/iscita-ogimg.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icons/iscita-apple-touch-icon.png`,
    sameAs: [SITE_URL],
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: COMPANY_EMAIL,
        contactType: "customer service",
        areaServed: "AU",
        availableLanguage: ["English"],
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col`}
      >
        <ThemeProvider>
          <Navbar />
          <div className="flex-1 w-full">{children}</div>
          <Footer />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Menubars/Footer";
import Navbar from "@/components/Menubars/Navbar";
import Script from "next/script";

// Optimize font loading with display swap
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.cnkiit.in"),
  title: {
    default: "Coding Ninjas: KIIT Chapter",
    template: "%s | Coding Ninjas KIIT Chapter",
  },
  description:
    "Join the Coding Ninjas KIIT Chapter to enhance your programming skills, participate in events, and contribute to open source projects. Connect with like-minded individuals and grow your knowledge in a collaborative environment.",
  keywords: [
    "Coding Ninjas",
    "KIIT",
    "Programming Community",
    "Tech Events",
    "Coding Workshops",
    "Open Source Projects",
    "Student Developers",
    "Programming Skills",
    "Tech Learning",
  ],
  authors: [{ name: "Coding Ninjas KIIT Chapter" }],
  creator: "Coding Ninjas KIIT Chapter",
  publisher: "Coding Ninjas KIIT Chapter",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.cnkiit.in",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.cnkiit.in",
    siteName: "Coding Ninjas: KIIT Chapter",
    title: "Coding Ninjas: KIIT Chapter",
    description:
      "Join the Coding Ninjas KIIT Chapter to enhance your programming skills, participate in events, and contribute to open source projects.",
    images: [
      {
        url: "https://www.cnkiit.in/logo.png",
        width: 800,
        height: 600,
        alt: "Coding Ninjas: KIIT Chapter Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coding Ninjas: KIIT Chapter",
    description:
      "Join the Coding Ninjas KIIT Chapter to enhance your programming skills and participate in tech events.",
    images: ["https://www.cnkiit.in/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
    href="https://fonts.googleapis.com/css2?family=Bungee+Inline&display=swap"
    rel="stylesheet"
  />

      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <Navbar />
        <main >
          {children}
        </main>
        <Footer />
        <Script id="organization-schema" type="application/ld+json">
          {`{
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Coding Ninjas: KIIT Chapter",
              "url": "https://www.cnkiit.in",
              "logo": "https://www.cnkiit.in/logo.png",
              "sameAs": [
                "https://twitter.com/CodingNinjasKIIT",
                "https://www.instagram.com/codingninjas_kiit/",
                "https://github.com/CodingNinjasKIIT"
              ]
            }`}
        </Script>
      </body>
    </html>
  );
}

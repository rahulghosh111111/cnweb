import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Menubars/Footer";
import Navbar from "@/components/Menubars/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Coding Ninjas: KIIT Chapter",
  keywords: "Coding Ninjas, KIIT, Chapter, Programming, Community , Events, Learning ,  Open Source",
  authors: [{ name: "Coding Ninjas KIIT Chapter" }], 
  description: "Join the Coding Ninjas KIIT Chapter to enhance your programming skills, participate in events, and contribute to open source projects. Connect with like-minded individuals and grow your knowledge in a collaborative environment.",
  openGraph: {
    title: "Coding Ninjas: KIIT Chapter",
    description: "Join the Coding Ninjas KIIT Chapter to enhance your programming skills, participate in events, and contribute to open source projects. Connect with like-minded individuals and grow your knowledge in a collaborative environment.",
    url: "https://cnkiit.in",
    siteName: "Coding Ninjas: KIIT Chapter",
    images: [
      {
        url: "https://cnkiit.in/logo.png",
        width: 800,
        height: 600,
        alt: "Coding Ninjas: KIIT Chapter Logo",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

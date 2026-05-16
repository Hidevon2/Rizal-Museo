import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollToTop from "@/components/ScrollToTop";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Jose Rizal - Digital na Museo",
  description:
    "Tuklasin ang buhay, mga akda, at pamana ni Dr. Jose Rizal, pambansang bayani ng Pilipinas, sa pamamagitan ng interactive na digital museum.",
  keywords: [
    "Jose Rizal",
    "Kasaysayan ng Pilipinas",
    "pambansang bayani",
    "Noli Me Tangere",
    "El Filibusterismo",
    "Rebolusyong Pilipino",
  ],
  authors: [{ name: "Rizal Digital Museum" }],
  openGraph: {
    title: "Dr. Jose Rizal - Digital na Museo",
    description:
      "Tuklasin ang buhay, mga akda, at pamana ni Dr. Jose Rizal, pambansang bayani ng Pilipinas.",
    type: "website",
    locale: "fil_PH",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fil" className="dark" suppressHydrationWarning>
      <body className={`antialiased old-manila-bg ${playfair.variable}`}>
        <ThemeProvider>
          <LoadingScreen />
          <Navbar />
          <main className="min-h-screen intramuros-wall">{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}

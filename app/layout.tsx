import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ali Raza — Software Engineer",
  description:
    "Portfolio of Ali Raza, a Software Engineer specializing in backend development and AI/NLP. Building secure, scalable systems with measurable impact across healthcare, forensics, and consumer applications.",
  openGraph: {
    title: "Ali Raza — Software Engineer",
    description:
      "Backend systems, AI/NLP applications, and results-driven development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}

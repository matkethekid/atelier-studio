import type { Metadata } from "next";
import { Prata } from "next/font/google";
import "./globals.css";

const prata = Prata({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Privatni časovi stranih jezika | Atelier Studio (Grupni i Individualni)",
  description: "Efikasni onlajn časovi francuskog, italijanskog, engleskog, srpskog i latinskog jezika. Izaberite grupne ili individualne časove uz Atelier Studio.",
  alternates: {
    canonical: "https://atelierstudio.rs",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privatni časovi stranih jezika | Atelier Studio",
    description: "Učite francuski, italijanski, engleski, srpski i latinski uz stručne profesore. Individualni časovi i fleksibilni termini.",
    url: "https://atelierstudio.rs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privatni časovi stranih jezika",
    description: "Učite francuski, italijanski, engleski, srpski i latinski uz stručne profesore. Individualni časovi i fleksibilni termini.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className={`${prata.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

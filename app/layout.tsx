import type { Metadata } from "next";
import { Prata } from "next/font/google";
import "./globals.css";

const prata = Prata({
  weight: ["400"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Privatni časovi italijanskog i francuskog | Atelier Studio",
  description: "Časovi italijanskog i francuskog jezika online. Individualni pristup, brzi rezultati i iskusni profesori. Prijavite se danas i unapredite svoje znanje jezika.",
  alternates: {
    canonical: "https://atelier-studio-kohl-seven.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privatni časovi italijanskog i francuskog | Atelier Studio",
    description: "Učite italijanski i francuski uz stručne profesore. Individualni časovi i fleksibilni termini.",
    url: "https://atelier-studio-kohl-seven.vercel.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privatni časovi italijanskog i francuskog",
    description: "Individualni časovi italijanskog i francuskog jezika online.",
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

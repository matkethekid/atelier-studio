import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | Privatni časovi italijanskog i francuskog",
  description: "Kontaktirajte Atelier Studio za privatne časove italijanskog i francuskog jezika. Brz odgovor, fleksibilni termini i individualni pristup učenju.",
  alternates: {
    canonical: "https://atelier-studio-kohl-seven.vercel.app/kontakt",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Kontakt | Atelier Studio",
    description: "Prijavite se za privatne časove italijanskog i francuskog jezika. Kontaktirajte nas danas.",
    type: "website",
    url: "https://atelier-studio-kohl-seven.vercel.app/kontakt",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt | Atelier Studio",
    description: "Kontakt za časove italijanskog i francuskog jezika.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
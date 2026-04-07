import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "O nama | Atelier Studio - Privatni časovi italijanskog i francuskog",
  description: "Atelier Studio je škola jezika specijalizovana za privatne časove italijanskog i francuskog. Naš tim pruža individualni pristup i moderne metode učenja za brze i efikasne rezultate.",
  alternates: {
    canonical: "https://atelier-studio-kohl-seven.vercel.app/onama",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "O nama | Atelier Studio",
    description: "Škola jezika za italijanski i francuski sa individualnim pristupom učenju.",
    url: "https://atelier-studio-kohl-seven.vercel.app/onama",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "O nama | Atelier Studio",
    description: "Saznajte više o našem timu i pristupu učenju jezika.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
};
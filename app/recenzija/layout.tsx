import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "O nama | Atelier Studio - Ostavi recenziju",
  description: "Atelier Studio je škola jezika specijalizovana za privatne časove italijanskog i francuskog. Naš tim pruža individualni pristup i moderne metode učenja za brze i efikasne rezultate.",
};

export default function ReviewLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
};
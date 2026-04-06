import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "O nama | Atelier Studio",
  description: "Istražite profesionalne dronove za poljoprivredu i industrijsku primenu. Unapredite nadzor, analizu i upravljanje resursima uz stručnu podršku i savremenu tehnologiju našeg tima.",
};

export default function DronoviLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
};
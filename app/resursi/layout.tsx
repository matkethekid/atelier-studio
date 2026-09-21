import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://atelierstudio.rs"),
    title: {
        default: "Materijali za učenje stranih jezika | Prezentacije, PDF, MP3 | Atelier Studio",
        template: "%s | Atelier Studio",
    },
    description: "PDF prezentacije, radni listovi i audio materijali za učenje engleskog, italijanskog, latinskog i francuskog. Preuzmi odmah i uči u svom tempu.",
    keywords: [
        "učenje jezika",
        "engleska gramatika pdf",
        "resursi za učenje",
    ],
    openGraph: {
        type: "website",
        locale: "sr_RS",
        siteName: "Lingua",
        title: "Resursi za učenje jezika | Atelier Studio",
        description: "PDF prezentacije, radni listovi i audio materijali za učenje stranih jezika.",
    },
};

export const viewport: Viewport = {
    themeColor: "#fafafa",
};

export default function ResourcesLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            {children}
        </>
    );
}
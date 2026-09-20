"use client";

import React, { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
    AudioLines,
    BookOpen,
    Download,
    FileText,
    GraduationCap,
    HardDrive,
    Presentation,
    Search,
    SearchX,
    Sparkles,
} from "lucide-react";

const Footer = dynamic(() => import("@/components/Footer"), {
    ssr: true,
});

type ResourceType = "PDF" | "PPTX" | "MP3";

interface Resource {
    id: number;
    title: string;
    description: string;
    price: number;
    fileSize: string;
    type: ResourceType;
    language: string;
    level: string;
}

const RESOURCES: Resource[] = [
    {
        id: 1,
        title: "Engleska gramatika od A do Š",
        description:
            "Kompletan vodič kroz englesku gramatiku sa primerima, vežbama i rešenjima za sve nivoe.",
        price: 9.99,
        fileSize: "12.4 MB",
        type: "PDF",
        language: "Engleski",
        level: "A1–B2",
    },
    {
        id: 2,
        title: "Španski za početnike — 30 lekcija",
        description:
            "Intenzivni kurs sa dijalozima, vokabularom i vežbama za svaku lekciju.",
        price: 14.99,
        fileSize: "8.7 MB",
        type: "PDF",
        language: "Španski",
        level: "A1–A2",
    },
    {
        id: 3,
        title: "Nemačke prezentacije A1–B1",
        description:
            "Set od 40 prezentacija za učenje nemačkog, idealno i za samostalno učenje.",
        price: 12.5,
        fileSize: "24.1 MB",
        type: "PPTX",
        language: "Nemački",
        level: "A1–B1",
    },
    {
        id: 4,
        title: "Italijanski glagoli i konjugacije",
        description:
            "Pregled svih glagolskih vremena sa tabelama konjugacija i vežbama za utvrđivanje.",
        price: 7.99,
        fileSize: "5.2 MB",
        type: "PDF",
        language: "Italijanski",
        level: "A2–B1",
    },
    {
        id: 5,
        title: "Francuski izgovor — audio vodič",
        description:
            "Audio lekcije sa vežbama izgovora i kompletim transkriptima u prilogu.",
        price: 6.99,
        fileSize: "45.3 MB",
        type: "MP3",
        language: "Francuski",
        level: "A1–A2",
    },
    {
        id: 6,
        title: "Business English prezentacije",
        description:
            "Profesionalne prezentacije za poslovni engleski: sastanci, mejlovi, pregovori.",
        price: 19.99,
        fileSize: "18.6 MB",
        type: "PPTX",
        language: "Engleski",
        level: "B2–C1",
    },
    {
        id: 7,
        title: "500 idioma na engleskom",
        description:
            "Najčešći idiomi i fraze sa objašnjenjima i primerima upotrebe u kontekstu.",
        price: 5.99,
        fileSize: "3.8 MB",
        type: "PDF",
        language: "Engleski",
        level: "B1–C1",
    },
    {
        id: 8,
        title: "Španska konverzacija — praktični vodič",
        description:
            "Vodič za svakodnevne razgovore sa dijalozima, korisnim frazama i savetima.",
        price: 8.49,
        fileSize: "6.1 MB",
        type: "PDF",
        language: "Španski",
        level: "A2–B1",
    },
    {
        id: 9,
        title: "Nemački vokabular — 2000 reči",
        description:
            "Flashcard prezentacija sa 2000 najčešćih nemačkih reči, grupisanih po temama.",
        price: 11.99,
        fileSize: "15.2 MB",
        type: "PPTX",
        language: "Nemački",
        level: "A1–B1",
    },
];

const TYPE_STYLES: Record<ResourceType, string> = {
    PDF: "bg-red-100 text-red-600",
    PPTX: "bg-orange-100 text-orange-600",
    MP3: "bg-violet-100 text-violet-600",
};

const TYPE_ICONS: Record<ResourceType, React.ElementType> = {
    PDF: FileText,
    PPTX: Presentation,
    MP3: AudioLines,
};

const STATS = [
    { value: "50+", label: "Resursa" },
    { value: "6", label: "Jezika" },
];

function Page() {
    const [query, setQuery] = useState("");
    const [typeFilter, setTypeFilter] = useState<string>("all");

    const filteredResources = useMemo(() => {
        const q = query.trim().toLowerCase();
        return RESOURCES.filter((r) => {
            const matchesQuery =
                q === "" ||
                r.title.toLowerCase().includes(q) ||
                r.description.toLowerCase().includes(q) ||
                r.language.toLowerCase().includes(q);
            const matchesType = typeFilter === "all" || r.type === typeFilter;
            return matchesQuery && matchesType;
        });
    }, [query, typeFilter]);

    return (
        <div className="w-full min-h-screen flex flex-col pt-5 bg-zinc-50">
            <Navbar />
            <main className="flex flex-1 flex-col">
                <section className="px-4 pb-10 pt-12 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-6xl">
                        <Badge
                            variant="outline"
                            className="mb-4 gap-1.5 rounded-full border-primary/20 bg-primary/5 px-3 py-1 text-primary"
                        >
                            <Sparkles className="h-3.5 w-3.5" />
                            Resursi za učenje
                        </Badge>
                        <h1 className="max-w-2xl text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
                            Materijali koji ubrzavaju učenje jezika
                        </h1>
                        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
                            PDF prezentacije, radni listovi i audio materijali koje je pripremio
                            tim iskusnih predavača. Preuzmi odmah i uči u svom tempu - sa
                            mobilnog ili računara.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
                            {STATS.map((stat) => (
                                <div key={stat.label}>
                                    <p className="text-2xl font-bold text-zinc-900">{stat.value}</p>
                                    <p className="text-sm text-zinc-500">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="px-4 pb-8 sm:px-6 lg:px-8">
                    <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                            <Input
                                placeholder="Pretraži po nazivu, opisu ili jeziku..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="pl-9"
                            />
                        </div>
                        <Select value={typeFilter} onValueChange={setTypeFilter}>
                            <SelectTrigger className="w-full sm:w-42.5">
                                <SelectValue placeholder="Tip fajla" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Svi tipovi</SelectItem>
                                <SelectItem value="PDF">PDF</SelectItem>
                                <SelectItem value="PPTX">PPTX</SelectItem>
                                <SelectItem value="MP3">MP3</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </section>
                <section className="px-4 pb-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-6xl">
                        <p className="mb-4 text-sm text-zinc-500">
                            Prikazano {filteredResources.length} od {RESOURCES.length} resursa
                        </p>
                        {filteredResources.length > 0 ? (
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                {filteredResources.map((resource) => {
                                    const Icon = TYPE_ICONS[resource.type];
                                    return (
                                        <Card
                                            key={resource.id}
                                            className="flex flex-col border-zinc-200 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                                        >
                                            <CardHeader className="pb-4">
                                                <div className="flex items-start justify-between">
                                                    <div
                                                        className={cn(
                                                            "flex h-11 w-11 items-center justify-center rounded-lg",
                                                            TYPE_STYLES[resource.type]
                                                        )}
                                                    >
                                                        <Icon className="h-5 w-5" />
                                                    </div>
                                                    <Badge variant="secondary" className="font-medium">
                                                        {resource.type}
                                                    </Badge>
                                                </div>
                                                <CardTitle className="mt-4 text-lg leading-snug text-zinc-900">
                                                    {resource.title}
                                                </CardTitle>
                                                <CardDescription className="leading-relaxed">
                                                    {resource.description}
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-500">
                                                  <span className="flex items-center gap-1.5">
                                                    <BookOpen className="h-4 w-4 text-zinc-400" />
                                                      {resource.language}
                                                  </span>
                                                  <span className="flex items-center gap-1.5">
                                                    <HardDrive className="h-4 w-4 text-zinc-400" />
                                                        {resource.fileSize}
                                                  </span>
                                                </div>
                                            </CardContent>
                                            <CardFooter className="mt-auto flex items-center justify-between pt-4">
                                                <p className="text-2xl font-bold text-zinc-900">
                                                    €{resource.price.toFixed(2)}
                                                </p>
                                                <Button className="gap-2 cursor-pointer">
                                                    <Download className="h-4 w-4" />
                                                    Preuzmi
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-zinc-300 bg-white py-16 text-center">
                                <SearchX className="h-10 w-10 text-zinc-400" />
                                <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                                    Nema rezultata
                                </h3>
                                <p className="mt-1 text-sm text-zinc-500">
                                    Pokušaj sa drugom ključnom reči ili promeni filter tipa fajla.
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Page;
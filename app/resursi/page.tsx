"use client";

import React, { useEffect, useMemo, useState } from "react";
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
    HardDrive,
    Inbox,
    Presentation,
    Search,
    Sparkles,
    FileSpreadsheet,
    FileArchive,
    FileCode,
} from "lucide-react";
import { fetchResources } from "@/actions/downloads";

const Footer = dynamic(() => import("@/components/Footer"), {
    ssr: true,
});

interface Resource {
    id: string;
    name: string;
    description: string;
    price: number;
    size: number;
    fileType: string;
    fileName: string;
    language: string | null;
    createdAt: string;
}

function getFileDetails(mimeType: string) {
    switch (mimeType) {
        case "application/pdf":
            return {
                label: "PDF",
                color: "bg-red-100 text-red-600",
                icon: FileText,
            };
        case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
        case "application/vnd.ms-powerpoint":
            return {
                label: "PPTX",
                color: "bg-orange-100 text-orange-600",
                icon: Presentation,
            };
        case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        case "application/msword":
            return {
                label: "WORD",
                color: "bg-blue-100 text-blue-600",
                icon: FileText,
            };
        case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
        case "application/vnd.ms-excel":
            return {
                label: "EXCEL",
                color: "bg-green-100 text-green-600",
                icon: FileSpreadsheet,
            };
        case "application/zip":
        case "application/x-zip-compressed":
            return {
                label: "ZIP",
                color: "bg-yellow-100 text-yellow-600",
                icon: FileArchive,
            };
        default:
            return {
                label: "FAJL",
                color: "bg-zinc-100 text-zinc-600",
                icon: FileCode,
            };
    }
}

function Page() {
    const [query, setQuery] = useState("");
    const [typeFilter, setTypeFilter] = useState<string>("all");
    const [resources, setResources] = useState<Resource[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            try {
                const data = await fetchResources();
                setResources(data);
            } catch (error) {
                console.error("Greška pri učitavanju resursa:", error);
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, []);

    const filteredResources = useMemo(() => {
        const q = query.trim().toLowerCase();
        return resources.filter((r) => {
            const fileDetails = getFileDetails(r.fileType);
            const matchesQuery =
                q === "" ||
                r.name.toLowerCase().includes(q) ||
                r.description.toLowerCase().includes(q) ||
                (r.language && r.language.toLowerCase().includes(q));

            const matchesType = typeFilter === "all" || fileDetails.label === typeFilter;
            return matchesQuery && matchesType;
        });
    }, [query, typeFilter, resources]);
    return (
        <div className="w-full min-h-screen flex flex-col pt-5 bg-zinc-50">
            <Navbar />
            <main className="flex flex-1 flex-col">
                <section className="px-4 pb-10 pt-12 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-6xl">
                        <Badge variant="outline" className="mb-4 gap-1.5 rounded-full border-[#E07A5F]/20 bg-[#E07A5F]/5 px-3 py-1 text-[#E07A5F]">
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
                            <div>
                                <p className="text-2xl font-bold text-zinc-900">{resources.length}+</p>
                                <p className="text-sm text-zinc-500">Resursa</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-zinc-900">5+</p>
                                <p className="text-sm text-zinc-500">Jezika</p>
                            </div>
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
                                <SelectItem value="WORD">WORD</SelectItem>
                                <SelectItem value="ZIP">ZIP</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </section>
                <section className="px-4 pb-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-6xl">
                        <p className="mb-4 text-sm text-zinc-500">
                            Prikazano {filteredResources.length} od {resources.length} resursa
                        </p>
                        {loading ? (
                            <p className="text-center py-10 text-zinc-500">Učitavanje resursa...</p>
                        ) : filteredResources.length > 0 ? (
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                {filteredResources.map((resource) => {
                                    const fileDetails = getFileDetails(resource.fileType);
                                    const Icon = fileDetails.icon;

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
                                                            fileDetails.color
                                                        )}
                                                    >
                                                        <Icon className="h-5 w-5" />
                                                    </div>
                                                    <Badge variant="secondary" className="font-medium">
                                                        {fileDetails.label}
                                                    </Badge>
                                                </div>
                                                <CardTitle className="mt-4 text-lg leading-snug text-zinc-900">
                                                    {resource.name}
                                                </CardTitle>
                                                <CardDescription className="leading-relaxed">
                                                    {resource.description}
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-500">
                                                    {resource.language && (
                                                        <span className="flex items-center gap-1.5">
                                                        <BookOpen className="h-4 w-4 text-zinc-400" />
                                                            {resource.language}
                                                      </span>
                                                    )}
                                                    <span className="flex items-center gap-1.5">
                                                    <HardDrive className="h-4 w-4 text-zinc-400" />
                                                        {resource.size} MB
                                                  </span>
                                                </div>
                                            </CardContent>
                                            <CardFooter className="mt-auto flex items-center justify-between pt-4">
                                                <p className="text-2xl font-bold text-zinc-900">
                                                    €{resource.price.toFixed(2)}
                                                </p>
                                                <Button className="gap-2 cursor-pointer bg-[#E07A5F] hover:bg-[#c8674d]">
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
                                <Inbox className="h-10 w-10 text-zinc-400" />
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
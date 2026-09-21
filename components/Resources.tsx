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
import {
    AudioLines,
    ArrowRight,
    BookOpen,
    Download,
    FileText,
    HardDrive,
    Presentation,
    Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function Resources() {
    return (
        <section className="px-10 py-16 lg:px-20 bg-white border-t border-zinc-100">
            <div className="mx-auto max-w-500">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                    <div className="max-w-2xl">
                        <Badge variant="outline" className="mb-4 gap-1.5 rounded-full border-[#E07A5F]/20 bg-[#E07A5F]/5 px-3 py-1 text-[#E07A5F]">
                            <Sparkles className="h-3.5 w-3.5" />
                            Resursi za učenje
                        </Badge>
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                            Materijali koji ubrzavaju učenje jezika
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-zinc-600">
                            PDF prezentacije, radni listovi i audio materijali koje je pripremio tim iskusnih predavača. Preuzmi odmah i uči u svom tempu.
                        </p>
                    </div>
                    <Link href="/resursi" className="hidden md:inline-flex">
                        <Button variant="outline" className="gap-2 rounded-full border-zinc-300 hover:bg-zinc-50">
                            Pogledaj sve resurse
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                    </Link>
                </div>
                <div className="flex flex-wrap gap-x-10 gap-y-4 mb-10 border-y border-zinc-100 py-6">
                    <div>
                        <p className="text-2xl font-bold text-zinc-900">50+</p>
                        <p className="text-sm text-zinc-500">Resursa</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-zinc-900">6</p>
                        <p className="text-sm text-zinc-500">Jezika</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    <Card className="flex flex-col border-zinc-200 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                            <CardHeader className="pb-4">
                                <div className="flex items-start justify-between">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-100 text-red-600">
                                        <FileText className="h-5 w-5" />
                                    </div>
                                    <Badge variant="secondary" className="font-medium">PDF</Badge>
                                </div>
                                <CardTitle className="mt-4 text-lg leading-snug text-zinc-900">Engleska gramatika od A do Š</CardTitle>
                                <CardDescription className="leading-relaxed">Kompletan vodič kroz englesku gramatiku sa primerima, vežbama i rešenjima za sve nivoe.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-500">
                                    <span className="flex items-center gap-1.5"><BookOpen className="h-4 w-4 text-zinc-400" /> Engleski</span>
                                    <span className="flex items-center gap-1.5"><HardDrive className="h-4 w-4 text-zinc-400" /> 12.4 MB</span>
                                </div>
                            </CardContent>
                            <CardFooter className="mt-auto flex items-center justify-between pt-4">
                                <p className="text-2xl font-bold text-zinc-900">€9.99</p>
                                <Button className="gap-2 cursor-pointer bg-[#E07A5F] hover:bg-[#c8674d]">
                                    <Download className="h-4 w-4" /> Preuzmi
                                </Button>
                            </CardFooter>
                    </Card>
                    <Card className="flex flex-col border-zinc-200 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                            <CardHeader className="pb-4">
                                <div className="flex items-start justify-between">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-100 text-red-600">
                                        <FileText className="h-5 w-5" />
                                    </div>
                                    <Badge variant="secondary" className="font-medium">PDF</Badge>
                                </div>
                                <CardTitle className="mt-4 text-lg leading-snug text-zinc-900">Engleska gramatika od A do Š</CardTitle>
                                <CardDescription className="leading-relaxed">Kompletan vodič kroz englesku gramatiku sa primerima, vežbama i rešenjima za sve nivoe.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-500">
                                    <span className="flex items-center gap-1.5"><BookOpen className="h-4 w-4 text-zinc-400" /> Engleski</span>
                                    <span className="flex items-center gap-1.5"><HardDrive className="h-4 w-4 text-zinc-400" /> 12.4 MB</span>
                                </div>
                            </CardContent>
                            <CardFooter className="mt-auto flex items-center justify-between pt-4">
                                <p className="text-2xl font-bold text-zinc-900">€9.99</p>
                                <Button className="gap-2 cursor-pointer bg-[#E07A5F] hover:bg-[#c8674d]">
                                    <Download className="h-4 w-4" /> Preuzmi
                                </Button>
                            </CardFooter>
                    </Card>
                    <Card className="flex flex-col border-zinc-200 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                        <CardHeader className="pb-4">
                            <div className="flex items-start justify-between">
                                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                                    <Presentation className="h-5 w-5" />
                                </div>
                                <Badge variant="secondary" className="font-medium">PPTX</Badge>
                            </div>
                            <CardTitle className="mt-4 text-lg leading-snug text-zinc-900">Nemačke prezentacije A1–B1</CardTitle>
                            <CardDescription className="leading-relaxed">Set od 40 prezentacija za učenje nemačkog, idealno i za samostalno učenje.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-500">
                                <span className="flex items-center gap-1.5"><BookOpen className="h-4 w-4 text-zinc-400" /> Nemački</span>
                                <span className="flex items-center gap-1.5"><HardDrive className="h-4 w-4 text-zinc-400" /> 24.1 MB</span>
                            </div>
                        </CardContent>
                        <CardFooter className="mt-auto flex items-center justify-between pt-4">
                            <p className="text-2xl font-bold text-zinc-900">€12.50</p>
                            <Button className="gap-2 cursor-pointer bg-[#E07A5F] hover:bg-[#c8674d]">
                                <Download className="h-4 w-4" /> Preuzmi
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card className="flex flex-col border-zinc-200 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                        <CardHeader className="pb-4">
                            <div className="flex items-start justify-between">
                                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
                                    <AudioLines className="h-5 w-5" />
                                </div>
                                <Badge variant="secondary" className="font-medium">MP3</Badge>
                            </div>
                            <CardTitle className="mt-4 text-lg leading-snug text-zinc-900">Francuski izgovor — audio vodič</CardTitle>
                            <CardDescription className="leading-relaxed">Audio lekcije sa vežbama izgovora i kompletim transkriptima u prilogu.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-500">
                                <span className="flex items-center gap-1.5"><BookOpen className="h-4 w-4 text-zinc-400" /> Francuski</span>
                                <span className="flex items-center gap-1.5"><HardDrive className="h-4 w-4 text-zinc-400" /> 45.3 MB</span>
                            </div>
                        </CardContent>
                        <CardFooter className="mt-auto flex items-center justify-between pt-4">
                            <p className="text-2xl font-bold text-zinc-900">€6.99</p>
                            <Button className="gap-2 cursor-pointer bg-[#E07A5F] hover:bg-[#c8674d]">
                                <Download className="h-4 w-4" /> Preuzmi
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
                <div className="mt-10 text-center md:hidden">
                    <Link href="/resursi" className="inline-block w-full">
                        <Button variant="outline" className="w-full gap-2 rounded-full border-zinc-300 hover:bg-zinc-50">
                            Pogledaj sve resurse
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
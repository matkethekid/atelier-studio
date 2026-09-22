"use server";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    Sparkles,
} from "lucide-react";
import Link from "next/link";
import { cacheLife, cacheTag } from "next/cache";
import ResourcesCard from "@/components/ResourcesCard";

interface Resource {
    id: string;
    name: string;
    description: string;
    price: number;
    size: number;
    fileType: string;
    language: string;
}

export default async function Resources() {
    const fetchResources = async () => {
        "use cache";
        cacheTag("resources");
        cacheLife("minutes");
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/downloads/all`);
            const data = await res.json();
            console.log(data.data);
            return data.data;
        } catch (error) {
            console.log(error);
        }
    };

    const resources = await fetchResources();
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
                        <p className="text-2xl font-bold text-zinc-900">{resources.length}+</p>
                        <p className="text-sm text-zinc-500">Resursa</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-zinc-900">5+</p>
                        <p className="text-sm text-zinc-500">Jezika</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {
                        resources.map((resource: Resource, index: number) => (
                            <div key={index}>
                                <ResourcesCard resource={resource}/>
                            </div>
                        ))
                    }
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
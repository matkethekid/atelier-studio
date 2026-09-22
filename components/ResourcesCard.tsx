"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
    BookOpen,
    Download,
    FileArchive,
    FileCode,
    FileSpreadsheet,
    FileText,
    HardDrive,
    Presentation,
    ShoppingCart,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {orderFreeDownload} from "@/actions/downloads";
import toast, { Toaster } from "react-hot-toast";

interface Resource {
    id: string;
    name: string;
    description: string;
    price: number;
    size: number;
    fileType: string;
    language: string;
}

interface Props {
    resource: Resource;
}

function getFileDetails(mimeType: string) {
    switch (mimeType) {
        case "application/pdf":
            return {
                label: "PDF",
                color: "bg-red-100 text-red-600",
                icon: <FileText className="h-5 w-5" />
            };
        case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
        case "application/vnd.ms-powerpoint":
            return {
                label: "PPTX",
                color: "bg-orange-100 text-orange-600",
                icon: <Presentation className="h-5 w-5" />
            };
        case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        case "application/msword":
            return {
                label: "WORD",
                color: "bg-blue-100 text-blue-600",
                icon: <FileText className="h-5 w-5" />
            };
        case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
        case "application/vnd.ms-excel":
            return {
                label: "EXCEL",
                color: "bg-green-100 text-green-600",
                icon: <FileSpreadsheet className="h-5 w-5" />
            };
        case "application/zip":
        case "application/x-zip-compressed":
            return {
                label: "ZIP",
                color: "bg-yellow-100 text-yellow-600",
                icon: <FileArchive className="h-5 w-5" />
            };
        default:
            return {
                label: "FAJL",
                color: "bg-zinc-100 text-zinc-600",
                icon: <FileCode className="h-5 w-5" />
            };
    }
}

function ResourcesCard({ resource }: Props) {
    const fileDetails = getFileDetails(resource.fileType);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [email, setEmail] = useState("");

    const handleButtonClick = () => {
        setIsModalOpen(true);
    };

    const handleFreeDownload = async () => {
        const res = await orderFreeDownload({ id: resource.id, customerEmail: email });
        toast.success(res.message);
        if (!res.success) {
            toast.error("Došlo je do greške. Pokušajte ponovo.");
        }
        setIsModalOpen(false);
        setEmail("");
    };

    const isPaid = resource.price > 0;
    return (
        <>
            <Toaster/>
            <Card className="flex flex-col border-zinc-200 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                        <div className={`flex h-11 w-11 items-center justify-center rounded-lg ${fileDetails.color}`}>
                            {fileDetails.icon}
                        </div>
                        <Badge variant="secondary" className="font-medium">{fileDetails.label}</Badge>
                    </div>
                    <CardTitle className="mt-4 text-lg leading-snug text-zinc-900">{resource.name}</CardTitle>
                    <CardDescription className="leading-relaxed">{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-500">
                        <span className="flex items-center gap-1.5"><BookOpen className="h-4 w-4 text-zinc-400" /> Engleski</span>
                        <span className="flex items-center gap-1.5"><HardDrive className="h-4 w-4 text-zinc-400" /> {resource.size} MB</span>
                    </div>
                </CardContent>
                <CardFooter className="mt-auto flex items-center justify-between pt-4">
                    <p className="text-2xl font-bold text-zinc-900">
                        {isPaid ? `${resource.price}€` : "Besplatno"}
                    </p>
                    <Button
                        onClick={handleButtonClick}
                        className="gap-2 cursor-pointer bg-[#E07A5F] hover:bg-[#c8674d]"
                    >
                        {isPaid ? (
                            <>
                                <ShoppingCart className="h-4 w-4" /> Kupi
                            </>
                        ) : (
                            <>
                                <Download className="h-4 w-4" /> Preuzmi
                            </>
                        )}
                    </Button>
                </CardFooter>
            </Card>
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="sm:max-w-md">
                    {isPaid ? (
                        <>
                            <DialogHeader>
                                <DialogTitle className="flex items-center gap-2">
                                    Kontakt za kupovinu
                                </DialogTitle>
                                <DialogDescription>
                                    Da biste završili kupovinu ovog materijala ({resource.price}€), molimo vas da nas kontaktirate putem poruke na sledeći broj telefona:
                                </DialogDescription>
                            </DialogHeader>
                            <div className="flex flex-col items-center justify-center py-6 space-y-2">
                                <a
                                    href="tel:+381638911642"
                                    className="text-2xl font-bold text-zinc-900 hover:text-[#E07A5F] transition-colors"
                                >
                                    +381 63 891 1642
                                </a>
                                <p className="text-sm text-zinc-500 text-center">
                                    Pošaljite SMS/WhatsApp poruku sa nazivom materijala koji želite da kupite. Nakon potvrde uplate, poslaćemo Vam link za preuzimanje.
                                </p>
                            </div>
                            <DialogFooter>
                                <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                                    Zatvori
                                </Button>
                            </DialogFooter>
                        </>
                    ) : (
                        <>
                            <DialogHeader>
                                <DialogTitle className="flex items-center gap-2">
                                    Besplatno preuzimanje
                                </DialogTitle>
                                <DialogDescription>
                                    Unesite vašu email adresu kako bismo Vam poslali link za preuzimanje fajla.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="flex items-center space-x-2 py-4">
                                <Input
                                    type="email"
                                    placeholder="vas.email@primer.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <DialogFooter className="sm:justify-start">
                                <Button
                                    type="button"
                                    className="w-full gap-2 bg-[#E07A5F] hover:bg-[#c8674d]"
                                    onClick={handleFreeDownload}
                                >
                                    <Download className="h-4 w-4" /> Pošalji link
                                </Button>
                            </DialogFooter>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
}

export default ResourcesCard;
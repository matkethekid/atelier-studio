import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
    BookOpen,
    Download,
    FileArchive,
    FileCode,
    FileSpreadsheet,
    FileText,
    HardDrive,
    Presentation
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
    return (
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
                <p className="text-2xl font-bold text-zinc-900">{resource.price}€</p>
                <Button className="gap-2 cursor-pointer bg-[#E07A5F] hover:bg-[#c8674d]">
                    <Download className="h-4 w-4" /> Preuzmi
                </Button>
            </CardFooter>
        </Card>
    );
}

export default ResourcesCard;
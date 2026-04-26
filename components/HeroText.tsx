"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const content: Record<string, { text: string; flag: string }> = {
    it: { text: "italijanski", flag: "/italy.svg" },
    fr: { text: "francuski", flag: "/french.svg" },
    sr: { text: "srpski", flag: "/serbian.svg" },
    la: { text: "latinski", flag: "/vatican.svg" },
    // gb: { text: "engleski", flag: "/uk.svg" },
    // de: { text: "nemački", flag: "/germany.svg" }
};

const HeroText = () => {
    const [lang, setLang] = useState("it");

    useEffect(() => {
        const languages = Object.keys(content);
        const interval = setInterval(() => {
            setLang((prev) => {
                const currentIndex = languages.indexOf(prev);
                return languages[(currentIndex + 1) % languages.length];
            });
        }, 2500);

        return () => clearInterval(interval);
    }, []);
  return (
    <h1 className={`text-5xl md:text-6xl`}>
        Nauči{" "}
        <span key={lang} className="inline-flex items-center gap-2 transition-opacity duration-500 animate-fade lg:w-87.5">
            {content[lang].text}
            <Image src={content[lang].flag} alt={content[lang].text} width={70} height={70} quality={80}/>
        </span>
        <br/>
        {" "}počni sa časovima danas
    </h1>
  )
}

export default HeroText;
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { Prata } from "next/font/google";
import { useState, useEffect } from "react";

const prata = Prata({
  weight: ["400"],
  subsets: ["latin"]
});

const content: any = {
    it: {
        text: "italijanski",
        flag: "/italy.svg"
    },
    fr: {
        text: "francuski",
        flag: "/french.svg"
    }
};

const HeroText = () => {
    const [lang, setLang] = useState("it");

    useEffect(() => {
        const interval = setInterval(() => {
        setLang((prev) => (prev === "it" ? "fr" : "it"));
        }, 2500);

        return () => clearInterval(interval);
    }, []);
  return (
    <h1 className={`text-5xl md:text-6xl ${prata.className}`}>
        Nauči{" "}
        <span key={lang} className="inline-flex items-center gap-2 transition-opacity duration-500 animate-fade lg:w-87.5">
            {content[lang].text}
            <Image src={content[lang].flag} alt={content[lang].text} width={70} height={70}/>
        </span>
        <br/>
        {" "}i počni sa časovima danas
    </h1>
  )
}

export default HeroText;
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Newsreader } from "next/font/google";
import { Menu, X } from "lucide-react";

const newsReader = Newsreader({
    weight: ["500"],
    subsets: ["latin"],
    style: "italic"
});

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    useEffect(() => {
        if (isSidebarOpen) {
        document.body.style.overflow = 'hidden';
        } else {
        document.body.style.overflow = 'auto';
        }

        return () => {
        document.body.style.overflow = 'auto';
        };
    }, [isSidebarOpen]);
  return (
    <>
        <nav className="w-[90%] sticky top-5 backdrop-blur-md lg:max-w-300 lg:w-[60%] h-20 rounded-full pl-5 pr-5 lg:pl-20 lg:pr-15 mx-auto bg-white/65 z-20 flex text-center justify-between items-center">
            <Link href={"/"} className={`${newsReader.className} text-xl flex z-100`}>Atelier Studio</Link>
            <ul className="hidden lg:flex flex-row gap-5">
                <li><Link href={"/"}>Početna</Link></li>
                <li><Link href={"/onama"}>O nama</Link></li>
                <li><Link href={"/"}>Kontakt</Link></li>
            </ul>
            <Link href={"/kontakt"} className={`hidden lg:block pt-2 pb-2 pl-7 pr-7 rounded-full bg-[#E07A5F] text-white`}>Počni odmah</Link>
            <button onClick={() => setIsSidebarOpen(prevState => !prevState)} className="lg:hidden flex z-100">{isSidebarOpen ? <X/> : <Menu/>}</button>
        </nav>
        <div className={`w-full h-full p-10 bg-white  ${isSidebarOpen ? "flex flex-col gap-10" : "hidden"}`}>
            <ul className="lg:hidden flex flex-col justify-center items-center w-full gap-5 text-black">
                <li><Link href={"/"} className={`text-xl`}>Početna</Link></li>
                <li><Link href={"/onama"} className={`text-xl`}>O nama</Link></li>
                <li><Link href={"/"} className={`text-xl`}>Kontakt</Link></li>
            </ul>
            <Link href={"/kontakt"} className={`lg:hidden pt-2 pb-2 w-[80%] mx-auto text-center rounded-full bg-[#E07A5F] text-white`}>Počni odmah</Link>
        </div>
    </>
  )
}

export default Navbar;
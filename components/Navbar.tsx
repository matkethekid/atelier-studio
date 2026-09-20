"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Newsreader } from "next/font/google";
import { Menu, X } from "lucide-react";

const newsReader = Newsreader({
    weight: ["500"],
    subsets: ["latin"],
    style: "italic",
    display: "swap"
});

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const navRef = useRef<HTMLElement | null>(null);

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

    const openSidebar = () => {
        setIsSidebarOpen(prevState => !prevState);
    };
  return (
    <>
        <nav ref={navRef} className="w-[90%] sticky top-0 backdrop-blur-md lg:max-w-300 lg:w-[60%] h-20 rounded-full pl-5 pr-5 lg:pl-20 lg:pr-15 mx-auto bg-white/65 z-20 flex text-center justify-between items-center">
            <Link href={"/"} className={`${newsReader.className} text-xl flex z-100`}>Atelier Studio</Link>
            <ul className="hidden lg:flex flex-row gap-5">
                <li><Link href={"/"}>Početna</Link></li>
                <li><Link href={"/onama"}>O nama</Link></li>
                <li><Link href={"/kontakt"}>Kontakt</Link></li>
            </ul>
            <Link href={"/kontakt"} className={`hidden lg:block pt-2 pb-2 pl-7 pr-7 rounded-full bg-[#E07A5F] text-white`}>Počni odmah</Link>
            <button aria-label="Otvori meni" onClick={openSidebar} className="lg:hidden flex z-100">{isSidebarOpen ? <X/> : <Menu/>}</button>
        </nav>
        <div className={`fixed top-20 left-0 w-full p-10 z-20 bg-white ${isSidebarOpen ? "flex flex-col gap-10 z-30" : "hidden"}`}>
            <ul className="lg:hidden flex flex-col justify-center items-center w-full gap-5 text-black">
                <li><Link href={"/"} className={`text-xl`}>Početna</Link></li>
                <li><Link href={"/onama"} className={`text-xl`}>O nama</Link></li>
                <li><Link href={"/kontakt"} className={`text-xl`}>Kontakt</Link></li>
            </ul>
            <Link href={"/kontakt"} className={`lg:hidden pt-2 pb-2 w-[80%] mx-auto text-center rounded-full bg-[#E07A5F] text-white`}>Počni odmah</Link>
        </div>
    </>
  )
}

export default Navbar;
"use client";

import { useState } from "react";
import Image from "next/image";

interface Language {
    id: number;
    name: string;
    icon: string;
};

interface Props {
    languages: Language[];
};

const ContactForm = ({ languages }: Props) => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [lang, setLang] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    async function sendMessage() {
        console.log("ee");
    }
  return (
    <form className='lg:p-5 flex flex-col gap-10'>
        <div className='flex flex-col lg:flex-row gap-3'>
            <div className='flex flex-col gap-2'>
                <label>Ime</label>
                <input type="text" placeholder='Petar Petrović' className='bg-[#FBFAEE] p-3 rounded-lg' onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='flex flex-col gap-2'>
                <label>Email</label>
                <input type="email" placeholder='petar@petrovic.com' className='bg-[#FBFAEE] p-3 rounded-lg' onChange={(e) => setEmail(e.target.value)}/>
            </div>
        </div>
        <div className='flex flex-col gap-3'>
            <p>Jezik</p>
            <div className='w-full flex flex-wrap gap-3'>
                {
                    languages.map((language: Language, index: number) => (
                        <p key={index} onClick={() => setLang(language.name)} className={lang == language.name ? 'flex gap-3 p-3 bg-[#d66140] rounded-xl cursor-pointer text-white' : 'flex gap-3 p-3 bg-[#9A442D] rounded-xl cursor-pointer text-white'}>{language.name} <Image src={language.icon} alt={language.name} width={20} height={20}/></p>
                    ))
                }
            </div>
        </div>
        <div className='flex flex-col gap-2'>
            <label>Vaša poruka</label>
            <textarea placeholder="Vaša poruka ovde..." className='bg-[#FBFAEE] p-3 rounded-lg min-h-50' onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>
        <button aria-label="Pošalji poruku" onClick={sendMessage} className="w-full p-5 rounded-xl text-white lg:max-w-50 bg-[#d66140] cursor-pointer hover:bg-[#ca5839]">Pošalji poruku</button>
    </form>
  )
}

export default ContactForm;
"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import toast, { Toaster } from "react-hot-toast";

interface Language {
    id: number;
    name: string;
    icon: string;
};

interface Props {
    languages: Language[];
};

const ContactForm = ({ languages }: Props) => {
    const [lang, setLang] = useState<string>("");
    const [hToken, setHToken] = useState<string | null>(null);

    const { register, handleSubmit, setValue } = useForm();

    const onHCaptchaChange = (token: string) => {
        setHToken(token);
        setValue("h-captcha-response", token);
    };

    const onSubmit = async (data: any) => {
        if (!hToken) {
            toast.error("Molimo popunite captcha.");
            return;
        }

        const formData = {
            access_key: process.env.NEXT_PUBLIC_WEB3FORMS_SITEKEY, // ubaci svoj Web3Forms key
            subject: `Poruka sa sajta - ${data.name}`,
            language: lang,
            ...data,
        };

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const json = await res.json();
        if (json.success) {
            toast.success("Poruka poslata!");
        } else {
            toast.error("Došlo je do greške, pokušajte ponovo.");
        }
    };
  return (
    <form className='lg:p-5 flex flex-col gap-10' onSubmit={handleSubmit(onSubmit)}>
        <Toaster/>
        <div className='flex flex-col lg:flex-row gap-3'>
            <div className='flex flex-col gap-2'>
                <label>Ime</label>
                <input type="text" placeholder='Petar Petrović' className='bg-[#FBFAEE] p-3 rounded-lg' {...register("name", { required: true })}/>
            </div>
            <div className='flex flex-col gap-2'>
                <label>Email</label>
                <input type="email" placeholder='petar@petrovic.com' className='bg-[#FBFAEE] p-3 rounded-lg' {...register("email", { required: true })}/>
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
            <textarea placeholder="Vaša poruka ovde..." className='bg-[#FBFAEE] p-3 rounded-lg min-h-50' {...register("message", { required: true })}></textarea>
        </div>
        <HCaptcha
            sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
            reCaptchaCompat={false}
            onVerify={onHCaptchaChange} 
        />
        <button aria-label="Pošalji poruku" type="submit" className="w-full p-5 rounded-xl text-white lg:max-w-50 bg-[#d66140] cursor-pointer hover:bg-[#ca5839]">Pošalji poruku</button>
    </form>
  )
}

export default ContactForm;
"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { type Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import { Newsreader } from "next/font/google";

interface Teacher {
    id: number;
    name: string;
    image: string;
    location: string;
    languages: string[];
};

interface Props {
    teachers: Teacher[];
};

const newsReader = Newsreader({
    weight: ["500"],
    subsets: ["latin"],
    style: "italic",
    display: 'swap'
});

const Teachers = ({ teachers }: Props) => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  return (
    <div className='w-full h-full flex flex-col gap-10'>
        <div>
            <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                spaceBetween={20}
                allowTouchMove={false}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1300: { slidesPerView: 4 },
                }}
                onSwiper={(swiper) => setSwiperInstance(swiper)}
                centeredSlides={teachers.length === 1}
                >
                    {
                        teachers.map((teacher: Teacher, index: number) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white rounded-3xl pt-5 pb-5 pl-10 pr-10 flex flex-col gap-5 text-center">
                                    <div className="w-17.5 h-17.5 rounded-full flex flex-col justify-center items-center mx-auto">
                                        <Image src={teacher.image} alt={teacher.name} width={70} height={70} loading="lazy"/>
                                    </div>
                                    <div className="flex flex-col gap-5">
                                        <p className={`${newsReader.className} text-2xl`}>{teacher.name}</p>
                                        <p className="flex gap-4 justify-center"><Image src="/location.svg" alt="location pin" width={20} height={20} loading="lazy"/> {teacher.location}</p>
                                        <div className="flex flex-wrap w-full justify-center items-center gap-5">
                                            {
                                                teacher.languages.map((lang: string, index: number) => (
                                                    <p key={index} className="pt-1 pb-1 pl-5 pr-5 rounded-full bg-[#F5F5F5]">{lang}</p>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
            </Swiper>
        </div>
        <div className="flex flex-row gap-5 w-full justify-end items-end">
            <button className="p-5 rounded-full bg-[#E07A5F] text-white cursor-pointer" onClick={() => swiperInstance?.slidePrev()} aria-label="Prethodni slajd"><ChevronLeft/></button>
            <button className="p-5 rounded-full bg-[#E07A5F] text-white cursor-pointer" onClick={() => swiperInstance?.slideNext()} aria-label="Sledeći slajd"><ChevronRight/></button>
        </div>
    </div>
  )
}

export default Teachers;
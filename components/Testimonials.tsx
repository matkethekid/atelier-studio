"use client";

import { useState } from "react";
import { Newsreader } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { type Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

interface Review {
    id: number;
    text: string;
    name: string;
};

const newsReader = Newsreader({
    weight: ["500"],
    subsets: ["latin"],
    style: "italic",
    display: 'swap'
});

const reviews: Review[] = [
    {
        id: 0,
        text: "Dunja je sjajan predavač, ne samo da zna francuski, nego sjajno priča i engleski, italijanski i latinski... Sve preporuke",
        name: "Milica"
    },
    {
        id: 1,
        text: "Imala sam priliku da vidim koliko je Dunja posvećena i talentovana. Njeno strpljenje, jasna objašnjenja i sposobnost da se prilagodi učeniku čine je izuzetnim nastavnikom. Ne samo da odlično poznaje gradivo, već ume da ga prenese na način koji je zanimljiv i lako razumljiv.",
        name: "Tamara"
    },
    {
        id: 2,
        text: "Detaljno priprema materijal koji vam je potreban za savladavanje gradiva. Velika preporuka za prof Dunju, nećete pogrešiti!",
        name: "Petra"
    },
    {
        id: 3,
        text: "Detaljno priprema materijal koji vam je potreban za savladavanje gradiva. Velika preporuka za prof Dunju, nećete pogrešiti!",
        name: "Petar"
    },
    {
        id: 3,
        text: "Detaljno priprema materijal koji vam je potreban za savladavanje gradiva. Velika preporuka za prof Dunju, nećete pogrešiti!",
        name: "Petar"
    },
    {
        id: 4,
        text: "Detaljno priprema materijal koji vam je potreban za savladavanje gradiva. Velika preporuka za prof Dunju, nećete pogrešiti!",
        name: "Petar"
    },
];

const Testimonials = () => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  return (
    <section className='w-full lg:max-w-500 mx-auto lg:max-h-200 lg:h-[80vh] flex flex-col justify-between p-10 text-center'>
        <div className="flex flex-col gap-5">
            <h3 className={`${newsReader.className} text-5xl`}>Utisci prethodnih Polaznika</h3>
            <p>Reč onih koji sa nama uče: naših filologa, svetskih putnika i sanjara.</p>
        </div>
        <div className="w-full pt-10 pb-10  lg:p-10">
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
            >
                {reviews.map((review: Review, index: number) => (
                    <SwiperSlide key={index} className="w-full h-full bg-white rounded-3xl">
                        <div className=" w-full h-80 p-5 flex flex-col justify-center items-center">
                            <p className={`${newsReader.className} text-lg lg:text-base line-clamp-8 lg:line-clamp-15`}>&quot;{review.text}&quot;</p>
                            <p className="mt-3 font-bold">{review.name}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        <div className="flex flex-row gap-5 w-full justify-end items-end">
            <button className="p-5 rounded-full bg-[#E07A5F] text-white cursor-pointer" onClick={() => swiperInstance?.slidePrev()} aria-label="Prethodni slajd"><ChevronLeft/></button>
            <button className="p-5 rounded-full bg-[#E07A5F] text-white cursor-pointer" onClick={() => swiperInstance?.slideNext()} aria-label="Sledeći slajd"><ChevronRight/></button>
        </div>
    </section>
  )
}

export default Testimonials;
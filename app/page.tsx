import HeroText from "@/components/HeroText";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const Features = dynamic(() => import("@/components/Features"), {
  ssr: true
});

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col pt-5 bg-[#FBFAEE]">
      <Navbar/>
      <main className="relative mt-5 w-full lg:w-[80%] h-screen lg:h-screen lg:max-h-200 mx-auto flex justify-center items-start pt-10 pb-10">
        <div className="flex flex-col gap-5 h-[80%] justify-start items-center text-center">
          <div className="rounded-full pt-2 pb-2 pl-10 pr-10 max-w-50 bg-[#FFB29E]/41 flex gap-3 z-3"><span><Image src="/wavinghand.svg" alt="waving hand" width={70} height={70}/></span> Dobrodošli</div>
          <div className="flex flex-col gap-10 z-2 w-full text-center justify-center items-center">
            <div className="flex flex-col gap-7 text-center z-2">
              <div className="absolute inset-0 w-[80%] mx-auto h-[50%] bg-grid-pattern z-1 opacity-[0.3] rounded-full"></div>
              <div className="flex flex-col z-2 gap-5 w-full">
                <HeroText/>
                <p className="max-w-100 mx-auto md:max-w-200 lg:max-w-237.5">Tek ste stigli ili ste stalno u pokretu? Uz naše onlajn časove, učenje francuskog i italijanskog lako se uklapa u svaki plan. Pridružite se našim grupama i započnite svoju jezičku avanturu na najlepši način.</p>
              </div>
            </div>
            <Link href={"/kontakt"} className={`pt-2 pb-2 pl-10 pr-10 z-2 flex items-center justify-center gap-3 mx-auto text-center rounded-full bg-[#E07A5F] text-white`}><Image src="/writinghand.svg" alt="writing hand" width={20} height={20}/> Zakaži čas</Link>
          </div>
          <Image src="/semicircle.svg" alt="semi circle" width={700} height={700} className="absolute bottom-0"/>
        </div>
      </main>
      <Features/>
    </div>
  );
}

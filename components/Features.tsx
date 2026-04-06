import { Newsreader } from "next/font/google";
import Image from "next/image";

const newsReader = Newsreader({
    weight: ["500"],
    subsets: ["latin"],
    style: "italic",
    display: "swap"
});

const Features = () => {
  return (
    <section className='lg:max-h-225 mx-auto w-full 2xl:h-[80vh] bg-[#F5F4E8] p-7 lg:p-15 flex flex-col gap-20 justify-between'>
        <div className="w-full lg:h-[90%] lg:max-w-470 mx-auto flex flex-col gap-20">
            <div className="lg:max-w-625 flex flex-row justify-between">
                <div className="flex flex-col gap-5">
                    <h2 className="text-5xl"><span className={`${newsReader.className}`}>Osetite jezik,</span> nemojte ga samo učiti</h2>
                    <p className="max-w-175">Ne gubimo vreme na sterilne školske metode. Naš fokus je na stvarnoj kulturi, razgovoru i onom jedinstvenom pulsu života na Mediteranu.</p>
                </div>
                <p className={`text-[5.2rem] hidden lg:flex z-1 opacity-[0.2] ${newsReader.className}`}>Atelier</p>
            </div>
            <div className="lg:max-w-450 mx-auto w-full flex flex-wrap gap-5 2xl:justify-between 2xl:pl-20 2xl:pr-20">
                <div className="bg-white w-100 h-100 rounded-3xl flex flex-col gap-5 pl-10 pr-10 pt-5 pb-5 lg:p-10">
                    <div className="w-20 h-20 bg-[#E07A5F]/20 rounded-2xl flex justify-center items-center font-light">
                        <Image src="/personicon.svg" alt="person icon" width={30} height={30}/>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className={`${newsReader.className} text-3xl`}>Programi po tvojoj meri</p>
                        <p>Bilo da se pripremaš za selidbu u Milano ili planiraš leto u Provansi, mi prilagođavamo svaki glagol i svaki vokal tvom ličnom putovanju.</p>
                    </div>
                    <div>
                        <Image src="/wine.svg" alt="wine glass" width={40} height={40} quality={80}/>
                    </div>
                </div>
                <div className="bg-white w-100 h-100 rounded-3xl flex flex-col gap-5 pl-10 pr-10 pt-5 pb-5 lg:p-10">
                    <div className="w-20 h-20 bg-[#E07A5F]/20 rounded-2xl flex justify-center items-center font-light">
                        <Image src="/notebook.svg" alt="person icon" width={30} height={30}/>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className={`${newsReader.className} text-3xl`}>Kulturološko povezivanje</p>
                        <p>Učite jezik kroz film, književnost i umetnost. Mi vas ne učimo samo gramatici – mi vam otkrivamo samu dušu i filozofiju podneblja.</p>
                    </div>
                    <div>
                        <Image src="/artmask.svg" alt="art mask" width={40} height={40} quality={80}/>
                    </div>
                </div>
                <div className="bg-white w-100 h-100 rounded-3xl flex flex-col gap-5 pl-10 pr-10 pt-5 pb-5 lg:p-10">
                    <div className="w-20 h-20 bg-[#E07A5F]/20 rounded-2xl flex justify-center items-center font-light">
                        <Image src="/clockicon.svg" alt="old clock" width={30} height={30}/>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className={`${newsReader.className} text-3xl`}>Fleksibilni termini</p>
                        <p>Individualni pristup bez obzira na to gde se nalazite. Naši živi 1-na-1 časovi dostupni su u svim vremenskim zonama, pružajući vam potpunu slobodu u planiranju.</p>
                    </div>
                    <div>
                        <Image src="/clock.svg" alt="wine glass" width={40} height={40} quality={80}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features;
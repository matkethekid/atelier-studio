import Image from 'next/image';
import { Newsreader } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Teachers from '@/components/Teachers';
import dynamic from 'next/dynamic';
import { cacheLife, cacheTag } from 'next/cache';

const newsReader = Newsreader({
  weight: ["500"],
  subsets: ["latin"],
  style: "italic",
  display: 'swap'
});

interface Teacher {
  id: number;
  name: string;
  image: string;
  location: string;
  languages: string[];
};

const Prefooter = dynamic(() => import('@/components/Prefooter'), {
  ssr: true
});
const Footer = dynamic(() => import('@/components/Footer'), {
  ssr: true
});

const page = async () => {
  async function fetchTeachers() {
    "use cache";
    cacheLife("hours");
    cacheTag("teachers");
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/teachers`, {
        method: 'GET',
      });
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  const teachers = await fetchTeachers();
  return (
    <section className='w-full min-h-screen flex flex-col pt-5 bg-[#FBFAEE]'>
        <Navbar/>
        <div className='w-full h-[35vh] bg-white relative flex justify-center items-center text-center mt-5'>
          <div className='w-full h-full bg-black opacity-[0.5] absolute inset-0 z-1'></div>
          <Image src="/renesansa.avif" alt='renesansa image' fill className='object-cover absolute inset-0' priority sizes='100vw'/>
          <h1 className='flex flex-col sm:flex-row items-center md:items-start gap-3 z-2 text-white text-2xl sm:text-3xl lg:text-4xl'>I MAESTRI DELLA FILOLOGIA <Image src="/building.svg" alt='building' width={30} height={30}/></h1>
        </div>
        <div className='w-full h-full flex flex-col gap-10 lg:flex-row justify-between items-start pt-10 pb-10 pl-5 pr-5 lg:p-20'>
            <div className='w-full h-full flex flex-col gap-10'>
                <h2 className='text-6xl leading-tight'>Kako je sve <span className={`${newsReader.className}`}>počelo</span>?</h2>
                <div className='flex flex-col gap-5'>
                  <p className='lg:max-w-150 text-[#55423E]'>Više od škole, Atelier Studio je zajednica učenjaka, putnika i zaljubljenika u jezik. Verujemo da je svaki jezik poseban predeo – arhitektura misli koju su oblikovali vekovi.</p>
                  <p className='flex gap-3 lg:max-w-150 text-[#55423E]'>Naš pristup se oslanja na humanističku tradiciju renesanse: učenje kroz umetnost, dijalog i čulno prožimanje sa jezikom. Mi ne prenosimo samo reči, već samu dušu kulture.</p>
                </div>
            </div>
            <div className='w-full lg:w-125 lg:h-72.5 border-5 border-l-[#9A442D] bg-white rounded-3xl flex flex-col gap-3 pt-7 pb-7 pl-10 pr-10'>
                <h3 className={`${newsReader.className} text-3xl`}>Naša misija</h3>
                <p className='text-[15px] text-[#55423E]'>Negujemo otmenost izraza i intelektualnu radoznalost bez granica. Jezik nije samo alat za sporazumevanje, već živa nit koja nas povezuje sa istorijom, umetnošću i dušom evropskog podneblja.</p>
                <Image src="/oldnote.svg" alt='building' width={30} height={30} loading='lazy'/>
            </div>
        </div>
        <div className='bg-[#F5F4E8] w- 2xl:max-h-150 2xl:h-[70vh] flex flex-col gap-25 p-10 text-center '>
            <div className='flex flex-col gap-5'>
                <p className='text-sm text-[#9A442D]'>PREDAVAČI</p>
                <h4 className={`${newsReader.className} text-5xl`}>Naši Filolozi</h4>
            </div>
            <Teachers teachers={teachers}/>
        </div>
        <Prefooter/>
        <Footer/>
    </section>
  )
}

export default page;
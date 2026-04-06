import Navbar from '@/components/Navbar';
import dynamic from 'next/dynamic';
import { Newsreader } from 'next/font/google';
import ContactForm from '@/components/ContactForm';
import { AtSign, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Prefooter = dynamic(() => import('@/components/Prefooter'), {
    ssr: true
});
const Footer = dynamic(() => import('@/components/Footer'), {
    ssr: true
});

const newsReader = Newsreader({
    weight: ["500"],
    subsets: ["latin"],
    style: "italic",
    display: 'swap'
});

interface Language {
    id: number;
    name: string;
    icon: string;
};

const languages = [
    {
        id: 0,
        name: "Italijanski",
        icon: "/italy.svg"
    },
    {
        id: 1,
        name: "Francuski",
        icon: "/french.svg"
    },
];

const page = () => {
  return (
    <div className='w-full min-h-screen flex flex-col pt-5 bg-[#FBFAEE]'>
        <Navbar/>
        <main className='w-full flex flex-col gap-10 p-5 lg:p-10'>
            <div className='flex flex-col gap-5'>
                <h1 className={`${newsReader.className} text-[#9A442D] text-4xl md:text-5xl lg:text-6xl lg:max-w-150`}>Započnimo tvoju lingvističku avanturu</h1>
                <p className='text-[#55423E] lg:max-w-150'>Bilo da vam je potreban privatni masterklas ili personalizovano vođenje kroz naš atelje, tu smo da vaš doživljaj učenja učinimo potpuno jedinstvenim.</p>
            </div>
            <div className='flex flex-col lg:flex-row lg:justify-between w-full h-full'>
                <div className='flex flex-col p-10 gap-3 bg-white rounded-3xl w-full lg:w-[60%]'>
                    <h2 className='text-2xl md:text-2xl lg:text-3xl'>Zakaži čas</h2>
                    <ContactForm languages={languages}/>
                </div>
                <div className='w-full h-full lg:w-[30%] p-5 flex flex-col gap-5'>
                    <h3 className='text-xl'>Kontaktirajte nas</h3>
                    <div className='flex flex-row gap-3'>
                        <div className='bg-[#9A442D] rounded-xl p-3 text-white'>
                            <AtSign />
                        </div>
                        <div className='flex flex-col'>
                            <p>Email</p>
                            <p>stoev.dunja@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-3'>
                        <div className='bg-[#9A442D] rounded-xl p-3 text-white'>
                            <Phone />
                        </div>
                        <div className='flex flex-col'>
                            <p>Telefon</p>
                            <p>063 384545</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 mt-5'>
                        <p className='uppercase text-sm text-[#9A442D]'>zaprati nas</p>
                        <div className='flex flex-row'>
                            <Link href={"https://instagram.com"}>
                                <div className='bg-[#9A442D]/20 rounded-xl p-3 text-white'>
                                    <Image src="/instagram.svg" alt='instagram icon' width={25} height={25} className='text-white'/>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Prefooter/>
        <Footer/>
    </div>
  )
}

export default page;
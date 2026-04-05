import { Newsreader } from "next/font/google";
import Link from "next/link";

const newsReader = Newsreader({
    weight: ["500"],
    subsets: ["latin"],
    style: "italic",
    display: 'swap'
});

const Footer = () => {
  return (
    <footer className='w-full lg:max-w-500 mx-auto lg:h-[30vh] flex flex-col lg:flex-row gap-10 lg:gap-0 lg:justify-between bg-[#F5F4E8] mt-10 p-10'>
        <div className='flex flex-col gap-5'>
            <h5 className={`${newsReader.className} text-4xl opacity-[0.5]`}>Atalier Studio</h5>
            <p className="text-[#55423E] max-w-125">Jedinstveni jezički studio koji slavi evropsku kulturu spajajući ljubav prema jeziku sa modernim pristupom učenju.</p>
        </div>
        <div className='flex flex-wrap justify-between lg:w-1/5'>
            <div className="flex flex-col gap-3 w-1/2 h-full">
                <p className="text-[#9A442D] text-lg">social</p>
                <ul>
                    <li><Link href={"https://instagram.com"}>Instagram</Link></li>
                    <li><Link href={"https://instagram.com"}>Linkedin</Link></li>
                </ul>
            </div>
            <div className="flex flex-col gap-3 w-1/2">
                <p className="text-[#9A442D] text-lg">legal</p>
                <ul>
                    <li><Link href={"https://instagram.com"}>Uslovi korišćenja</Link></li>
                    <li><Link href={"https://instagram.com"}>Privatnost</Link></li>
                </ul>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center lg:items-end lg:justify-start">
            <p className="text-[#55423E]">&copy; 2026  Atelier Studio.</p>
            <p className="text-[#55423E]">Ručni rad: Od filologa za filologe.</p>
        </div>
    </footer>
  )
}

export default Footer;
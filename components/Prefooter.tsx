import { Newsreader } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const newsReader = Newsreader({
  weight: ["500"],
  subsets: ["latin"],
  style: "italic",
  display: "swap"
});

const Prefooter = () => {
  return (
    <section className="w-[95%] lg:max-w-350 2xl:max-h-100 lg:w-[80%] 2xl:h-[40vh] bg-[#9A442D] rounded-4xl mx-auto mt-10 p-10 lg:p-20 text-center flex flex-col gap-10 items-center">
        <div className="flex flex-col gap-5">
          <h4 className={`${newsReader.className} text-4xl md:text-5xl text-white`}>Počni sa časovima sada.</h4>
          <p className="text-white">Pridruži se zajednici učenika i savladajte jezike ljubavi i umetnosti.</p>
        </div>
        <Link href={"/kontakt"} className="pt-3 pb-3 lg:pt-5 lg:pb-5 lg:pl-12 lg:pr-12 bg-white w-[90%] md:max-w-[300px] rounded-full flex justify-center items-center gap-3">Napravi prvi korak <Image src="/sparkles.svg" alt="sparkles icon" width={30} height={30} loading="lazy"/></Link>
    </section>
  )
}

export default Prefooter;
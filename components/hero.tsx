import hero from "../public/hero.jpg";
import Image from "next/image"

export default function Hero() {
    return (
      <div className="w-full bg-[#000000a6] min-h-fit text-slate-50 ">
        <div className="relative h-full pt-[15%] pb-[20%]">
          <Image src={hero} alt="Picture of Restuarant" className="-z-10" layout="fill" objectFit="cover" priority/>
          <div className="flex-grow flex flex-col items-center justify-center max-w-[90%] mx-auto z-10 relative">
            <h1 className="text-8xl mb-7 font-heading">Sushi</h1>
            <p className="text-2xl mb-7 text-center font-light">Let your senses run riot with our tantalizing asian fusion.</p>
            <a href="/" className="clipped-button bg-[#ffba00] text-black py-4 px-11 uppercase hover:bg-black hover:text-slate-50 font-bold">See Menu</a>
          </div>
        </div>
      </div>
    )
}
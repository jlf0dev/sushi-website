import Link from "next/link";
import React, { useEffect, useState } from "react";
import ActiveLink from "./activeLink";
import { FaBars } from "react-icons/fa"
import { IconContext } from "react-icons";


export default function Navbar() {
  const [darkBgClass, setDarkBgClass] = useState("");
  const [showMobileNav, setshowMobileNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    if (window.pageYOffset > 400) {
      if (!darkBgClass) {
        setDarkBgClass("header-dark-bg")
      }
    }
    else {
      if (darkBgClass) {
        setDarkBgClass("")
      }
    }
  }

  return (
    <IconContext.Provider value={{ size: "30" }}>
    <header className={`fixed w-full z-50 transition-all ease-in-out duration-700 header-dark-bg-mobile ${darkBgClass}`}>
      <div className=" max-w-6xl mx-auto my-3 px-4 md:px-3 flex flex-wrap justify-between text-slate-50">
        <Link href="/">
          <a><h1 className="text-4xl font-heading">Sushi</h1></a>
        </Link>
        <button className="md:hidden h-fit pr-3 pt-1" onClick={() => setshowMobileNav(!showMobileNav)}>
          <FaBars />
        </button>
        <div className={`w-full overflow-hidden transition-all ease duration-500 ${showMobileNav ? "max-h-96" : "max-h-0 invisible"} md:visible md:max-h-fit md:w-auto`}>
          <ul className="flex flex-col md:flex-row justify-between items-center md:gap-14 font-light text-xl">
            <li className="w-full h-11">
              <ActiveLink href="/" activeClassName="text-[#ffba00]" >
                <a className="h-full grid place-items-center" onClick={() => setshowMobileNav(!showMobileNav)}>Home</a>
              </ActiveLink>
            </li>
            <li className="w-full h-11">
              <ActiveLink href="/about" activeClassName="text-[#ffba00]">
                <a className="h-full grid place-items-center" onClick={() => setshowMobileNav(!showMobileNav)}>About</a>
              </ActiveLink>
            </li>
            <li className="w-full h-11">
              <ActiveLink href="/menu" activeClassName="text-[#ffba00]">
                <a className="h-full grid place-items-center" onClick={() => setshowMobileNav(!showMobileNav)}>Menu</a>
              </ActiveLink>
            </li>
            <li className="w-full h-11 md:h-fit">
              <ActiveLink href="/contact" activeClassName="text-[#ffba00] md:text-black">
                <a className="md:bg-[#ffba00] clipped-button md:text-black md:py-2 md:px-5 md:uppercase md:hover:bg-black md:hover:text-slate-50 md:font-bold h-full grid place-items-center"
                  onClick={() => setshowMobileNav(!showMobileNav)}>
                    Contact
                </a>
              </ActiveLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
    </IconContext.Provider>
  )
}

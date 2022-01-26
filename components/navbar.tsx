import React, { Component } from "react";
import ActiveLink from "./activeLink";

type NavbarState = {
  darkBgClass: string,
  showMobileNav: boolean
}

export default class Navbar extends Component<{}, NavbarState> {

  constructor(props: any) {
    super(props);
    this.state = { 
      darkBgClass: "",
      showMobileNav: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  // Change Navbar color after scrolling a certain amount
  // Adds a class that we reference in globals.css
  handleScroll=()=>{
    if (window.pageYOffset > 400) {
      if(!this.state.darkBgClass) {
        this.setState({ darkBgClass: "header-dark-bg" });   
      }
    }
    else {
      if(this.state.darkBgClass) {
        this.setState({ darkBgClass: "" });
      }
    }
   
  }

  toggleMenu() {
    this.setState({showMobileNav: !this.state.showMobileNav})
  }

  render() {
    return (
        <header className={`fixed px-10 py-3 w-full z-50 transition-all ease-in-out duration-700 header-dark-bg-mobile ${this.state.darkBgClass}`}>
            <div className=" max-w-6xl mx-auto flex flex-wrap justify-between text-slate-50">
                <a><h1 className="text-4xl font-heading">Sushi</h1></a>
                <button className="md:hidden" onClick = {() => this.toggleMenu()}>
                  Show menu
                </button>
                <div className={`w-full overflow-hidden transition-all ease duration-500 ${this.state.showMobileNav ? "max-h-96" : "max-h-0 invisible"} md:visible md:max-h-fit md:w-auto`}>
                    <ul className="flex flex-col md:flex-row justify-between items-center gap-14 mt-3 font-light">
                        <li>
                          <ActiveLink href="/" activeClassName="text-[#ffba00]">
                            <a>Home</a>
                          </ActiveLink>
                        </li>
                        <li>
                          <ActiveLink href="/about" activeClassName="text-[#ffba00]">
                            <a>About</a>
                          </ActiveLink>
                        </li>
                        <li>
                          <ActiveLink href="/menu" activeClassName="text-[#ffba00]">
                            <a>Menu</a>
                          </ActiveLink>
                        </li>
                        <li>
                          <a href="/contact" className="bg-[#ffba00] clipped-button text-black py-4 px-11 uppercase hover:bg-black hover:text-slate-50 font-bold">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
  }
}
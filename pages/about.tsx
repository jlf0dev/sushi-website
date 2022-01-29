import { BsChevronDoubleDown } from "react-icons/bs"
import ChefPic1 from "../public/chef-1.jpeg"
import ChefPic2 from "../public/chef-2.jpeg"
import ChefPic3 from "../public/chef-3.jpeg"
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa"
import Head from "next/head";
import Hero from "../components/hero";
import HeroPic from "../public/about-hero.jpg"
import Image from "next/image"
import SushiBowlPic from "../public/sushi-bowl.png"
import SushiLeftPic from "../public/sushi-food-f-left.jpeg"
import SushiRightPic from "../public/sushi-food-f-right.jpeg"
import { IconContext } from "react-icons"
import TestimonialSlider from "../components/testimonialSlider"

export default function About() {
    return (
      <>
        <Head>
          <title>About - Sushi Template</title>
        </Head>

        <Hero name="About" backgroundImage={HeroPic} showCTA={false}/>


        <div className="my-9 flex flex-col jusitfy-center items-center relative">
          <div className="absolute left-0 h-full flex flex-row items-center">
            <Image src={SushiBowlPic} alt="Picture of Sushi Bowl" className="-z-10" />
          </div>
          <h2 className="z-10 font-heading text-7xl text-center">Our story...</h2>
          <div className="z-10 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 mx-9">
              <div className="p-8 bg-white bg-opacity-90">
                <h3 className="text-4xl mb-3">Our Beginnings</h3>
                <p className="font-light">lorem ipsum Japan, consectetur adipiscing elit. Cras rutrum justo vel orci volutpat convallis vel in augue. Duis enim purus, aliquet eu quam nec, eleifend consectetur turpis. Nulla nec lacus quam. Praesent eu faucibus tortor. Aliquam erat volutpat. Pellentesque sit amet faucibus erat, non semper enim. In lobortis turpis sed nunc feugiat cursus. Fusce facilisis, dui non pulvinar rhoncus, lorem ex imperdiet dui, vel cond imentum quam lectus in ante. Quisque condimentum massa elit, nec posuere nunc tempus quis. Nullam aliquet dolor ante, pellentesque suscipit turpis egestas eget. Aenean vel commodo felis. Aenean malesuada massa vel felis tempor commodo. In et sapien at magna ullamcorper semper. Nunc eu velit, ultricies laoreet lorem.</p>
              </div>
              <div className="p-8 bg-white bg-opacity-90">
                <h3 className="text-4xl mb-3">Our Vision</h3>
                <p className="font-light">Morbi rhoncus mi id lorem fermentum elementum. Ut sit amet fringilla nisl, nec luctus metus. Vivamus eleifend tempor sagittis. Duis nibh felis, viverra eget diam at, ornare tincidunt neque. Proin congue suscipit eleifend. Ut augue lacus, rhoncus id purus a, hendrerit vehicula turpis. In rutrum tellus quis congue maximus. Cras a viverra felis, at tincidunt est.</p>
                <p className="font-light">Ut fermentum libero a quam sagittis, id congue dui aliquam. Aenean sit amet arcu porta, fermentum ante a, ullamcorper risus. Sed rutrum at sem quis scelerisque. Vestibulum tristique quam vitae augue tincidunt ullamcorper. Mauris iaculis in lorem vitae elementum.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid place-items-center">
          <BsChevronDoubleDown className="text-center"/>
        </div>

        <IconContext.Provider value={{ color: "black", className: "w-10", size: "100" }}>
          <div className="my-9 flex flex-col jusitfy-center items-center">
            <h2 className="font-heading text-7xl text-center">Our Chef Team</h2>
            <div className="max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-9 place-items-center">
                <div>
                  <Image src={ChefPic1} alt="Picture of a Chef"/>
                </div>  
                <div className="px-4">
                  <h3 className="text-4xl mb-3">Noburu Imagawa</h3>
                  <p className="font-light">Morbi rhoncus mi id lorem fermentum elementum. Ut sit amet fringilla nisl, nec luctus metus. Vivamus eleifend tempor sagittis. Duis nibh felis, viverra eget diam at, ornare tincidunt neque. Proin congue suscipit eleifend.</p>
                    <FaFacebookSquare className="inline-block mx-2" />
                    <FaTwitterSquare className="inline-block mx-2" />
                    <FaInstagramSquare className="inline-block mx-2" />
                </div>  
                <div className="md:col-start-2">
                  <Image src={ChefPic2} alt="Picture of a Chef"/>
                </div>  
                <div className="px-4 md:col-start-1 md:row-start-2">
                  <h3 className="text-4xl mb-3">Yoshiiku Toshishai</h3>
                  <p className="font-light">Morbi rhoncus mi id lorem fermentum elementum. Ut sit amet fringilla nisl, nec luctus metus. Vivamus eleifend tempor sagittis. Duis nibh felis, viverra eget diam at, ornare tincidunt neque. Proin congue suscipit eleifend.</p>
                    <FaFacebookSquare className="inline-block mx-2" />
                    <FaTwitterSquare className="inline-block mx-2" />
                    <FaInstagramSquare className="inline-block mx-2" />
                </div>  
                <div>
                  <Image src={ChefPic3} alt="Picture of a Chef"/>
                </div>  
                <div>
                  <h3 className="text-4xl mb-3">Kiyohara Nakadai</h3>
                  <p className="font-light">Morbi rhoncus mi id lorem fermentum elementum. Ut sit amet fringilla nisl, nec luctus metus. Vivamus eleifend tempor sagittis. Duis nibh felis, viverra eget diam at, ornare tincidunt neque. Proin congue suscipit eleifend.</p>
                    <FaFacebookSquare className="inline-block mx-2" />
                    <FaTwitterSquare className="inline-block mx-2" />
                    <FaInstagramSquare className="inline-block mx-2" />
                </div>  
              </div>
            </div>
          </div>
        </IconContext.Provider>

        <div className="w-full my-9 md:grid md:grid-cols-3 items-center">
          <div className="">
            <Image src={SushiLeftPic} alt="Picture of Sushi"/>
          </div>
          <div>
            <h2 className="font-heading text-7xl text-center">Happy Customers</h2>
            <TestimonialSlider />
          </div>
          <div className="justify-end flex">
            <Image src={SushiRightPic} alt="Picture of Sushi" className="relative right-0"/>
          </div>
        </div>

      </>
    )
}
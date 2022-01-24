import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import sushiPic from '../public/sushi-food.png'
import sushiPic2 from '../public/sushi-food-b.png'
import sushiPic3 from '../public/sushi-food-d.jpeg'

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Home - Sushi Template</title>
    </Head>

      <Hero/>

      {/* The Art of Food */}
      <div className="flex flex-col md:flex-row pt-[5%]">
        <div className="md:w-1/3 flex items-center">
          <div className="pr-[25%] pt-[25%] pb-[25%] bg-[url('../public/bg-splash1-1.png')] bg-no-repeat bg-cover max-w-full">
            <Image src={sushiPic} alt="Picture of Sushi"/>
          </div>
        </div>
        <div className="px-[5%] md:w-2/3">
          <h2 className="font-heading text-7xl text-center">
            The Art of Food
          </h2>
          <div className="flex flex-col md:flex-row md:gap-4 p-5 font-light">
            <p className="mb-7 w-full">Authentic Japanese food, consectetur adipiscing elit. Cras rutrum justo vel orci volutpat convallis vel in augue. Duis enim purus, aliquet eu quam nec, eleifend consectetur turpis. Nulla nec lacus quam. Praesent eu faucibus tortor. Aliquam erat volutpat. Pellentesque sit amet faucibus erat, non semper enim. In lobortis turpis sed nunc feugiat cursus. Fusce facilisis, dui non pulvinar rhoncus, lorem ex imperdiet dui, vel cond imentum quam lectus in ante. Quisque condimentum massa elit, nec posuere nunc tempus quis. Nullam aliquet dolor ante, pellentesque suscipit turpis egestas eget. Aenean vel commodo felis. Aenean malesuada massa vel felis tempor commodo. In et sapien at magna ullamcorper semper. Nunc eu velit, ultricies laoreet lorem.</p>
            <div className="w-full">
              <p className="mb-7">Morbi rhoncus mi id lorem fermentum elementum. Ut sit amet fringilla nisl, nec luctus metus. Vivamus eleifend tempor sagittis. Duis nibh felis, viverra eget diam at, ornare tincidunt neque. Proin congue suscipit eleifend. Ut augue lacus, rhoncus id purus a, hendrerit vehicula turpis. In rutrum tellus quis congue maximus.</p>
              <p>Cras a viverra felis, at tincidunt est. Ut fermentum libero a quam sagittis, id congue dui aliquam. Aenean sit amet arcu porta, fermentum ante a, ullamcorper risus. Sed rutrum at sem quis scelerisque. Vestibulum tristique quam vitae augue tincidunt ullamcorper. Mauris iaculis in lorem vitae elementum.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Menu */}
      <div className="flex flex-col md:flex-row flex-wrap pt-[5%] items-center justify-center">
        <div className="text-center w-full">
          <h2 className="font-heading text-7xl">
            Selected Menu
          </h2>
        </div>

        {/* Appetizers */}
        <div className="w-full md:w-1/2 md:order-2 flex items-center">
          <div className="w-full pr-[25%] pt-[25%] pb-[25%] bg-[url('../public/bg-splash-2.png')] bg-no-repeat bg-cover">
            <Image src={sushiPic2} alt="Picture of Sushi" />
          </div>
        </div>
        <div className="md:w-1/2 p-[5%] md:order-1">
          <h3 className="text-4xl pb-10">Appetizers</h3>
          <span className="border-t-black w-10 h-10"/>
          <div className="grid grid-cols-2 gap-y-10">
            <div>
              <h4 className="text-xl pb-3">Tako Wasabi</h4>
              <p className="font-light">Fermentum libero a quam sagittis, id congue dui aliquam.</p>
            </div>
            <div className=" text-right">
              $5.50
            </div>
            <div>
              <h4 className="text-xl pb-3">Ikura Shoyu Zuke</h4>
              <p className="font-light">Exercitationem ullam corporis suscipit laboriosam.</p>
            </div>
            <div className=" text-right">
              $8.20
            </div>
            <div>
              <h4 className="text-xl pb-3">Eringi Nigiri</h4>
              <p className="font-light">Nemo enim ipsam voluptatem quia voluptas sit aspernatur</p>
            </div>
            <div className=" text-right">
              $6.80
            </div>
            <div className="">
              <h4 className="text-xl pb-3">Kinpira Gobo</h4>
              <p className="font-light">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse</p>
            </div>
            <div className=" text-right">
              $4.80
            </div>
          </div>
        </div>

        {/* Combos */}
        <div className="flex flex-col md:flex-row md:order-3 flex-wrap pt-[5%] items-center justify-center">
          <div className="md:w-1/2 flex justify-center">
            <Image src={sushiPic3} alt="Picture of Combos" />
          </div>
          <div className="md:w-1/2 p-[5%]">
            <h4 className="text-4xl pb-10">Combos</h4>
            <span className="border-t-black w-10 h-10"/>
            <div className="grid grid-cols-2 gap-y-10">
              <div>
                <h4 className="text-xl pb-3">Chirashi</h4>
                <p className="font-light">Nam libero tempore, cum soluta nobis est eligendi optio</p>
              </div>
              <div className=" text-right">
                $19.80
              </div>
              <div>
                <h4 className="text-xl pb-3">Sashimi</h4>
                <p className="font-light">Temporibus autem quibusdam et aut officiis debitis aut rerum.</p>
              </div>
              <div className=" text-right">
                $22.80
              </div>
              <div>
                <h4 className="text-xl pb-3">Tekka Don</h4>
                <p className="font-light">Sed quia non numquam eius modi tempora incidunt ut labore et dolore</p>
              </div>
              <div className=" text-right">
                $19.80
              </div>
              <div className="">
                <h4 className="text-xl pb-3">Unagi Don</h4>
                <p className="font-light">Eaque ipsa quae ab illo inventore veritatis et quasi</p>
              </div>
              <div className=" text-right">
                $49.80
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

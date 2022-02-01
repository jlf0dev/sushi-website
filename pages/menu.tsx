import Head from "next/head"
import Hero from "../components/hero"
import HeroPic from "../public/menu-hero.jpg"
import Image from "next/image"
import { Product, ProductGrid } from "../components/productGrid"
import React from "react"
import AuthenticPic from "../public/authentic-japan.jpeg"



const appetizers: Product[] = [
  { image: "/products/appetizers/tako-wasabi-115x115.jpeg", name: "Tako Wasabi", description: "Fermentum libero a quam sagittis, id congue", price: "$5.50" },
  { image: "/products/appetizers/hiyayako-1-115x115.jpeg", name: "Hiyayako Tofu", description: "Libero Fermentum a quam sagittis, id congue dui aliquam.", price: "$4.80" },
  { image: "/products/appetizers/sushi-appetizers-7-115x115.jpeg", name: "Okura Soyuzuke", description: "Exercitationem ullam corporis suscipit.", price: "$8.20" },
  { image: "/products/appetizers/onsen-tamago-115x115.jpeg", name: "Onsen Tamago", description: "Exercitationem ullam corporis suscipit.", price: "$2.30" },
  { image: "/products/appetizers/lidako-115x115.jpeg", name: "Cuka Lidako", description: "Nemo enim ipsam voluptatem quia voluptas sit", price: "$5.50" },
  { image: "/products/appetizers/sushi-appetizers-8-1-115x115.jpeg", name: "Hon Maguro Natto", description: "Nemo enim ipsam voluptatem quia voluptas.", price: "$6.90" },
  { image: "/products/appetizers/gobou-115x115.jpeg", name: "Kinpira Gobou", description: "Neque porro quisquam est, qui dolorem.", price: "$4.80" },
  { image: "/products/appetizers/kani-mayo-115x115.jpeg", name: "Kani Mayo", description: "Quis autem vel eum iure reprehenderit qui.", price: "$5.50" },
]

const sushiSashimi: Product[] = [
  { image: "/products/sushi-sashimi/amakusa-115x115.jpeg", name: "Amakusa", description: "Corporis suscipit exercitationem ullam.", price: "$69.80" },
  { image: "/products/sushi-sashimi/choshi-115x115.jpeg", name: "Choshi", description: "Noluptatem quia voluptas.nemo enim ipsam", price: "$17.80" },
  { image: "/products/sushi-sashimi/houyo-115x115.jpeg", name: "Houyo", description: "Quam sagittis, id congue fermentum libero a", price: "$29.80" },
  { image: "/products/sushi-sashimi/hamachi-115x115.jpeg", name: "Hamachi", description: "Congue dui aliquam Libero Fermentum a quam sagittis.", price: "$12.80" },
  { image: "/products/sushi-sashimi/ootoro-115x115.jpeg", name: "Ootoro", description: "Voluptatem quia voluptas sit nemo enim ipsam", price: "$29.80" },
  { image: "/products/sushi-sashimi/tsubagai-115x115.jpeg", name: "Tsubagai", description: "Neque porro quisquam est, qui dolorem.", price: "$8.80" },
  { image: "/products/sushi-sashimi/salmon-zukushi-115x115.jpeg", name: "Salmon Zukushi", description: "Reprehenderit voluptate quis autem vel eum iure", price: "$18.80" },
  { image: "/products/sushi-sashimi/mekajiki-115x115.jpeg", name: "Mekajiki", description: "Reprehenderit quis autem vel eum iure.", price: "$10.80" },
]

const combos: Product[] = [
  { image: "/products/combos/chirasi-115x115.jpeg", name: "Premium Chirashi", description: "Corporis suscipit exercitationem ullam.", price: "$42.50" },
  { image: "/products/combos/suo-1-115x115.jpeg", name: "Suo", description: "Reprehenderit quis autem vel eum iure.", price: "$32.50" },
  { image: "/products/combos/kise-115x115.jpeg", name: "Kise Sushi", description: "Reprehenderit voluptate quis autem vel eum iure", price: "$45.80" },
  { image: "/products/combos/kirishima-115x115.jpeg", name: "Kirishima", description: "Quam sagittis, id congue fermentum libero a", price: "$27.80" },
  { image: "/products/combos/rishiri-1-115x115.jpeg", name: "Rishiri", description: "Noluptatem quia voluptas.nemo enim ipsam", price: "$49.80" },
  { image: "/products/combos/yufu-115x115.jpeg", name: "Yufu", description: "Neque porro quisquam est, qui dolorem.", price: "$23.80" },
  { image: "/products/combos/tarumi-115x115.jpeg", name: "Tarumi", description: "Congue dui aliquam Libero Fermentum a quam sagittis.", price: "$38.80" },
  { image: "/products/combos/shirane-1-115x115.jpeg", name: "Shirane", description: "Voluptatem quia voluptas sit nemo enim ipsam", price: "$20.80" },
]

const partyTrays: Product[] = [
  { image: "/public/products/party-trays/sushi-tray-a-500x400.jpeg", name: "Party Tray A", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", price: "$80" },
  { image: "/public/products/party-trays/sushi-tray-b-500x400.jpeg", name: "Party Tray B", description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur", price: "$120" },
  { image: "/public/products/party-trays/sushi-tray-c-500x400.jpeg", name: "Party Tray C", description: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat", price: "$180" },
]

export default function Menu() {
  return (
    <>
      <Head>
        <title>Menu - Sushi Template</title>
      </Head>

      <Hero name="Menu" backgroundImage={HeroPic} showCTA={false} />

      {/* Appetizers  */}
      <div className="max-w-6xl w-[90%] xl:w-full mx-auto my-8 text-center">
        <h2 className="font-heading text-7xl text-center my-8 pb-4">Appetizers</h2>
        <ProductGrid products={appetizers} />
      </div>

      <div className="relative bg-[#000000a6] text-center py-52">
        <Image src={AuthenticPic} alt="Picture of Food" className="-z-10" layout="fill" objectFit="cover" />
        <h2 className="z-10 text-5xl text-slate-50">Authentic Japan</h2>
      </div>

      {/* Sushi and Sashimi */}
      <div className="max-w-6xl w-[90%] xl:w-full mx-auto my-8 text-center">
        <h2 className="font-heading text-7xl text-center my-8 pb-4">Sushi and Sashimi</h2>
        <ProductGrid products={sushiSashimi} />
      </div>

      <div className="bg-black text-slate-50 py-20">
        <div className="max-w-6xl w-[90%] xl:w-full mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-4" >
        {
          partyTrays.map((product, index) =>
            <div key={index} className="flex flex-col">
              <div className="text-center">
                <Image src={product.image} width={500} height={400}/>
              </div>
              <div className="text-center">
                <h4 className="text-xl mb-3">{product.name}</h4>
                <p className="font-light">{product.description}</p>
              </div>
              <div className="grow flex items-end justify-center text-center text-xl mt-3">
                {product.price}
              </div>
            </div>
          )
        }
        </div>
      </div>


      {/* Combos */}
      <div className="max-w-6xl w-[90%] xl:w-full mx-auto my-8 text-center">
        <h2 className="font-heading text-7xl text-center my-8 pb-4">Combos</h2>
        <ProductGrid products={combos} />
      </div>
    </>
  )
}
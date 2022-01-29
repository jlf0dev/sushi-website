import Head from "next/head";
import Hero from "../components/hero";
import HeroPic from "../public/menu-hero.jpg"

export default function Menu() {
    return (
      <>
        <Head>
          <title>Menu - Sushi Template</title>
        </Head>

        <Hero name="Menu" backgroundImage={HeroPic} showCTA={false}/>
      </>
    )
}
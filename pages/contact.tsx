import Head from "next/head";
import Hero from "../components/hero";
import HeroPic from "../public/contact-hero.jpg"

export default function Contact() {
    return (
      <>
        <Head>
          <title>Contact - Sushi Template</title>
        </Head>

        <Hero name="Contact Us" backgroundImage={HeroPic} showCTA={false}/>
      </>
    )
}
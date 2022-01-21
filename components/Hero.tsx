export default function Hero() {
    return (
        <div className="w-full min-h-fit text-slate-50 flex flex-col bg-[#000000a6] bg-blend-darken bg-cover pt-[15%] pb-[20%]" style={{backgroundImage: "url('hero.jpg')"}}>
            <div className="flex-grow flex flex-col items-center justify-center max-w-[90%] mx-auto">
          <h1 className="text-8xl mb-7 font-heading">Sushi</h1>
          <p className="text-2xl mb-7 text-center font-light">Let your senses run riot with our tantalizing asian fusion.</p>
          <button className="bg-[#ffba00] py-4 px-11 uppercase hover:bg-black transition-colors duration-700 ease-in-out font-bold">See Menu</button>
        </div>
      </div>
    )
}
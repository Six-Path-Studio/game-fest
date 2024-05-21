import HeaderNav from "@/components/HeaderNav";
import Hero from "@/components/Hero";
import Head from "next/head";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
import Card from "@/components/Card";
import Slider from "@/components/Slider";
import FooterNav from "@/components/FooterNav";
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

export default function Home() {
  const stacks = ["Techies", "Gamers", "Nontechies", "Tech Enthusiast", "Investors", "Artist", "Game Developers", "Animators", "Investors", "Cinematographer", "Developers", "PMs", "VFx Artists", "Social Media Managers", "Voice Artist", "Game Publishers", "Writers", "Content Creators"]
  return (
    <>
      <Head>
        <title>Game Fest</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="Game Festival is a gathering that is geared towards building a strong game ecosystem in Nigeria and beyond." />
      </Head>
      <HeaderNav />
      <Hero />
      <div className="sm:mt-10">
        <OwlCarousel
          responsive={
            {
              0: {
                items: 1,
                loop: true,
                autoplay: true,
                autoplaySpeed: 2000,
                stagePadding: 50,
                autoplayTimeout: 2000,
                margin: 20,
              },
              1000: {
                items: 2,
                loop: true,
                margin: 20,
                autoplay: true,
                autoplaySpeed: 2000,
                stagePadding: 300,
                autoplayTimeout: 2000,
              }
            }
          }
        >
          <Card color="#CC00FF" text="Play to Earn money in Crypto" />
          <Card color="#DFCF3D" text="Game showcase of different games" />
          <Card color="#0066F5" text="Game for Good Documentary" />
          <Card color="#58CC4E" text="Promoting the Games Culture" />
        </OwlCarousel>
      </div>
      <Slider />
      <div className="lg:flex lg:m-20 m-4">
        <img src="/about1.png" className="sm:hidden lg:block md:hidden" alt="" />
        <div className="lg:p-16 p-4 my-auto rounded-md bg-[#151515]">
          <h1 className="lg:text-3xl text-3xl font-bold heading text-[#DFFF18]">About Game Expo 2024</h1>
          <p className="lg:text-lg text-sm my-8">
            Game Expo 24 is a gathering that is geared towards building a strong game ecosystem in Nigeria and beyond. It is a conference that would feature activities like talks, Game showcase, game competition and more, while promoting the African culture
            <br /> <br />
            Our aim is to expand the games industry in Africa, with a better and inclusive representative in the global gaming industry.
          </p>
        </div>
        <img src="/about2.png" className="sm:hidden lg:block md:hidden" alt="" />
      </div>

      <section className="lg:p-20 p-4 relative">
        <img src="/Container.png" className='absolute left-0 top-32 sm:w-20 md:w-20 lg:w-40' alt="" />
        <img src="/Container1.png" className='absolute right-0 top-0 sm:w-20 lg:w-44 md:w-20' alt="" />
        <h1 className="lg:text-6xl text-3xl lg:w-[50%] heading">Why is our theme titled: <span className="text-[#DFCF3D]">Explore</span></h1>
        <div className="lg:w-[60%] ml-auto">
          <p className="my-4 lg:text-lg text-sm">Explore is your one-stop shop for discovering the exciting world of games as a career, hobby, and cultural phenomenon. We want everyone to dive deep into workshops, witness esports competitions, and immerse yourself in a vibrant showcase of African-inspired games, opportunities and more. Let us explore together.</p>
          <div className="flex">
            <button className="rounded-full flex justify-center p-3 bg-white lg:w-40 text-black">Get ticket <img className="w-2 my-auto ml-3" src="/arrow.png" alt="" /></button>
            <button className="rounded-full ml-6 p-3 border border-white lg:w-40 text-white">Book a Stand</button>
          </div>
        </div>
      </section>

      <section className="my-20">
        <h1 className="heading lg:w-[60%] sm:m-4 text-3xl text-center mx-auto lg:text-6xl">who should attend Game expo 24?</h1>
        <div className='bg-[#121914] lg:p-12 rounded-xl p-4 my-12 lg:mx-32'>
          <div className='flex mt-6 flex-wrap '>
            {stacks.map((stack, index) => <button key={index} className='flex mr-4 lg:min-w-52 lg:px-6 my-2 bg-[#FFFFFF1A] p-3 justify-between rounded-md'>
              <img className='my-auto' src="/cloud.svg" alt="" />
              <p className='lg:text-base text-sm ml-3'>{stack}</p>
            </button>)}
          </div>
        </div>
      </section>

      <section className="my-20">
        <div className="flex justify-center">
          <h1 className="heading text-center lg:text-6xl text-3xl">Updates and Link</h1>
          <img className="sm:w-8" src="/SVG_margin.svg" alt="" />
        </div>
        <div className="lg:flex justify-between lg:mx-40 mx-4 my-10">
          <div className="border sm:my-4 lg:w-[48%] rounded-xl bg-[#241834] border-[#FFF06D54]">
            <div className="p-6">
              <p className="text-[#DFCF3D] text-xl font-bold">Sponsorship / Partnership</p>
              <p className="my-3">Are you a Business owner looking to grow your business? Reach new customers when you join our network.</p>
              <button className="bg-[#DFCF3D] flex text-black p-3 rounded-md">Click Here <img className="w-2 my-auto ml-3" src="/arrow.png" alt="" /></button>
            </div>
            <img className="w-full rounded-b-xl" src="/partner-img.png" alt="" />
          </div>
          <div className="border sm:my-4 lg:w-[48%] rounded-xl bg-[#241834] border-[#FFF06D54]">
            <div className="p-6">
              <p className="text-[#DFCF3D] text-xl font-bold">Get a stand</p>
              <p className="my-3">Are you a Business owner looking to grow your business? Reach new customers when you join our network.</p>
              <button className="bg-[#DFCF3D] flex text-black p-3 rounded-md">Click Here <img className="w-2 my-auto ml-3" src="/arrow.png" alt="" /></button>
            </div>
            <img className="w-full rounded-b-xl" src="/stand-img.png" alt="" />
          </div>
        </div>
      </section>

      <div className="" id="sponsors">
        <div className="lg:p-20 p-4">
          <div className="text-center">
            <h1 className="lg:text-5xl heading text-3xl text-center font-black">Our Sponsors</h1>
            <p className="text-3xl text-[#DFCF3D]">(#gameexpo24):</p>
          </div>
          <div className="lg:flex justify-center my-6">
            <div className="m-3 lg:w-[30%] p-4 border border-[#FFFFFF54] rounded-md">
              <img src="/sponsors/gameverse.png" alt="" />
            </div>
            <div className="m-3 lg:w-[30%] p-4 border border-[#FFFFFF54] rounded-md">
              <img src="/sponsors/divvicson.png" alt="" />
            </div>
            {/* <div className="m-3 p-4 border border-[#FFFFFF54] rounded-md">
              <img src="/sponsors/sixpath.png" alt="" />
            </div>
            <div className="m-3 p-4 border border-[#FFFFFF54] rounded-md">
              <img src="/sponsors/sixpath.png" alt="" />
            </div> */}
          </div>
        </div>
        <div className="relative">
          <img src="/Container.png" className='absolute -top-20 sm:w-20 md:w-20 lg:w-40' alt="" />
          <img src="/Container1.png" className='absolute right-0 top-0 sm:w-20 lg:w-44 md:w-20' alt="" />
          <div className="lg:px-20 py-10 p-4">
            <div>
              <h1 className="lg:text-5xl text-3xl heading text-center font-black">Our Partners</h1>
              {/* <h1 className="lg:text-5xl text-3xl text-[#DFCF3D] heading text-center font-black">:</h1> */}
            </div>
            <div className="lg:flex sm:flex-wrap justify-center my-6">
              <div className="m-3 p-4 lg:w-[30%] border border-[#FFFFFF54] rounded-md">
                <img className="w-full" src="/sponsors/genz.png" alt="" />
              </div>
              <div className="m-3 p-4 lg:w-[30%] border border-[#FFFFFF54] rounded-md">
                <img className="w-full" src="/sponsors/sixpath.png" alt="" />
              </div>
              <div className="m-3 p-4 lg:w-[30%] border border-[#FFFFFF54] rounded-md">
                <img className="w-full" src="/sponsors/letsbuild.png" alt="" />
              </div>
              {/* <div className="m-3 p-4 border sm:w-[40%] border-[#FFFFFF54] rounded-md">
                <img className="w-full" src="/sponsors/sixpath.png" alt="" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="lg:m-20 m-4 bg-[#0066F5] lg:p-20 p-4 rounded-xl">
        <h1 className="text-[#DFFF18] heading lg:text-4xl text-2xl mb-8">Our Story</h1>
        <p className="lg:text-lg text-sm">Our mission with Game Fest is to showcase and celebrate the rich diversity of the gaming industry in Nigeria. We strive to create an inclusive and welcoming environment for gamers of all ages, backgrounds, and skill levels to come together and connect through their love of gaming.
          <br /> <br />
          Games have been here since the history of man, over the years it has evolved to the level of advancement  it enjoys today. Adoption of technology has made life easy and over time we are experiencing groundbreaking emerging technologies.
          <br /> <br />
          While the emergence of technology and its subsequent  adoption in Africa has numerous benefits,  the unforeseen result is a decline or loss in our cultural heritage.
          <br /> <br />
          Through our festival, we aim to promote the growth and development of the games industry in Nigeria by providing a platform for local game developers to showcase their work, network with industry professionals, and gain exposure to a wider audience.
          We are committed to fostering innovation, creativity, and excellence in gaming, and to providing educational opportunities for aspiring game developers and enthusiasts. Our goal is to inspire and empower the next generation of Nigerian game developers and to position Nigeria as a leading player in the global gaming industry.
          <br /> <br />
          Above all, we are dedicated to providing a fun and engaging experience for all attendees, and to building a vibrant and supportive community of gamers in Nigeria.</p>
      </div> */}
      {/* <div className="sm:my-10">
        <OwlCarousel
          responsive={
            {
              0: {
                items: 1,
                loop: true,
                autoplay: true,
                autoplaySpeed: 2000,
                stagePadding: 50,
                autoplayTimeout: 2000,
                margin: 20,
              },
              1000: {
                items: 2,
                loop: true,
                margin: 20,
                autoplay: true,
                autoplaySpeed: 2000,
                stagePadding: 250,
                autoplayTimeout: 2000,
              }
            }
          }
        >
          <a href="https://calendly.com/gameverseafrica/30min" target="_blank">
            <Card color="#CC00FF" text="Showcase your games." />
          </a>
          <a href="https://calendly.com/gameverseafrica/30min" target="_blank">
            <Card color="#DFCF3D" text="Become a Sponsor" />
          </a>
          <a href="https://calendly.com/gameverseafrica/30min" target="_blank">
            <Card color="#0066F5" text="Become a Partner" />
          </a>
          <a href="https://calendly.com/gameverseafrica/30min" target="_blank">
            <Card color="#58CC4E" text="Media Partnership" />
          </a>
        </OwlCarousel>
      </div> */}
      <FooterNav />
    </>
  )
}

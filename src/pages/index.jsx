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
        <div className="lg:p-16 p-4 my-auto rounded-md bg-[#0066F5]">
          <h1 className="lg:text-5xl text-3xl font-bold heading text-[#DFFF18]">About Game <br /> Festival 2023</h1>
          <p className="lg:text-lg text-sm my-8">Game Festival is a gathering that is geared towards building a strong game ecosystem in Nigeria and beyond. It is a festival that would feature activities like Esport, workshop, Game showcase etc, promoting the African culture through the gaming industry.
            <br /><br />
            Our aim is to expand the gaming industry in Africa, with a better and inclusive representative in the global gaming industry.</p>
        </div>
        <img src="/about2.png" className="sm:hidden lg:block md:hidden" alt="" />
      </div>
      <div className="lg:p-20 p-4" id="sponsors">
        <h1 className="lg:text-5xl text-3xl text-center font-black">Sponsors</h1>
        <div className="lg:flex justify-between my-6">
          <div className="m-3 p-4 border border-[#0066F5] rounded-md">
            <img src="/sponsors/sixpath.png" alt="" />
          </div>
          <div className="m-3 p-4 border border-[#0066F5] rounded-md">
            <img src="/sponsors/sixpath.png" alt="" />
          </div>
          <div className="m-3 p-4 border border-[#0066F5] rounded-md">
            <img src="/sponsors/sixpath.png" alt="" />
          </div>
          <div className="m-3 p-4 border border-[#0066F5] rounded-md">
            <img src="/sponsors/sixpath.png" alt="" />
          </div>
        </div>
        <h1 className="lg:text-5xl text-3xl text-center mt-10 font-black">Partners</h1>
        <div className="lg:flex justify-between my-6">
          <div className="m-3 p-4 border border-[#0066F5] rounded-md">
            <a href="https://www.genztechies.com/" target="_blank">
              <img src="/sponsors/genztechies.png" alt="" />
            </a>
          </div>
          <div className="m-3 p-4 border border-[#0066F5] rounded-md">
            <a href="https://acceleratehub.co/" target="_blank">
              <img src="/sponsors/Accelerate.png" alt="" />
            </a>
          </div>
          <div className="m-3 p-4 border border-[#0066F5] rounded-md">
            <a href="">
              <img src="/sponsors/techharcourt.png" alt="" />
            </a>
          </div>
          <div className="m-3 p-4 border border-[#0066F5] rounded-md">
            <a href="">
              <img src="/sponsors/letsbuild.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="lg:m-20 m-4 bg-[#0066F5] lg:p-20 p-4 rounded-xl">
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
      </div>
      <div className="sm:my-10">
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
      </div>
      <FooterNav />
    </>
  )
}

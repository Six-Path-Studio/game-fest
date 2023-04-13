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
      </Head>
      <HeaderNav />
      <Hero />
      <OwlCarousel

        loop={true}
        margin={20}
        autoplay={true}
        autoplaySpeed={2000}
        items={2}
        stagePadding={300}
        autoplayTimeout={2000}
      >
        <Card color="#CC00FF" text="Get better returns on my money" />
        <Card color="#DFCF3D" text="Game showcase of different games" />
        <Card color="#0066F5" text="Game for Good Documentary" />
        <Card color="#58CC4E" text="Promoting the Games Culture" />
      </OwlCarousel>
      <Slider />
      <div className="flex m-20">
        <img src="/about1.png" alt="" />
        <div className="p-24 my-auto bg-[#0066F5]">
          <h1 className="text-5xl font-bold heading text-[#DFFF18]">About Game <br /> Festival 2023</h1>
          <p className="text-xl my-8">Game Festival is a gathering that is geared towards building a strong game ecosystem in Nigeria and beyond. It is a festival that would feature activities like Esport, workshop, Game showcase etc, promoting the African culture through the gaming industry.
            <br /><br />
            Our aim is to expand the gaming industry in Africa, with a better and inclusive representative in the global gaming industry.</p>
        </div>
        <img src="/about2.png" alt="" />
      </div>
      <div className="my-20">
        <h1 className="text-5xl text-center font-black">Sponsors / Partner</h1>
      </div>
      <div className="m-20 bg-[#0066F5] p-20 rounded-xl">
        <h1 className="text-[#DFFF18] heading text-4xl mb-8">Our Story</h1>
        <p className="text-xl">Our mission at the Nigeria Game Festival is to showcase and celebrate the rich diversity of the gaming industry in Nigeria. We strive to create an inclusive and welcoming environment for gamers of all ages, backgrounds, and skill levels to come together and connect through their love of gaming.
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
      <OwlCarousel
        loop={true}
        margin={20}
        autoplay={true}
        autoplaySpeed={2000}
        items={3}
        stagePadding={100}
        autoplayTimeout={2000}
      >
        <Card color="#CC00FF" text="Showcase your games." />
        <Card color="#DFCF3D" text="Become a Sponsor" />
        <Card color="#0066F5" text="Become a Partner" />
        <Card color="#58CC4E" text="Become a Media Partner" />
      </OwlCarousel>
      <FooterNav />
    </>
  )
}

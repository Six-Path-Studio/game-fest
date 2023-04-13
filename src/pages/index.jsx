import HeaderNav from "@/components/HeaderNav";
import Hero from "@/components/Hero";
import Head from "next/head";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
import Card from "@/components/Card";
import Slider from "@/components/Slider";
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
    </>
  )
}

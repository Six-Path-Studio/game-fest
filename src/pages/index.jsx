import HeaderNav from "@/components/HeaderNav";
import Hero from "@/components/Hero";
import Head from "next/head";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
import Card from "@/components/Card";
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

export default function Home() {
  const options = {
    loop: true,
    margin: 20,
    autoplay: true,
    autoplaySpeed: 3000,
    startPosition: 1.5,
    responsive: {
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  }
  return (
    <>
      <Head>
        <title>Game Fest</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <HeaderNav />
      <Hero />
      <OwlCarousel
        rtl="true"
        options={options}
      >
        <Card color="#DFCF3D" text="Game showcase of different games" />
        <Card color="#DFCF3D" text="Game showcase of different games" />
        <Card color="#DFCF3D" text="Game showcase of different games" />
        <Card color="#DFCF3D" text="Game showcase of different games" />
      </OwlCarousel>
    </>
  )
}

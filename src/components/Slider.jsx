import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
import Card from "@/components/Card";
const OwlCarousel = dynamic(() => import('react-owl-carousel-rtl'), {
  ssr: false,
});

const Slider = () => {
  return (
    <div>
      <OwlCarousel
        responsive={
          {
            0: {
              items: 1,
              rtl: true,
              loop: true,
              autoplay: true,
              autoplaySpeed: 2000,
              stagePadding: 70,
              autoplayTimeout: 2000,
              margin: 20,
            },
            1000: {
              items: 3,
              rtl: true,
              loop: true,
              margin: 20,
              autoplay: true,
              autoplaySpeed: 2000,
              stagePadding: 150,
              autoplayTimeout: 2000,
            }
          }
        }
      >
        <Card color="#CC00FF" text="Play to Earn money in Crypto" />
        <Card color="#DFCF3D" text="Interesting Game Release / Launch" />
        <Card color="#0066F5" text="Afro Games Culture Showcase" />
        <Card color="#58CC4E" text="Promoting Games Culture" />
      </OwlCarousel>
    </div>
  );
};

export default Slider;
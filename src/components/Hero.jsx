import React from 'react';

const Hero = () => {
  return (
    <div>
      <img src="/pattern.png" className='absolute top-32' alt="" />
      <img src="/pattern2.png" className='absolute right-0 top-10' alt="" />
      <div className='w-1/2 mx-auto my-32 text-center'>
        <h1 className='heading text-6xl'>The Maiden Edition of Game Festival by Gamverse Africa</h1>
        <p className='my-4 text-lg lg:w-[70%] mx-auto'>Promoting the African culture, developers, gamers, creatives and enthusiast through the game space.</p>
        <div className='flex justify-evenly bg-white rounded-md p-2 text-black text-left w-72 mx-auto'>
          <img src="/date.png" className='w-8 h-10' alt="" />
          <div className='ml-4'>
            <p className='text-xs'>August, 2023.</p>
            <p className='font-bold'>Port Harcourt, Nigeria.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
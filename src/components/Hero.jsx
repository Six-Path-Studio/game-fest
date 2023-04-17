import React from 'react';

const Hero = () => {
  return (
    <div>
      <img src="/pattern.png" className='absolute top-32 sm:w-20 md:w-20 lg:w-auto' alt="" />
      <img src="/pattern2.png" className='absolute right-0 top-10 sm:top-44 sm:w-20 lg:w-auto md:w-20' alt="" />
      <div className='lg:w-1/2 mx-auto lg:my-32 my-20 sm:mx-4 md:mx-4 text-center'>
        <h1 className='heading lg:text-6xl text-3xl'>The Maiden Edition of Game Festival by Gamverse Africa</h1>
        <p className='my-4 lg:text-lg text-sm lg:w-[70%] mx-auto'>Promoting the African culture, developers, gamers, creatives and enthusiast through the game space.</p>
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
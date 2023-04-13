import React from 'react';

const FooterNav = () => {
  return (
    <div className='p-8 px-20'>
      <div className='flex justify-between'>
        <img src="/white-logo.png" alt="" />
        <p>Home</p>
        <p>Game Showcase</p>
        <p>Games for Good</p>
        <p>Sponsors / Partners</p>
        <p>Our Merch</p>
        <p>Our Merch</p>
        <div className='w-40 justify-between flex'>
          <img src="/insta.png" className='w-6 h-6' alt="" />
          <img src="/twitter.png" className='w-6 h-6' alt="" />
          <img src="/link.png" className='w-6 h-6' alt="" />
        </div>
      </div>
      <div className='text-center text-sm mt-8'>
        Copyright @ Gamefest2023
      </div>
    </div>
  );
};

export default FooterNav;
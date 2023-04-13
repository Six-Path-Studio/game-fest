import React from 'react';

const FooterNav = () => {
  return (
    <div className='lg:p-8 p-4 lg:px-20'>
      <div className='lg:flex justify-between'>
        <img src="/white-logo.png" alt="" />
        <p className='sm:my-3'>Home</p>
        <p className='sm:my-3'>Game Showcase</p>
        <p className='sm:my-3'>Games for Good</p>
        <p className='sm:my-3'>Sponsors / Partners</p>
        <p className='sm:my-3'>Our Merch</p>
        <p className='sm:my-3'>Our Merch</p>
        <div className='lg:w-40 justify-between flex'>
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
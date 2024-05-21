import React from 'react';

const FooterNav = () => {
  return (
    <div className='lg:p-8 p-4 bg-[#161616] lg:px-20'>
      <div className='lg:flex justify-between'>
        <img src="/white-logo.png" alt="" />
        <p className='sm:my-3'>Home</p>
        <p className='sm:my-3'>Game Showcase</p>
        <p className='sm:my-3'>Games for Good</p>
        <p className='sm:my-3'>
          <a href="#sponsors">
            Sponsors / Partners</a></p>
        <p className='sm:my-3'>Our Merch</p>
        <div className='lg:w-40 justify-between flex'>
          <a href="https://www.instagram.com/gameverse_africa/" target='_blank'>
            <img src="/insta.png" className='w-6 h-6' alt="" />
          </a>
          <a href="https://twitter.com/gameverse_afric" target='_blank'>
            <img src="/twitter.png" className='w-6 h-6' alt="" />
          </a>
          <a href="https://www.linkedin.com/company/gameverse-africa/" target='_blank'>
            <img src="/link.png" className='w-6 h-6' alt="" />
          </a>
        </div>
      </div>
      <div className='text-center text-sm mt-8'>
        Copyright @ Gamefest2023
      </div>
    </div>
  );
};

export default FooterNav;
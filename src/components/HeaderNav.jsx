import React from 'react';

const HeaderNav = () => {
  return (
    <div className='p-10'>
      <img src="/white-logo.png" className='mx-auto sm:w-40' alt="" />
      <div className='flex w-[60%] mx-auto justify-between my-6 sm:hidden'>
        <p>Home</p>
        <p>Game Showcase</p>
        <p>Games for Good</p>
        <a href="#sponsors">
          <p>Sponsors / Partners</p>
        </a>
        <p>Our Merch</p>
      </div>
    </div>
  );
};

export default HeaderNav;
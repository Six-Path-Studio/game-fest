import React from 'react';

const HeaderNav = () => {
  return (
    <div className='flex p-4'>
      <img src="/white-logo.png" className='mx-auto lg:h-8 my-auto sm:w-40' alt="" />
      <div className='flex w-[60%] mx-auto justify-between sm:hidden'>
        <p className='my-auto'>Home</p>
        <p className='my-auto'>Partners</p>
        <p className='my-auto'>Sponsors</p>
        <p className='my-auto'>Our Merch</p>
        <p className='my-auto'>Contact Us</p>
        <button className='bg-white p-3 text-black rounded-md'>Get ticket</button>
      </div>
    </div>
  );
};

export default HeaderNav;
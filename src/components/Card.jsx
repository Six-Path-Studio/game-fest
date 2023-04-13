import React from 'react';

const Card = ({ text, color }) => {
  return (
    <div className={`w-full rounded-xl lg:p-8 p-4 lg:text-3xl text-xl font-bold`} style={{
      color: color,
      border: '2px solid' + color
    }}>
      <div className='text-center lg:text-6xl text-3xl font-black'>"</div>
      <div className='text-left'>
        {text}
      </div>
      <div className='text-center lg:text-6xl text-3xl mt-4'>"</div>
    </div>
  );
};

export default Card;
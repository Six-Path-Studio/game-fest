import React from 'react';

const Card = ({ text, color }) => {
  return (
    <div className={`w-full rounded-xl p-8 text-3xl font-bold`} style={{
      color: color,
      border: '2px solid' + color
    }}>
      <div className='text-center text-6xl font-black'>"</div>
      <div className='text-left'>
        {text}
      </div>
      <div className='text-center  text-5xl mt-4'>"</div>
    </div>
  );
};

export default Card;
import React from 'react';

const Card = ({ text, color }) => {
  return (
    <div className={`w-full rounded-xl p-6 text-3xl font-bold`} style={{
      color: color,
      border: '2px solid' + color
    }}>
      <h1 className='text-center text-5xl'>"</h1>
      <div>
        {text}
      </div>
      <h1 className='text-center  text-5xl'>"</h1>
    </div>
  );
};

export default Card;
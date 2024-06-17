import React from 'react';

const Card = ({ item, handleClick, index }) => {
  const { img, name, artist, added } = item;

  return (
    <div className='w-[340px] p-4 pb-8 mt-10 rounded-md bg-[#2b435a] flex gap-4 relative'>
      <div className='w-20 h-20 rounded-md'>
        <img
          className='w-full h-full object-cover rounded-md'
          src={img}
          alt={name}
        />
      </div>
      <div className=''>
        <h3 className='text-xl leading-none font-semibold'>{name}</h3>
        <h6 className='text-sm'>{artist}</h6>
      </div>
      <button
        onClick={() => handleClick(index)}
        className={`px-4 py-3 ${
          added === false ? 'bg-orange-400' : 'bg-teal-400'
        } absolute bottom-0 translate-y-[50%] left-[37%] text-xs rounded-full`}
      >
        {added === false ? 'Add to ❤️' : 'Added'}
      </button>
    </div>
  );
};

export default Card;

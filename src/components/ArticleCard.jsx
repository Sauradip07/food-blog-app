import React from 'react';

export const ArticleCard = (props) => {
  return (
    <div className='flex flex-col items-center gap-10 lg:w-[30%] p-7 text-[#444957] text-sm border border-gray-400 rounded-2xl'>
      <img src={props.img}></img>
      <h3 className='font-poppins text-azureBlue text-xl lg:text-2xl font-bold'>{props.header}</h3>
      <p className='tracking-wide'>{props.desc}</p>
      <button className="w-32 lg:w-40 h-10 lg:h-12 font-bold rounded-3xl z-50 border-2 border-azureBlue">Read More</button>
    </div>
  )
}
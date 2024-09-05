import React, { useState } from 'react';

export const ArticleCard = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleImageError = () => {
    setError(true); // Set error state if image fails to load
  };

  return (
    <div className='flex flex-col items-center gap-10 lg:w-[30%] p-7 text-[#444957] text-sm border border-gray-400 rounded-2xl'>
      {!loaded && !error && (
        <div className='w-full h-48 bg-gray-200 animate-pulse'></div> // Placeholder
      )}
      <img 
        src={props.img}
        alt={props.header}
        className={`w-full h-48 object-cover ${loaded && !error ? '' : 'hidden'}`}
        onLoad={() => setLoaded(true)}
        onError={handleImageError}
        loading="lazy" // Lazy load image
      />
      {error && (
        <div className='w-full h-48 flex items-center justify-center bg-gray-300 text-gray-700'>
          Image not available
        </div> // Fallback
      )}
      <h3 className='font-poppins text-azureBlue text-xl lg:text-2xl font-bold'>
        {props.header}
      </h3>
      <p className='tracking-wide'>{props.desc}</p>
      <button className="w-32 lg:w-40 h-10 lg:h-12 font-bold rounded-3xl border-2 border-azureBlue bg-transparent text-azureBlue hover:bg-azureBlue hover:text-white">
        Read More
      </button>
    </div>
  )
}

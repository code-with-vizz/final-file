import React from 'react';
import room from './assets/room.mp4';
import outdoor from './assets/sets/outdoor.jpg';
import outdoor1 from './assets/sets/outdoor1.jpg';
import outdoor2 from './assets/sets/outdoor2.jpg';
import outdoor3 from './assets/sets/set8.jpg';
import outdoor4 from './assets/sets/set11.jpg';
import outdoor5 from './assets/sets/set4.jpg';
const OutdoorProducts = [
  outdoor, outdoor1 , outdoor2 , outdoor3, outdoor4, outdoor5
  
];

const Outdoorspaces = () => {
  return (
    <div className="relative h-[60vh] mx-[3%] my-20 mb-[170%] bg-[gray]">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={room}
        autoPlay
        loop
        muted
      ></video>
      <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Outdoor spaces</h1>
          <p className="text-lg font-semibold md:text-2xl">
            Discover our many dining rooms and find your specific style, whether it be retro, Japandi, or minimalistic. <br />
            Pick a room designed to your wishes. Because the more you it is, the more extraordinary it is.
          </p>
        </div>
      </div>
      <div className='my-10 border-b border-gray-500 pb-4'>
        <h1 className='font-bold text-4xl'>Inspiring Outdoor Spaces</h1>
        <p className='text-lg mt-2'>Get inspiration from dining rooms styled by our skilled interior designers.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16 mx-10 my-10">
        {OutdoorProducts.map((image, index) => (
          <div key={index} className="border w-[320px] h-[300px] pb-4 overflow-hidden">
            <img src={image} alt={`Dining Product ${index + 1}`} className="w-full h-[300px] object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Outdoorspaces;

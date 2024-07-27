import React from 'react'
import room from './assets/room.mp4'
import almirah1 from './assets/almirah/almirah1.jpg';
import almirah2 from './assets/almirah/almirah2.jpg';
import almirah3 from './assets/almirah/almirah3.jpg';
import almirah4 from './assets/almirah/almirah4.jpg';
import almirah5 from './assets/almirah/almirah5.jpg';
import almirah6 from './assets/almirah/almirah6.jpg';

const almirahProducts = [
  almirah1, almirah2, almirah3, almirah4, almirah5, almirah6, 
  
];

const Bedroom = () => {
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
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Bed Room</h1>
        <p className="text-lg font-semibold  md:text-2xl">
          Discover our many rooms and find your specific style if it be retro, japandi or minimalistic. <br></br> Pick a room designed to your wishes. Because the more you it is. The more extraordinary it is.
        </p>
      </div>
    </div>
    <div className='my-10 border-b border-gray-500 pb-4'>
      <h1 className='font-bold text-4xl'>Inspiring Bed Rooms</h1>
      <p className='text-lg mt-2'>Get inspiration from Dining rooms styled by our skilled Interior Designers</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16 mx-10 my-10 ">
        {almirahProducts.map((image, index) => (
          <div key={index} className="border w-[320px] h-[300px] pb-4 overflow-hidden">
            <img src={image} alt={`Sitting Product ${index + 1}`} className="w-full h-[300px] object-cover" />
          </div>
        ))}
      </div>
   
  </div>
  )
}
export default Bedroom;
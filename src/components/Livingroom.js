import React from 'react'
import room from './assets/room.mp4'
import sitting1 from './assets/sitting/sitting1.jpg';
import sitting2 from './assets/sitting/sitting2.jpg';
import sitting3 from './assets/sitting/sitting3.jpg';
import sitting4 from './assets/sitting/sitting4.jpg';
import sitting5 from './assets/sitting/sitting5.jpg';
import sitting6 from './assets/sitting/sitting6.jpg';
import sitting7 from './assets/sitting/sitting7.jpg';
import sitting8 from './assets/sitting/sitting8.jpg';
import sitting9 from './assets/sitting/sitting9.jpg';
import sitting10 from './assets/sitting/sitting10.jpg';
import sitting11 from './assets/sitting/sitting11.jpg';
import sitting12 from './assets/sitting/sitting12.jpg';
import sitting13 from './assets/sitting/sitting13.jpg';
import sitting14 from './assets/sitting/sitting14.jpg';
import sitting from './assets/sitting/sitting.jpg';
import sofa1 from './assets/sitting/sofa1.jpg';
import sofa2 from './assets/sitting/sofa2.jpg';
import sofa3 from './assets/sitting/sofa3.jpg';
import sofa4 from './assets/sitting/sofa4.jpg';
import sofa5 from './assets/sitting/sofa5.jpg';




const sittingProducts = [
  sitting1, sitting2, sitting3, sitting4, sitting5, sitting6, sitting7,
  sitting8, sitting9, sitting10, sitting11, sitting12, sitting13, sitting14, sitting,sofa1, sofa2, sofa3, sofa4, sofa5
];


const Livingroom = () => {
  return (
    <div className="relative h-[60vh] mx-[3%] my-20 mb-[140%] bg-[gray]">
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      src={room}
      autoPlay
      loop
      muted
    ></video>
    <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50">
      <div className="text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Living Room</h1>
        <p className="text-lg font-semibold  md:text-2xl">
          Discover our many rooms and find your specific style if it be retro, japandi or minimalistic. <br></br> Pick a room designed to your wishes. Because the more you it is. The more extraordinary it is.
        </p>
      </div>
    </div>
    <div className='my-10 border-b border-gray-500 pb-4'>
      <h1 className='font-bold text-4xl'>Inspiring Living Rooms</h1>
      <p className='text-lg mt-2'>Get inspiration from Dining rooms styled by our skilled Interior Designers</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16 mx-10 my-10 ">
        {sittingProducts.map((image, index) => (
          <div key={index} className="border w-[320px] h-[300px] pb-4 overflow-hidden">
            <img src={image} alt={`Sitting Product ${index + 1}`} className="w-full h-[300px] object-cover" />
          </div>
        ))}
      </div>
   
  </div>
  )
}
export default Livingroom;

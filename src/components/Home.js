import React from 'react';
import room from './assets/room.mp4'
import bar1 from './assets/bar/bar1.jpg';
import bar2 from './assets/bar/bar2.jpg';
import bar3 from './assets/bar/bar3.jpg';
import bar4 from './assets/bar/bar4.jpg';
import bar5 from './assets/bar/bar5.jpg';
import bar6 from './assets/bar/bar6.jpg';
import bar7 from './assets/bar/bar7.jpg';
import bar8 from './assets/bar/bar8.jpg';
import bar9 from './assets/bar/bar9.jpg';
import bar10 from './assets/bar/bar10.jpg';




const barProducts = [
  bar1, bar2, bar3, bar4, bar5, bar6, bar7, bar8, bar9, bar10,
 
];



const Home = () => {
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Bar</h1>
          <p className="text-lg font-semibold md:text-2xl">
            Discover our many bar designs and find your specific style, whether it's modern, classic, or rustic. <br /> Pick a bar designed to your wishes. The more it reflects you, the more extraordinary it is.
          </p>
        </div>
      </div>
      <div className='my-10 border-b border-gray-500 pb-4'>
        <h1 className='font-bold text-4xl'>Inspiring Bars</h1>
        <p className='text-lg mt-2'>Get inspiration from bars styled by our skilled Interior Designers</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16 mx-10 my-10">
        {barProducts.map((image, index) => (
          <div key={index} className="border w-[320px] h-[300px] pb-4 overflow-hidden">
            <img src={image} alt={`Bar Product ${index + 1}`} className="w-full h-[300px] object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

import React from 'react';
import { GrInstagram } from "react-icons/gr";
import { SlSocialYoutube } from "react-icons/sl";
import { TbBrandFacebook } from "react-icons/tb";

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="border-t border-stroke bg-white position-fixed bottom-0 ">
        <div className=" max-w-c-1390 px-4 md:px-8 ">
            <div className='bg-stone-200 w-[60vw] h-[35vh] rounded-3xl ml-[35%] mt-[-4%] flex items-center justify-center gap-12'>
            <div className='grid grid-rows gap-2'>
               <div className='w-[380px] h-[170px] overflow-hidden rounded-lg'>
                  <img src='https://i.pinimg.com/564x/2d/32/35/2d3235c256512f0dba180822055ea23a.jpg' alt='img1' className='object-fit'  />
                

                </div>
                <Link to='/products' className='text-black ' >Take a look at Products</Link>
               </div>
               <div className='grid grid-rows gap-2'>
               <div className='w-[380px] h-[170px] overflow-hidden rounded-lg'>
                  <img src='https://i.pinimg.com/564x/7b/4a/9e/7b4a9e6368a9e068658bd9b87951a31f.jpg' alt='img2' className='object-fit'  />
                

                </div>
                <Link to='/about' className='text-black'>Know More About US</Link>
               </div>
           
            </div>
          {/* Footer Top */}
          <div className=" lg:pt-4 mx-10 my-3">
            <div className="flex flex-wrap mr-[15%] justify-between lg:justfiy-between lg:gap-0">
              <div className="w-1/2 lg:w-1/4 text-lg font-normal grid grid-row-4">
              <Link to="/rooms" className="mb-2 mt-2">
                  Rooms
                </Link>
               <Link to="/products" className="mb-2 ">
                  Products
                </Link>
                <Link to="/about" className="mb-2">
                  About US 
                </Link>
                <Link to="/contact" className="mb-2 ">
                  Contact Us
                </Link>
               
                
              </div>
              <div className='mt-5'>
                <p className='text-slate-500 font-normal text-sm'>Follow Us</p>
                <div className='flex items-center mt-3 gap-4'>
                <a className='border-[2px] border-grey flex items-center justify-center text-xl' style={{width:'50px', height:'50px', borderRadius:'50%'}} href='https://www.instagram.com/homedecore.yh' >
                <GrInstagram />
             </a>
             <div className='border-[2px] border-grey flex items-center justify-center text-xl' style={{width:'50px', height:'50px', borderRadius:'50%'}} >
                <SlSocialYoutube />
             </div>
             <div className=' border-[2px] border-grey   flex items-center justify-center text-xl' style={{width:'50px', height:'50px', borderRadius:'50%'}} >
                <TbBrandFacebook />
            </div>
                </div>
              </div>
            
            </div>
          </div>
          {/* Footer Top */}
          {/* Footer Bottom */}
          <div className="flex flex-col flex-wrap items-center justify-between gap-5 border-t border-stroke py-7  lg:flex-row lg:justify-between lg:gap-0">
            <div className="animate_top">
              <ul className="flex items-center gap-8">
                <li>
                  <a href="#" className="hover:text-primary">
                    English
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div className="animate_top">
              <p>&copy; {new Date().getFullYear()} . All rights reserved</p>
            </div>
            
            
          </div>
          {/* Footer Bottom */}
        </div>
      </footer>
    </>
  );
};

export default Footer;

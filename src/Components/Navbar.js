import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
    let Links=[
     {name:"CART",link:"/"},
     {name:"SIGN UP",link:"/"},
     {name:"lOG IN",link:"/"},
     {name:"CONTACT US",link:"./"},
    ];
    let[open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed-top-0 left-0'>
    <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
    <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
        <span className='text-3xl text-purple-500 mr-1 pt2'>
        </span>
        foodify.com
        </div>
        <ul className='md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1]
        left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in'>
            {
                Links.map((Link) => (
                 <li key={Link.name} classname='md:ml-8 text-xl md:my-0 my-7'>
                    <a href={Link.link} className='text-gray-800 hover:text-gray-300 duration-500'>{Link.name}</a>
                 </li>
                ))
            }
        </ul>
    </div>
    </div>
  )
};

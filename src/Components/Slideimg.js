import React, { useEffect, useState } from "react";
import {AiOutlineVerticalRight, AiOutlineVerticalLeft} from "react-icons/ai";


const featureProducts=[
     "/foodimg1.jpg",
     "/foodimg2.jpg",
     "/foodimg2.jpg",    
];
  let count = 0;
export default function Slider() {
    const [currentIndex,setCurrentIndex]=
    useState(0);

    useEffect(() => {
      startSlider()
    }, [])

    const startSlider = () => {
        setInterval(() => {
    handleonNextClick()
        }, 3000);
    }

    const handleonNextClick = () => {
    count =(count + 1) % featureProducts.length;
    setCurrentIndex(count);
    };
    const handleonPrevClick = () => {
     const productsLength = featureProducts.length;
     count = (currentIndex + productsLength - 1) % productsLength;
      setCurrentIndex(count);
    };
    return (
    <div className="w-full select-none relative">
    <div className="aspect-w-16 aspect-h-9">
    <img src={featureProducts[0]
    [currentIndex]} alt=""/>
    </div>
        
        <div className="absolute top-1/2 transform -translate-y-1/2 px-3 justify-between items-center">
        <button className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
        onClick={handleonPrevClick}>
            <AiOutlineVerticalRight size ={30}/></button> 
        <button className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
        onClick={handleonNextClick}>
            <AiOutlineVerticalLeft size={30}/></button>
        </div>
    </div>
    )
    };
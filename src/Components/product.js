import React from 'react';
import "./product.css";
import assestsviii from '../assestsviii/foodimg1.jpg'; 
import assestsi from '../assestsi/sweets.jpg';
import assestsii from '../assestsii/breakfast.jpg';
import assestsiii from '../assestsiii/lunch.jpg';
import assestsiv from '../assestsiv/salad.jpg';
import assestsv from '../assestsv/soup.jpg';
import assestsvi from '../assestsvi/snacks.jpg';
import assestsvii from '../assestsvii/cakes.jpg';
function Product() {
   
  return (
    <div className="gallery">
    <div className="content1">
    <img  src={assestsiv} alt="foodimg"/>
       <h3>salad</h3>
       <p>healthy salad for your fitness.</p>
       <h6>50$</h6>
       <button onClick={() =>{
         window.location.href= "/cart"
       }}className='b1'>buy now!</button>
    </div>
     
    <div className="content1">
    <img  src={assestsi} alt="foodimg"/>
       <h3>Sweets</h3>
       <p> celebrate the festive season.</p>
       <h6>70$</h6>
       <button  onClick={() =>{
         window.location.href= "/cart"
       }}className='b2'>buy now!</button>
    </div>

    <div className="content1">
    <img  src={assestsii} alt="foodimg"/>
    <h3>breakfast</h3>
    <p>breakfast: to start your day</p>
    <h6>110$</h6>
    <button  onClick={() =>{
         window.location.href= "/cart"
       }}className='b3'>buy now!</button>
 </div>

 <div className="content1">
 <img  src={assestsiii} alt="foodimg"/>
       <h3>Lunch</h3>
       <p>book your lunch here</p>
       <h6>150$</h6>
       <button  onClick={() =>{
         window.location.href= "/cart"
       }} className='b4'>buy now!</button>
    </div>

    <div className="content1">
    <img  src={assestsviii} alt="foodimg"/>
       <h3>Dinner</h3>
       <p>end your day with a happy meal.</p>
       <h6>200$</h6>
       <button  onClick={() =>{
         window.location.href= "/cart"
       }}className='b5'>buy now!</button>
    </div>

    <div className="content1">
    <img  src={assestsv} alt="foodimg"/>
       <h3>soups</h3>
       <p>healthy vegetable soups.</p>
       <h6>100$</h6>
       <button  onClick={() =>{
         window.location.href= "/cart"
       }}className='b5'>buy now!</button>
    </div>
   
    <div className="content1">
    <img  src={assestsvi} alt="foodimg"/>
       <h3>snacks</h3>
       <p>for your midnight cravings.</p>
       <h6>80$</h6>
       <button  onClick={() =>{
         window.location.href= "/cart"
       }}className='b5'>buy now!</button>
    </div>
  
    <div className="content1">
    <img  src={assestsvii} alt="foodimg"/>
       <h3>cakes and muffins</h3>
       <p>make your birthdays special.</p>
       <h6>250$</h6>
       <button  onClick={() =>{
         window.location.href= "/cart"
       }}className='b5'>buy now!</button>
    </div>
 </div>

  );
};

export default Product;
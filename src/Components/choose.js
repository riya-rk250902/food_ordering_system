import React from 'react';
import "./choose.css";
import assestsix from '../assestsix/delivery.jpg'; 
import assestsx from '../assestsx/chef.jpg';
import assestsxi from '../assestsxi/homedelivery.jpg';
function Choose() {
  return (
    <div className="gallery1">
      <div className="content2">
    <img  src={assestsix} alt="foodimg"/>
       <h3>Fast Delivery</h3>
       <p>Keep your systems in sync with automated 
         web hook bases notifications each time
         link is paid and how we dream about our future.</p>
    </div>
    <div className="content2">
    <img  src={assestsx} alt="foodimg"/>
       <h3>A Good Auto Responder</h3>
       <p>Keep your systems in sync with automated web hook bases 
        notifications each tume link is paid and 
        how we dream about our future.</p>
    </div>
    
    <div className="content2">
    <img  src={assestsxi} alt="foodimg"/>
       <h3>Home Delivery</h3>
       <p>Keep your systems in sync with automated web hook bases 
        notifications each tume link is paid and 
        how we dream about our future.</p> 
    </div>
      
    </div>
  )
}

export default Choose;
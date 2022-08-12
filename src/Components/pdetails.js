import { useDebugValue, useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function Pdetails() {
    const{product,setProduct}= useState({});
    const {id}= useParams();
    useEffect(() => {
        axios.defaults.headers = {
            auth: localStorage.getItem("token"),
          };
          //console.log(localStorage.getItem("token"));
        async function fetchData(){
            try {
                const data = (await axios.get(`http://localhost:4000/api/findbyid/${id}` ,{})).data;
                setProduct(data);
               console.log(data);
              } 
              catch (error) {
                console.log(error);
              }
        }
        fetchData();
      }, []);
  return (
    <div>
       <div>
        {product.foodname}
        <div>
            {product.quantity}
        </div>
       </div>
    </div>
  );
}

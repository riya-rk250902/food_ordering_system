import React, {useEffect, useState} from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import{Link, useNavigate} from 'react-router-dom';
import Navbar from './Navbar';
function Checkout() 
{
    
    const navigate = useNavigate();
    const[loading, setLoading]= useState(true);
    const [cart, setCart]= useState([]);
    var totalCartPrice = 0;
    useEffect(() =>{

    let isMounted =true;

    axios.get(`/api/cart`).then(res=>{
        if(isMounted)
        {
            if(res.data.status === 200)
            {
                setCart(res.data.cart);
                setLoading(false);
            }
            else if(res.data.status === 401)
            {
                navigate.pushState('/');
                swal("Warning",res.data.message,"error");
            }
        }
    });
    return() =>{
        isMounted=false
    };
  },[navigate]);
  //if(loading)
   //{
    //return <h4> Loading checkout...just a moment please</h4>
   //}
    return(
    <div>
    <Navbar/>
 <div>
   <div className="py-3 bg-warning">
    <div className="container">
        <h6>Thank you ! for ordering</h6>
        <h6> Your order details</h6>
    </div>
   </div>
   <div className="py-4">
    <div className="container">
        <div className="row">

            <div className="col-md-7">
                <div className="card">
                    <div className="card-header">
                        <h4>Basic Information</h4>
                    </div>
                    <div className="card-body">

                        <div className="row">
                            <div className="col-md-10">
                                <div className="form-group mb-3">
                                    <label> your name</label>
                                    <input type ="text" name="first name" className="form-control"/>
                                </div>
                            </div>

                            <div className="col-md-10">
                                <div className="form-group mb-3">
                                    <label> phone number</label>
                                    <input type ="text" name="first name" className="form-control"/>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group mb-3">
                                    <label> email address </label>
                                    <input type ="text" name="first name" className="form-control"/>
                                </div>
                            </div>

                            <div className="col-md-15">
                                <div className="form-group mb-3">
                                    <label> address line 1</label>
                                    <input type ="text" name="first name" className="form-control"/>
                                </div>
                            </div>

                            <div className="col-md-15">
                                <div className="form-group mb-3">
                                    <label> address line 2</label>
                                    <input type ="text" name="first name" className="form-control"/>
                                </div>
                            </div>

                            <div className="col-md-10">
                                <div className="form-group mb-3">
                                    <label> State</label>
                                    <input type ="text" name="first name" className="form-control"/>
                                </div>
                            </div>

                            <div className="col-md-10">
                                <div className="form-group mb-3">
                                    <label> pin code</label>
                                    <input type ="text" name="first name" className="form-control"/>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group mb-3">
                                    <button type ="button" name="btn-btn-primary">Place order</button>
                                </div>
                            </div>
                        
                        
                        </div>
                    </div>
                </div>

                <div className="col-md-5">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th width="50%">Product</th>
                                <th>Price</th>
                                <th>quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(  (item,id)=>{
                            totalCartPrice += item.product.selling_price *item.product_qty;
                            return(
                            <tr key={(id)}>
                             <td></td>
                             <td>200</td>
                             <td>2</td>
                             <td>400</td>
                            </tr>
                            )
                            })}
                            <tr>
                                <td colSpan="2" className="text-end">Grand Total</td>
                                <td colspan="2" className="text-end">(totalCartPrice)</td>
                            </tr>
                        </tbody>
                    </table>
                 
                </div>
            </div>
        </div>
    </div>
   </div>
 </div>
 </div>
);
}
export default Checkout;
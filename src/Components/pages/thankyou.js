import React from 'react'; 
import './style.css';
class Index extends React.Component{
    render(){
        return(
        <div>
        <div class="thankyou-page">

    <div class="_header">
    
     <h1>Thank You!</h1>
    </div>
    <div class="_body">
        <div class="_box">
            <h2>
                <strong>Please check your email</strong> for further instructions on how to complete your account setup.
            </h2>
            <p>
                Thanks a bunch for filling that out. It means a lot to us, just like you do! We really appreciate you giving us a moment of your time today. Thanks for being you.
            </p>
        </div>
    </div>
    <div class="_footer">
        <p>Having trouble? <a href="">Contact us</a> </p>
        <a class="btn" href="">Back to homepage</a>
    </div>
</div>
        </div>
        );
    }
}
    export default Index;
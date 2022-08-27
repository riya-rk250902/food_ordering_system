import React from 'react';
import "./newsletter.css";
export default function Newsletter() {
  return (
    <div>
      <div class="container">
            <h2>Our Newsletter</h2>
            <form>
                <div class="inputBox">
                    <input type="text" required="required"/>
                    <span>full name</span>
                </div>
                <div class="inputBox">
                    <input type="email" required="required"/>
                    <span>Email address</span>
                </div>
                <div class="inputBox">
                    <input type="submit" value="Subscribe"/>
                </div>
            </form>
        </div>
    </div>
  )
};

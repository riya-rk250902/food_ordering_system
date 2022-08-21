import React from 'react';
import "./newsletter.css";
export default function Newsletter() {
  return (
    <div class="newsletter-from">
      <h2>our newsletter</h2>
      <form action>
          <input type="email" class="email-input" placeholder= "enter your email"/>
        <div type="submit" class="btn" value="subscribe"/>
      </form>
      </div>
  )
};

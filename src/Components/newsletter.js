import React from 'react';
export default function Newsletter() {
  return (
    <div class="container">
    <h2>Join the newsletter</h2>
    <h3>Subscribe to get your notification content</h3>
    <form>
    <div class="inputbox">
      <input type="text"
       required="required"
       />
      <span full name/>
    </div>
    <div class="inputbox">
      <input type="text" required="required"/>
      <span>Email</span>
    </div>
    <div class="inputbox">
      <input type="submit" value="Subscribe"/>
      <span>Email</span>
    </div>
    </form>
     
    
    
    </div>
  )
}

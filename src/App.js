// in pdetails ':' is variable field we have to access it
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/login";
import Signup from "./Components/signup";
import Home from "./Components/home";
import Pdetails from "./Components/pdetails";
import Products from "./Components/products";
import Cart from "./Components/cart";
import Checkout from "./Components/checkout";
function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <Routes>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signup" element={<Signup />}></Route>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/food/:id" element={<Pdetails />}></Route>
            <Route exact path="/products" element={<Products />}></Route>
            <Route exact path="/cart" element={<Cart />}></Route>
            <Route exact path ="/checkout" element={<Checkout />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;


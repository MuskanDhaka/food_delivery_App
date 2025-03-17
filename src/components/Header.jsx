import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useSelector } from "react-redux";
export const Header = () => {
  const [btnName, setBtnName] = useState(["Login"]);
  //subscribing to the store using the selector 
  const cartItems = useSelector((store)=> {
     return store.cart.items
  })
  console.log("Cart items : ",cartItems);
  
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li><Link to="cart">Cart ({cartItems.length} items )</Link> </li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Logout" ? setBtnName("Login") : setBtnName("Logout");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

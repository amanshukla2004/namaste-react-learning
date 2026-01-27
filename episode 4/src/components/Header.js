import { LOGO_URL } from "../utility/commons";
import { useState } from "react";

const Header = () => {
  // const btnName = "Login";
  const [btnName, setbtnName] = useState('Login');
  //
  //
  return (
    // console.log("Header");
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav_items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login" onClick={() => {
            // setbtnName("LogOut"); Right now, you’re always setting "LogOut", so it can never come back to "Login".
            // toggle logic
            setbtnName(prev => prev === 'Login'? 'Logout !!!!!' : 'Login');
          }}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  ); // for the login button , i want that when i click it changes from login <--> logout
};

export default Header;

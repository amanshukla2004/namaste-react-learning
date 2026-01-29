import { LOGO_URL } from "../utility/commons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // const btnName = "Login";
  const [btnName, setbtnName] = useState("Login");
  console.log("headr rendered");
  useEffect(() => {
    console.log("useEffect called");
  }, []);
  //
  //
  return (
    // console.log("Header");
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={LOGO_URL} />
        </Link>
      </div>
      <div className="nav_items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>Cart</li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              // setbtnName("LogOut"); Right now, you’re always setting "LogOut", so it can never come back to "Login".
              // toggle logic
              setbtnName((prev) =>
                prev === "Login" ? "Logout !!!!!" : "Login",
              );
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  ); // for the login button , i want that when i click it changes from login <--> logout
};

export default Header;

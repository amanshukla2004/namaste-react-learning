import { LOGO_URL } from "../utility/commons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utility/useOnlineStatus";

const Header = () => {
  // const btnName = "Login";
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  console.log("headr rendered");
  useEffect(() => {
    console.log("useEffect called");
  }, []);
  //
  //
  return (
    // console.log("Header");
    <div className="header flex justify-between shadow-2xl">
      <div className="logo-container">
        <Link to="/">
          <img className="logo w-56" src={LOGO_URL} />
        </Link>
      </div>
      <div className="nav_items flex items-center">
        <ul className="flex p-2  justify-between ">
          <li className="px-5">online Status {onlineStatus ? "ok" : "problem"}</li>
          <li className="px-5" >
            <Link to="/">Home</Link>
          </li>

          <li className="px-5">Cart</li>
          <li className="px-5">
            <a href="/grocery">Grocery</a>
          </li>
          <li className="px-5  " >
            <a href="/about">About Us</a>
          </li>
          <li className="px-5">
            <Link to="/contact">Contact Us</Link>
          </li>
          <button
            className="login px-5"
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

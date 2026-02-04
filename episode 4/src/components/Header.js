// import { LOGO_URL } from "../utility/commons";
// import { useEffect, useState , useContext} from "react";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utility/useOnlineStatus";
// import UserContext from "../utility/UserContext";

// const Header = () => {
//   // const btnName = "Login";
//   const [btnName, setbtnName] = useState("Login");
//   const onlineStatus = useOnlineStatus();

//   const {loggedInUser} = useContext(UserContext);

//   console.log("headr rendered");
//   useEffect(() => {
//     console.log("useEffect called");
//   }, []);
//   //
//   //
//   return (
//     // console.log("Header");
//     /* Floating Glass Header with sticky positioning */
//     <div className="header sticky top-0 z-[100] flex justify-between items-center px-8 py-4 backdrop-blur-lg bg-slate-950/70 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all duration-300">

//       <div className="logo-container group">
//         <Link to="/">
//           <img
//             className="logo w-40 md:w-48 filter brightness-110 contrast-125 transition-transform duration-500 group-hover:scale-105"
//             src={LOGO_URL}
//           />
//         </Link>
//       </div>

//       <div className="nav_items flex items-center">
//         <ul className="flex items-center gap-2 font-medium text-slate-300">

//           {/* Online Status Indicator */}
//           <li className="px-4 py-2 flex items-center gap-2 bg-white/5 rounded-full border border-white/5 text-sm">
//             <span className={`h-2 w-2 rounded-full animate-pulse ${onlineStatus ? "bg-emerald-400 shadow-[0_0_10px_#34d399]" : "bg-red-500 shadow-[0_0_10px_#ef4444]"}`}></span>
//             <span className="opacity-80">Status: {onlineStatus ? "ok" : "problem"}</span>
//           </li>

//           <li className="px-5 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all cursor-pointer">
//             <Link to="/">Home</Link>
//           </li>

//           <li className="px-5 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all cursor-pointer">Cart</li>

//           <li className="px-5 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all cursor-pointer">
//             <a href="/grocery">Grocery</a>
//           </li>

//           <li className="px-5 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all cursor-pointer">
//             <a href="/about">About Us</a>
//           </li>

//           <li className="px-5 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all cursor-pointer">
//             <Link to="/contact">Contact Us</Link>
//           </li>

//           <li className=" ml-4 px-8 py-2.5">
//               {loggedInUser}
//           </li>

//           {/* Luxury Action Button */}
//           <button
//             className="login ml-4 px-8 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
//             onClick={() => {
//               // setbtnName("LogOut"); Right now, you’re always setting "LogOut", so it can never come back to "Login".
//               // toggle logic
//               setbtnName((prev) =>
//                 prev === "Login" ? "Logout !!!!!" : "Login",
//               );
//             }}
//           >
//             {btnName}
//           </button>
//         </ul>
//       </div>
//     </div>
//   ); // for the login button , i want that when i click it changes from login <--> logout
// };

// export default Header;

import { LOGO_URL } from "../utility/commons";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utility/useOnlineStatus";
import UserContext from "../utility/UserContext";
import { useSelector } from "react-redux";
import { addItem } from "../utility/cartSlice";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  // Note: useEffect with empty dependency array runs only once after initial render
  useEffect(() => {
    console.log("Header useEffect called");
  }, []);

  // selector - redux 
  // subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header sticky top-0 z-[100] flex justify-between items-center px-8 py-4 backdrop-blur-lg bg-slate-950/70 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      {/* Logo Section */}
      <div className="logo-container group">
        <Link to="/">
          <img
            className="logo w-40 md:w-48 filter brightness-110 contrast-125 transition-transform duration-500 group-hover:scale-105"
            src={LOGO_URL}
            alt="Logo"
          />
        </Link>
      </div>

      {/* Navigation Items */}
      <div className="nav_items flex items-center">
        <ul className="flex items-center gap-2 font-medium text-slate-300">
          {/* Online Status */}
          <li className="px-4 py-2 flex items-center gap-2 bg-white/5 rounded-full border border-white/5 text-sm">
            <span
              className={`h-2 w-2 rounded-full animate-pulse ${onlineStatus ? "bg-emerald-400 shadow-[0_0_10px_#34d399]" : "bg-red-500 shadow-[0_0_10px_#ef4444]"}`}
            ></span>
            <span className="opacity-80">
              Status: {onlineStatus ? "Online" : "Offline"}
            </span>
          </li>

          {/* Navigation Links - Always use Link instead of <a> for internal routing */}
          <li className="px-5 hover:text-white transition-all cursor-pointer">
            <Link to="/">Home</Link>
          </li>

          <li className="px-5 hover:text-white transition-all cursor-pointer">
            <Link to="/grocery">Grocery</Link>
          </li>

          <li className="px-5 hover:text-white transition-all cursor-pointer">
            <Link to="/about">About Us</Link>
          </li>

          <li className="px-5 hover:text-white transition-all cursor-pointer">
            <Link to="/contact">Contact Us</Link>
          </li>

          {/* selector  */}
          <li className="px-5 hover:text-white transition-all cursor-pointer">
            Cart <span>{cartItems.length}</span>
          </li>

          {/* User Display */}
          <li className="ml-4 px-4 py-2 bg-indigo-500/10 text-indigo-400 rounded-lg font-bold border border-indigo-500/20">
            {loggedInUser}
          </li>

          {/* Login/Logout Toggle */}
          <button
            className="login ml-4 px-8 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
            onClick={() => {
              setbtnName((prev) => (prev === "Login" ? "Logout" : "Login"));
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;







// --------------------------

const handleAddItem = () => {
  // dispatch an action

  dispatch(addItem("pizza"));

}

<button onClick={handleAddItem}></button>
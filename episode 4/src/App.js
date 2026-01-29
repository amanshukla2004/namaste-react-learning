import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Body2fromAi from "./components/Body2fromAi";
import Body3 from "./components/Body3";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";


import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

// import { createBrowserRouter } from "react-router-dom";
import { createBrowserRouter, RouterProvider ,Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Grocery from "./components/Grocery";
import Shimmer from "./components/Shimmer";


const Grocery = lazy( ()=> import("./components/Grocery") );

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      {/* <Body /> */}
      {/* <Body2fromAi /> */}
      {/* <Body3/> */}  
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body2fromAi /> },

      { path: "/about", element: <AboutUs /> },
 
      { path: "/contact", element: <Contact /> },

       { path: "/grocery", element: <Suspense fallback={<h1>Loading...</h1>} ><Grocery /></Suspense> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
// body3 has toggle filter feature

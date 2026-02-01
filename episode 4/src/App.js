// // import React, { lazy, Suspense, useEffect } from "react";
// // import ReactDOM from "react-dom/client";
// // import Header from "./components/Header";
// // import Body from "./components/Body";
// // import Body2fromAi from "./components/Body2fromAi";
// // import Body3 from "./components/Body3";
// // import AboutUs from "./components/AboutUs";
// // import Contact from "./components/Contact";

// // import Error from "./components/Error";
// // import RestaurantMenu from "./components/RestaurantMenu";

// // // import { createBrowserRouter } from "react-router-dom";
// // import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// // import RestaurantMenu from "./components/RestaurantMenu";
// // import Grocery from "./components/Grocery";
// // import Shimmer from "./components/Shimmer";

// // import UserContext from "./utility/UserContext";

// // const Grocery = lazy(() => import("./components/Grocery"));



// // const AppLayout = () => {

// //   // ep : 11
// //   const [userName, setUserName] = useState();

// //   // authentication 
// //   useEffect(() => {
// //     // make a API call and send the username and password

// //     const data = {
// //       name :"aman shukla",
// //     };
// //     setUserName(data.name);

// //   }, []);
// //   return (
// //     <UserContext.Provider value={{loggedInUser: userName , setUserName }}>
// //       <div className="app">
// //         <Header />
// //         <Outlet />
// //         {/* <Body /> */}
// //         {/* <Body2fromAi /> */}
// //         {/* <Body3/> */}
// //       </div>
// //     </UserContext.Provider>
// //   );
// // };

// // const appRouter = createBrowserRouter([
// //   {
// //     path: "/",
// //     element: <AppLayout />,
// //     children: [
// //       { path: "/", element: <Body2fromAi /> },

// //       { path: "/about", element: <AboutUs /> },

// //       { path: "/contact", element: <Contact /> },

// //       {
// //         path: "/grocery",
// //         element: (
// //           <Suspense fallback={<h1>Loading...</h1>}>
// //             <Grocery />
// //           </Suspense>
// //         ),
// //       },

// //       { path: "/restaurants/:resId", element: <RestaurantMenu /> },
// //     ],
// //     errorElement: <Error />,
// //   },
// // ]);

// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(<AppLayout />);
// // root.render(<RouterProvider router={appRouter} />);
// // // body3 has toggle filter feature



// import React, { lazy, Suspense, useEffect, useState } from "react";
// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// // Components
// import Header from "./components/Header";
// import Body2fromAi from "./components/Body2fromAi";
// import AboutUs from "./components/AboutUs";
// import Contact from "./components/Contact";
// import Error from "./components/Error";
// import RestaurantMenu from "./components/RestaurantMenu";

// // Context & Utilities
// import UserContext from "./utility/UserContext";

// // Lazy Loading
// const Grocery = lazy(() => import("./components/Grocery"));

// const AppLayout = () => {
//   const [userName, setUserName] = useState();

//   // Authentication Mock
//   useEffect(() => {
//     // Simulated API call
//     const data = {
//       name: "Aman Shukla",
//     };
//     setUserName(data.name);
//   }, []);

//   return (
//     <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
//       <div className="app">
//         <Header />
//         <Outlet />
//       </div>
//     </UserContext.Provider>
//   );
// };

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />,
//     children: [
//       { path: "/", element: <Body2fromAi /> },
//       { path: "/about", element: <AboutUs /> },
//       { path: "/contact", element: <Contact /> },
//       {
//         path: "/grocery",
//         element: (
//           <Suspense fallback={<h1>Loading...</h1>}>
//             <Grocery />
//           </Suspense>
//         ),
//       },
//       { path: "/restaurants/:resId", element: <RestaurantMenu /> },
//     ],
//     errorElement: <Error />,
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// // Only render the RouterProvider; AppLayout is already the root element of the router
// root.render(<RouterProvider router={appRouter} />);



import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Components
import Header from "./components/Header";
import Body2fromAi from "./components/Body2fromAi";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

// Context & Utilities
import UserContext from "./utility/UserContext";

// Lazy Loading
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  // Authentication Mock
  useEffect(() => {
    // Simulated API call
    const data = {
      name: "Aman Shukla",
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
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
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// Only render the RouterProvider; AppLayout is already the root element of the router
root.render(<RouterProvider router={appRouter} />);
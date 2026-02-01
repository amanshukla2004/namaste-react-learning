// // import { useEffect, useState } from "react";

// // const useRestaurantMenu = (resId) => {
// //   const [resInfo, setResInfo] = useState(null);
  
// //   // fetch data
// //   useEffect(() => {
// //     fetchMenu();
    
// //   }, []); // why empty array

// //   const fetchMenu = async () => {
// //     const data1 = await fetch(
// //       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5821195&lng=77.3266991&restaurantId={resId}",
// //     );
// //     const data = await fetch(
// //       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5821195&lng=77.3266991&restaurantId="+{resId}+"&catalog_qa=undefined&submitAction=ENTER",
// //     );
// //     const json = await data.json();
// //     console.log(json);

// //     setResInfo(json.data);
// // }

// //   return resInfo;
// // };

// // export default useRestaurantMenu;
// // code from couse ends here..........................


// // import { useEffect, useState } from "react";

// // const useRestaurantMenu = (resId) => {
// //   const [resInfo, setResInfo] = useState(null);

// //   useEffect(() => {
// //     fetchMenu();
// //     // Removed the "s;" that was causing the ReferenceError
// //   }, []); 

// //   const fetchMenu = async () => {
// //     try {
// //       // FIX: Use a template literal (backticks) or clean concatenation
// //       // Also used a CORS proxy because Swiggy often blocks localhost directly
// //       const data = await fetch(
// //         `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5821195&lng=77.3266991&restaurantId=${resId}`
// //       );

// //       // Check if the response is actually valid JSON
// //       if (!data.ok) throw new Error("Failed to fetch menu");

// //       const json = await data.json();
      
// //       setResInfo(json.data);
// //     } catch (error) {
// //       console.error("Error fetching menu:", error);
// //     }
// //   };

// //   return resInfo;
// // };

// // export default useRestaurantMenu;
// // .........................................code from gemini


// import { useEffect, useState } from "react";

// const useRestaurantMenu = (resId) => {
//   const [resInfo, setResInfo] = useState(null);

//   useEffect(() => {
//     fetchMenu();
//   }, [resId]); // Added resId here so it fetches new data if the ID changes

//   const fetchMenu = async () => {
//     try {
//       // We add a CORS proxy prefix to the URL
//       const CORS_PROXY = "https://corsproxy.io/?";
//       const MENU_API = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5821195&lng=77.3266991&restaurantId=";

//       const response = await fetch(CORS_PROXY + encodeURIComponent(MENU_API + resId));
      
//       if (!response.ok) throw new Error("Network response was not ok");

//       const json = await response.json();
//       setResInfo(json.data);
//     } catch (error) {
//       console.error("Error fetching menu:", error);
//     }
//   };

//   return resInfo;
// };

// export default useRestaurantMenu;
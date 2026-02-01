// import RestaurantCard2 from "./RestaurantCard2";
// import { useState, useEffect ,useContext} from "react";
// import Shimmer from "./Shimmer";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utility/useOnlineStatus";
// import { withPromotedLabel } from "./RestaurantCard2";
// import UserContext from "../utility/UserContext";
// const Body = () => {
//   const [listOfRestraurant, setListOfRestraurant] = useState([]);
//   const [filteredRes, setFilteredRes] = useState([]);

//   // for search box
//   const [searchText, setSearchText] = useState("");

//   // ep : 11
//   const RestaurantcardPromoted = withPromotedLabel(RestaurantCard2);
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       // 1. Fetch data from the live API
//       const data = await fetch(
//         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5821195&lng=77.3266991&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
//       );

//       const json = await data.json();

//       // 2. SMART SEARCH: Find the card that has the restaurant list
//       // In your JSON, this automatically finds cards[1]
//       const restaurantCard = json?.data?.cards?.find(
//         (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
//       );

//       // 3. Extract the array of 20 restaurants
//       const restaurants =
//         restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;
//       //   setTimeout(() => {
//       //   setListOfRestraurant(restaurants);
//       // }, 1000);
//       // later remove this settimeout and
//       // just put setListOfRestraurant(restaurants);
//       console.log(restaurants);
//       setListOfRestraurant(restaurants);
//       setFilteredRes(restaurants);
//     } catch (error) {
//       console.error(
//         "API link mei kuch toh ho gaya hai  Error fetching data:",
//         error,
//       );
//     }
//   };

//   const onlineStatus = useOnlineStatus();
//   if (onlineStatus === false) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-10">
//         <div className="text-6xl mb-4">📶</div>
//         <h1 className="text-2xl font-bold text-slate-300">
//           {" "}
//           Looks like you are offline , pls check your internet connection
//         </h1>
//       </div>
//     );
//   }
//   const {setUserName, loggedInUser} = useContext(UserContext);

//   // this is known as condition rendering
//   if (listOfRestraurant.length === 0) {
//     //return <h1>Loading ....</h1>
//     return <Shimmer />;
//   }
//   // here you can use the ternanrt operator
//   // like return  (listOfRestraurant.length === 0) ? <Shimmer /> : (<div...></>);
//   return (
//     <div className="body min-h-screen bg-[#020617] text-slate-200 px-4 md:px-12 py-8">
//       {/* Search & Filter Section: Glassmorphism bar */}
//       <div className="FILTER sticky top-4 z-10 flex flex-wrap items-center justify-between gap-4 p-6 mb-12 backdrop-blur-md bg-slate-900/50 border border-white/10 rounded-3xl shadow-2xl">
//         <div className="search flex items-center gap-3">
//           <input
//             type="text"
//             placeholder="Search your cravings..."
//             className="search-box px-5 py-2.5 bg-slate-800/80 border border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all w-64 md:w-80 text-white placeholder:text-slate-500"
//             value={searchText}
//             onChange={(e) => {
//               setSearchText(e.target.value);
//             }}
//           />
//           <button
//             className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-2xl shadow-lg shadow-indigo-600/20 transition-all active:scale-95"
//             onClick={() => {
//               // filter the restraurrant cards and update the ui
//               // search text
//               const filteredres = listOfRestraurant.filter((res) =>
//                 res.info.name.toLowerCase().includes(searchText.toLowerCase()),
//               );
//               setFilteredRes(filteredres);
//             }}
//           >
//             Search
//           </button>

//           <button className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-2xl shadow-lg shadow-indigo-600/20 transition-all active:scale-95">
//               <label>User  Name</label>
//               <input className="border border-black p-2 " value={loggedInUser} onChange={(e) => {setUserName(e.target.value)}}> </input>
//           </button>
//         </div>

//         <button
//           className="filter-btn flex items-center gap-2 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-200 font-medium rounded-2xl transition-all shadow-md active:scale-95 hover:border-indigo-400/50"
//           onClick={() => {
//             // need to write a filter logic over here
//             const filteredList = listOfRestraurant.filter(
//               (res) => res.info.avgRating > 4.4,
//             );

//             setFilteredRes((prev) =>
//               prev.length !== filteredList ? listOfRestraurant : filteredList,
//             );
//             console.log(listOfRestraurant); // data is filtered but the ui is mot updated
//             console.log(listOfRestraurant.length);
//           }}
//         >
//           <span className="text-yellow-400">★</span> Top Rated Restaurants
//         </button>
//       </div>

//       {/* Restaurant Grid: Responsive and elegant spacing */}
//       <div className="res-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//         {filteredRes?.map((restr) => (
//           /* key must be the unique ID from the API */
//           <Link
//             key={restr.info.id}
//             to={"/restaurants/" + restr.info.id}
//             className="transform transition-transform duration-300 hover:scale-[1.02] hover:z-20"
//           >
//             {/* if the restraurant is promotd then add a promoted label to the card   */}
//             {/* {restr.data.promoted? <RestaurantcardPromoted resObj={restr}/>: <RestaurantCard2 resObj={restr}/>} */}
//             <RestaurantCard2 resObj={restr} />
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;

// -------------------------------------
import RestaurantCard2, { withPromotedLabel } from "./RestaurantCard2";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utility/useOnlineStatus";
import UserContext from "../utility/UserContext";

const Body = () => {
  const [listOfRestraurant, setListOfRestraurant] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantcardPromoted = withPromotedLabel(RestaurantCard2);
  const { setUserName, loggedInUser } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5821195&lng=77.3266991&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      // Smart Search for restaurant data
      const restaurantCard = json?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );

      const restaurants = restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setListOfRestraurant(restaurants);
      setFilteredRes(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Online/Offline check
  if (!onlineStatus) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-10">
        <div className="text-6xl mb-4">📶</div>
        <h1 className="text-2xl font-bold text-slate-300">
          Looks like you are offline, please check your internet connection.
        </h1>
      </div>
    );
  }

  // Shimmer UI (Conditional Rendering)
  if (listOfRestraurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body min-h-screen bg-[#020617] text-slate-200 px-4 md:px-12 py-8">
      {/* Search & Filter Section */}
      <div className="FILTER sticky top-4 z-10 flex flex-wrap items-center justify-between gap-4 p-6 mb-12 backdrop-blur-md bg-slate-900/50 border border-white/10 rounded-3xl shadow-2xl">
        <div className="search flex items-center gap-3">
          <input
            type="text"
            placeholder="Search your cravings..."
            className="search-box px-5 py-2.5 bg-slate-800/80 border border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all w-64 md:w-80 text-white placeholder:text-slate-500"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-2xl shadow-lg shadow-indigo-600/20 transition-all active:scale-95"
            onClick={() => {
              const filtered = listOfRestraurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRes(filtered);
            }}
          >
            Search
          </button>
        </div>

        {/* User Context Modifier */}
        <div className="flex items-center gap-3 px-4 py-2 bg-slate-800/50 rounded-2xl border border-slate-700">
          <label className="text-sm font-medium text-slate-400">User Name:</label>
          <input
            className="bg-transparent border-b border-slate-600 focus:border-indigo-500 outline-none px-2 text-indigo-400"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <button
          className="filter-btn flex items-center gap-2 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-200 font-medium rounded-2xl transition-all shadow-md active:scale-95 hover:border-indigo-400/50"
          onClick={() => {
            const highRated = listOfRestraurant.filter((res) => res.info.avgRating > 4.4);
            setFilteredRes(highRated);
          }}
        >
          <span className="text-yellow-400">★</span> Top Rated
        </button>
      </div>

      {/* Restaurant Grid */}
      <div className="res-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredRes.map((restr) => (
          <Link
            key={restr.info.id}
            to={"/restaurants/" + restr.info.id}
            className="transform transition-transform duration-300 hover:scale-[1.02]"
          >
            {/* Toggle Promoted Label based on API data if available */}
            {restr.info.promoted ? (
              <RestaurantcardPromoted resObj={restr} />
            ) : (
              <RestaurantCard2 resObj={restr} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

import RestaurantCard2 from "./RestaurantCard2";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  const [listOfRestraurant, setListOfRestraurant] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);

  // for search box
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // 1. Fetch data from the live API
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5821195&lng=77.3266991&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      );

      const json = await data.json();

      // 2. SMART SEARCH: Find the card that has the restaurant list
      // In your JSON, this automatically finds cards[1]
      const restaurantCard = json?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
      );

      // 3. Extract the array of 20 restaurants
      const restaurants =
        restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      //   setTimeout(() => {
      //   setListOfRestraurant(restaurants);
      // }, 1000);
      // later remove this settimeout and
      // just put setListOfRestraurant(restaurants);
      setListOfRestraurant(restaurants);
      setFilteredRes(restaurants);
    } catch (error) {
      console.error(
        "API link mei kuch toh ho gaya hai  Error fetching data:",
        error,
      );
    }
  };
  // this is known as condition rendering
  if (listOfRestraurant.length === 0) {
    //return <h1>Loading ....</h1>
    return <Shimmer />;
  }
  // here you can use the ternanrt operator
  // like return  (listOfRestraurant.length === 0) ? <Shimmer /> : (<div...></>);
  return (
    <div className="body">
      <div className="FILTER">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // filter the restraurrant cards and update the ui
              // search text
              const filteredres = listOfRestraurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilteredRes(filteredres);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            // need to write a filter logic over here
            const filteredList = listOfRestraurant.filter(
              (res) => res.info.avgRating > 4.4,
            );

            setFilteredRes((prev) =>
              prev.length !== filteredList ? listOfRestraurant : filteredList,
            );
            console.log(listOfRestraurant); // data is filtered but the ui is mot updated
            console.log(listOfRestraurant.length);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRes?.map((restr) => (
          /* key must be the unique ID from the API */
          <Link key={restr.info.id} to={"/restaurants/" + restr.info.id}>
            <RestaurantCard2 resObj={restr} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

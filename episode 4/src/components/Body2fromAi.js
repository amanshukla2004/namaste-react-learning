import RestaurantCard2 from "./RestaurantCard2";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listOfRestraurant, setListOfRestraurant] = useState([]);

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
      setTimeout(() => {
        setListOfRestraurant(restaurants);
      }, 1000);
      // later remove this settimeout and 
      // just put setListOfRestraurant(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
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
      <div className="res-container">
        {listOfRestraurant?.map((restr) => (
          /* key must be the unique ID from the API */
          <RestaurantCard2 key={restr.info.id} resObj={restr} />
        ))}
      </div>
    </div>
  );
};

export default Body;

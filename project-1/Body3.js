import RestaurantCard2 from "../episode 4/src/components/RestaurantCard2";
import { useState, useEffect } from "react";
import Shimmer from "../episode 4/src/components/Shimmer";

const Body3 = () => {
  // ❌ normal variable does NOT work for UI data
  // const listt = null;

  // ✅ this will store the ORIGINAL list (never modify this)
  const [listOfRestraurant, setListOfRestraurant] = useState([]);

  // ✅ this will store the FILTERED list (this is what UI renders)
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  // Toggle Filter (Correct & Minimal)
  const [showTopRated, setShowTopRated] = useState(false);

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

      // ❌ this will not trigger re-render
      // listt = restaurants;

      // ✅ store original data
      setListOfRestraurant(restaurants);

      // ✅ initialize filtered list with FULL data
      // so cards render even before clicking filter button
      setFilteredRestaurant(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // this is known as conditional rendering
  if (listOfRestraurant.length === 0) {
    // return <h1>Loading ....</h1>
    return <Shimmer />;
  }

  // here you can use the ternary operator
  // like return (listOfRestraurant.length === 0) ? <Shimmer /> : (<div...></>);

  return (
    <div className="body">
      <div className="FILTER">
        <button
          onClick={() => {
            if (showTopRated) {
              // show all restaurants
              setFilteredRestaurant(listOfRestraurant);
            } else {
              // show only top rated restaurants
              const filtered = listOfRestraurant.filter(
                (res) => res.info.avgRating > 4.4,
              );
              setFilteredRestaurant(filtered);
            }

            // toggle the state
            setShowTopRated(!showTopRated);
          }}
        >
          {showTopRated ? "Show All" : "Top Rated Restaurants"}
        </button>
      </div>

      <div className="res-container">
        {/* ✅ always render the FILTERED list */}
        {filteredRestaurant?.map((restr) => (
          /* key must be the unique ID from the API */
          <RestaurantCard2 key={restr.info.id} resObj={restr} />
        ))}
      </div>
    </div>
  );
};

export default Body3;

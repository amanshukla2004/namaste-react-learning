import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utility/mockData";

import { useState, useEffect } from "react";

const Body = () => {
  // local State Variable -> super powerful variable

  const [listOfRestraurant, setListOfRestraurant] = useState(restaurantList);

  // hook is a normal javascript fn

  useEffect(() => {
    setTimeout(fetchdata(), 5000);
    //fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5821195&lng=77.3266991&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    console.log(json);
    //setListOfRestraurant(json.data.card[2].data.data.cards);
    // Note: We use cards[1] because cards[0] in your data is "What's on your mind"
    const restaurantCard = jsonResponse.data.cards[1];

    // 2. Drill down to the actual list of restaurants
    const restaurants =
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestraurant(restaurants);
  };

  //let listOfRestraurant = restaurantList;
  return (
    <div className="body">
      <div className="FILTER">
        <button
          className="filter-btn"
          onClick={() => {
            // need to write a filter logic over here
            const filteredList = listOfRestraurant.filter(
              (res) => res.rating > 4.4,
            );

            setListOfRestraurant(filteredList);
            console.log(listOfRestraurant); // data is filtered but the ui is mot updated
            console.log(listOfRestraurant.length);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {listOfRestraurant.map((restr, index) => (
          <RestaurantCard key={restr.id} resObj={restr} />
        ))}
      </div>
    </div>
  );
};

export default Body;

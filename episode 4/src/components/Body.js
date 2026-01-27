import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utility/mockData";

import { useState } from "react";

const Body = () => {
  // local State Variable -> super powerful variable

  const [listOfRestraurant, setListOfRestraurant] = useState(restaurantList);

  // hook is a normal javascript fn

  let listOfRestraurantjs = restaurantList;
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

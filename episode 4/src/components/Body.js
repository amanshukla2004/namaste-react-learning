import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utility/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="FILTER">
        
      </div>

      <div className="res-con  tainer">
        {restaurantList.map((restr, index) => (
          <RestaurantCard key={restr.id} resObj={restr} />
        ))}
      </div>
    </div>
  );
};

export default Body;

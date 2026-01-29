
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utility/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId); // how to get data is abstracted

  if (resInfo == null) {
    return <Shimmer />;
  }

  //const {name, cuisines, costforTwoMessage} = resInfo.data.cards[2].card.card.info;

  return (
    <div className="menu">
      <h1>Name of the Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;

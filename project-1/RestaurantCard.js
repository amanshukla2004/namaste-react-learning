// restraurt card - we will make a component card - we want to reuse it
// props is a object
import { FALLBACK_IMG } from "../episode 4/src/utility/commons";
const RestaurantCard = ({ resObj }) => {
  const { imgsrc, resName, cuisine, rating, duration } = resObj;
  return (
    <div className="res-card">
      <img
        alt="abc"
        src={imgsrc}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = FALLBACK_IMG;
        }}
      />
      <h3> {resName}</h3>
      <h4> {cuisine}</h4>
      <h4> {rating} stars</h4>
      <h4> duration : {duration}</h4>
    </div>
  );
};

export default RestaurantCard;

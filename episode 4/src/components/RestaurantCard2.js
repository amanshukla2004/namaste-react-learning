import { FALLBACK_IMG } from "../utility/commons";

// The base URL for all Swiggy images
const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const RestaurantCard2 = (props) => {
  const { resObj } = props;

  // Destructure the data exactly as it appears in the JSON info object
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    sla
  } = resObj?.info; 

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt={name}
        src={CDN_URL + cloudinaryImageId}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = FALLBACK_IMG;
        }}
      />
      <h3>{name}</h3>
      {/* Cuisines is an array in the JSON, join it with commas */}
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      {/* Delivery time is nested inside the 'sla' object */}
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export default RestaurantCard2;
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  
  // fetch data
  useEffect(() => {
    fetchMenu();
    s;
  }, []); // why empty array

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5821195&lng=77.3266991&restaurantId={resId}",
    );
    const json = await data.json();
    console.log(json);

    setResInfo(json.data);
}

  return resInfo;
};

export default useRestaurantMenu;

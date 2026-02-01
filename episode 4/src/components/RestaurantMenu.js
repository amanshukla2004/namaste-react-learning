
// import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";
// import useRestaurantMenu from "../utility/useRestaurantMenu";
// import RestaurantCategories from "./RestaurantCategories";

// const RestaurantMenu = () => {
//   const { resId } = useParams();
  
//   const resInfo = useRestaurantMenu(resId); // how to get data is abstracted

//   if (resInfo === null) {
//     return <Shimmer />;
//   }

//   const {name, cuisines, costforTwoMessage} = resInfo.data.cards[2].card.card.info;
//   const { itemCards } =
//   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

//   //console.log(itemCards);
//   const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.filter(c=>c.card?.card?.["@type"] ==="something.........ItemCategory");

//   return (
//     <div className="menu">
//       <h1>{name}</h1>
//       <p>{cuisines.join(", ")} - {costforTwoMessage}</p>
//       <h2>Menu</h2>
//       {/* <ul>
//         {itemCards.map( (item) => (
//           <li key = {itemCards.card.info.id}>
//             {itemCards.card.info.name} - {"Rs"}
//             {itemCards.card.info.price / 100 || itemCards.card.info.defaultPrice/ 100}
//           </li>
//         ))}
//         </ul> */}

//         {/* categoriesaccordions */}
//         {categories.map((category) => <RestaurantCategories data={category.card.card}/> )}
//     </div>
//   );
// };

// export default RestaurantMenu;


// code from batch

// import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";
// import useRestaurantMenu from "../utility/useRestaurantMenu";
// import RestaurantCategories from "./RestaurantCategories";

// const RestaurantMenu = () => {
//   const { resId } = useParams();
  
//   // Custom hook to fetch data
//   const resInfo = useRestaurantMenu(resId);

//   if (resInfo === null) return <Shimmer />;

//   // Destructure Header Info (using optional chaining to prevent crashes)
//   const headerInfo = resInfo?.cards?.find(x => x?.card?.card?.info)?.card?.card?.info;
  
//   const { name, cuisines, costForTwoMessage } = headerInfo || {};

//   // Filter for Item Categories (The "Regular" menu cards)
//   const categories = resInfo?.cards?.find(x => x.groupedCard)
//     ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
//       (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
//     );

//   return (
//     <div className="menu min-h-screen bg-[#020617] text-slate-200 py-12 px-4">
//       {/* Restaurant Header Section */}
//       <div className="text-center mb-12">
//         <h1 className="text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-slate-500">
//           {name}
//         </h1>
//         <div className="flex justify-center items-center gap-3 text-lg font-medium text-slate-400">
//           <span className="italic">{cuisines?.join(", ")}</span>
//           <span className="text-slate-600">|</span>
//           <span className="text-indigo-400">{costForTwoMessage}</span>
//         </div>
//         <div className="w-24 h-1 bg-indigo-500/30 mx-auto mt-6 rounded-full"></div>
//       </div>

//       {/* Categories Accordions */}
//       <div className="max-w-4xl mx-auto flex flex-col gap-4">
//         {categories?.map((category, index) => (
//           <RestaurantCategories 
//             // Use a unique key (index is fallback, but title is better)
//             key={category?.card?.card?.title || index} 
//             data={category?.card?.card} 
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RestaurantMenu;
 
// code from ai



// cant help with the api so using dummy 
import { useState } from "react";
import RestaurantCategories from "./RestaurantCategories";

const RestaurantMenu = () => {
  // dummy data array
  const dummyCategories = [
    { title: "Recommended", items: ["Burger", "Fries", "Coke"] },
    { title: "Main Course", items: ["Pizza", "Pasta", "Garlic Bread"] },
    { title: "Desserts", items: ["Ice Cream", "Brownie"] },
  ];

  // This state controls which accordion is open
  const [showIndex, setShowIndex] = useState(0); 

  return (
    <div className="text-center bg-[#020617] min-h-screen py-10">
      <h1 className="text-4xl font-bold text-white mb-8">Dummy Menu</h1>
      
      <div className="flex flex-col gap-4">
        {dummyCategories.map((category, index) => (
          <RestaurantCategories
            key={category.title}
            data={category}
            // If the current index matches showIndex, tell the child to show itself
            showItems={index === showIndex ? true : false}
            // We pass a function so the child can tell the parent to change the index
            setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
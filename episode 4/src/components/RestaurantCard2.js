// import { FALLBACK_IMG } from "../utility/commons";

// // The base URL for all Swiggy images
// const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

// const RestaurantCard2 = (props) => {
//   const { resObj } = props;

//   // Destructure the data exactly as it appears in the JSON info object
//   const {
//     cloudinaryImageId,
//     name,
//     avgRating,
//     cuisines,
//     sla
//   } = resObj?.info; 

//   return (
//     /* Card Container with glass effect, smooth scaling, and overflow hidden for the image */
//     <div className="res-card group relative h-full backdrop-blur-md bg-white/[0.03] border border-white/10 rounded-[2rem] overflow-hidden transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      
//       {/* Image Container with Zoom effect */}
//       <div className="relative h-48 overflow-hidden">
//         <img
//           className="res-logo w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//           alt={name}
//           src={CDN_URL + cloudinaryImageId}
//           onError={(e) => {
//             e.currentTarget.onerror = null;
//             e.currentTarget.src = FALLBACK_IMG;
//           }}
//         />
//         {/* Rating Badge Overlay */}
//         <div className="absolute top-3 right-3 flex items-center gap-1 px-3 py-1.5 backdrop-blur-md bg-black/60 rounded-full border border-white/10 text-sm font-bold">
//           <span className={`${avgRating >= 4 ? "text-emerald-400" : "text-yellow-400"}`}>★</span>
//           <span className="text-white">{avgRating}</span>
//         </div>
//       </div>

//       {/* Content Area */}
//       <div className="p-5 flex flex-col gap-2">
//         <h3 className="text-xl font-bold text-white truncate group-hover:text-indigo-400 transition-colors">
//           {name}
//         </h3>
        
//         {/* Cuisines is an array in the JSON, join it with commas */}
//         <h4 className="text-sm text-slate-400 line-clamp-1 leading-relaxed italic">
//           {cuisines.join(", ")}
//         </h4>

//         {/* Footer info: Stars and Delivery Time */}
//         <div className="mt-2 pt-4 border-t border-white/5 flex items-center justify-between">
//           <div className="flex flex-col">
//             <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Rating</span>
//             <span className="text-sm text-slate-200">{avgRating} stars</span>
//           </div>
          
//           <div className="flex flex-col items-end">
//             <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Arrival</span>
//             {/* Delivery time is nested inside the 'sla' object */}
//             <span className="text-sm font-medium text-indigo-300">{sla?.slaString}</span>
//           </div>
//         </div>
//       </div>

//       {/* Subtle bottom glow that appears on hover */}
//       <div className="absolute inset-0 border-b-4 border-indigo-500/0 group-hover:border-indigo-500/40 transition-all rounded-[2rem] pointer-events-none"></div>
//     </div>
//   );
// };



// // higher order component - episode 11
// // input -> restaurant card outpur -> restaurant card promoted

// export const withPromotedLabel = (RestaurantCard2) => {
//   return (props) => {
//     return (
//       <div>
//         <label className="absolute bg-amber-950 text-white m-2 p-2 rounded-2xl"> Promoted</label>
//         <RestaurantCard2 {...props}/>
//       </div>
//     )

//   }

// }


// export default RestaurantCard2;



import { FALLBACK_IMG } from "../utility/commons";

// The base URL for all Swiggy images
const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const RestaurantCard2 = (props) => {
  const { resObj } = props;

  // Destructure with defaults to prevent crashes if data is missing
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines = [],
    sla
  } = resObj?.info || {};

  return (
    <div className="res-card group relative h-full backdrop-blur-md bg-white/[0.03] border border-white/10 rounded-[2rem] overflow-hidden transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      
      {/* Image Container with Zoom effect */}
      <div className="relative h-48 overflow-hidden">
        <img
          className="res-logo w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          alt={name}
          src={CDN_URL + cloudinaryImageId}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = FALLBACK_IMG;
          }}
        />
        {/* Rating Badge Overlay */}
        <div className="absolute top-3 right-3 flex items-center gap-1 px-3 py-1.5 backdrop-blur-md bg-black/60 rounded-full border border-white/10 text-sm font-bold">
          <span className={avgRating >= 4 ? "text-emerald-400" : "text-yellow-400"}>★</span>
          <span className="text-white">{avgRating}</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex flex-col gap-2">
        <h3 className="text-xl font-bold text-white truncate group-hover:text-indigo-400 transition-colors">
          {name}
        </h3>
        
        <h4 className="text-sm text-slate-400 line-clamp-1 leading-relaxed italic">
          {cuisines.join(", ")}
        </h4>

        {/* Footer info: Stars and Delivery Time */}
        <div className="mt-2 pt-4 border-t border-white/5 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Rating</span>
            <span className="text-sm text-slate-200">{avgRating} stars</span>
          </div>
          
          <div className="flex flex-col items-end">
            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Arrival</span>
            <span className="text-sm font-medium text-indigo-300">{sla?.slaString}</span>
          </div>
        </div>
      </div>

      {/* Subtle bottom glow */}
      <div className="absolute inset-0 border-b-4 border-indigo-500/0 group-hover:border-indigo-500/40 transition-all rounded-[2rem] pointer-events-none"></div>
    </div>
  );
};

// Higher Order Component (HOC)
export const withPromotedLabel = (Component) => {
  return (props) => {
    return (
      <div className="relative h-full">
        <label className="absolute top-4 left-4 z-30 bg-amber-600 text-white px-3 py-1 text-xs font-bold rounded-lg shadow-lg">
          PROMOTED
        </label>
        <Component {...props} />
      </div>
    );
  };
};

export default RestaurantCard2;
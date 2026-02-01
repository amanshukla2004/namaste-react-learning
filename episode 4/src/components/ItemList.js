// import React from 'react'

// const ItemList = (items) => {
//   return (
//     <div>
//         <ul>
//             {items.map(item => <li key={item.card}></li>)}
//         </ul>
//     </div>
//   )
// }

// export default ItemList


import React from 'react';

// Swiggy Image CDN
const ITEM_IMG_CDN = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300/";

const ItemList = ({ items }) => {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-6 mb-4 flex justify-between items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 group"
        >
          {/* Item Details */}
          <div className="w-9/12 text-left">
            <div className="flex flex-col gap-1">
              <span className="text-lg font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">
                {item.card.info.name}
              </span>
              <span className="text-md font-semibold text-indigo-300">
                ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed line-clamp-2">
              {item.card.info.description}
            </p>
          </div>

          {/* Item Image & Add Button */}
          <div className="w-3/12 relative flex flex-col items-center">
            <div className="absolute -bottom-2 z-10">
              <button className="px-6 py-2 bg-slate-900 text-emerald-400 font-bold rounded-xl border border-emerald-500/50 shadow-lg shadow-emerald-500/10 hover:bg-emerald-500 hover:text-white transition-all active:scale-95 uppercase text-xs tracking-widest">
                Add +
              </button>
            </div>
            {item.card.info.imageId && (
              <img
                src={ITEM_IMG_CDN + item.card.info.imageId}
                className="w-32 h-32 object-cover rounded-2xl shadow-xl border border-white/5 transition-transform duration-500 group-hover:scale-105"
                alt={item.card.info.name}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
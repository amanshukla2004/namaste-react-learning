// // import React from 'react'
// // import ItemList from './ItemList'

// // const RestaurantCategories = (data) => {
// //   return (
// //     <div>
// //         <div className='w-6/12 mx-auto'>
// //             <div className=' flex justify-between'>
// //                 <span>{data.title}</span>
// //                 <span>^</span>    
// //             </div>
            
// //             <ItemList items = {data.itemCards}/>
// //         </div>
        
// //     </div>
// //   )
// // }

// // export default RestaurantCategories

// import React from 'react';
// import ItemList from './ItemList';

// const RestaurantCategories = ({ data }) => {
//   // Destructuring the title and itemCards from the data prop
//   const { title, itemCards } = data;

//   return (
//     <div className="w-full mb-6">
//       {/* Header / Accordion Section */}
//       <div className="w-8/12 mx-auto bg-slate-900/50 backdrop-blur-md shadow-lg border border-white/5 rounded-3xl overflow-hidden">
        
//         <div className="flex justify-between items-center p-6 cursor-pointer hover:bg-white/5 transition-all">
//           <span className="text-xl font-bold text-slate-100 tracking-wide">
//             {title} ({itemCards.length})
//           </span>
//           <span className="text-2xl text-indigo-400 transform transition-transform duration-300">
//              ▼
//           </span>
//         </div>

//         {/* Accordion Body */}
//         <div className="px-6 pb-6 border-t border-white/5 pt-6">
//             <ItemList items={itemCards} />
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default RestaurantCategories;



const RestaurantCategories = ({ data, showItems, setShowIndex }) => {
  
  const handleClick = () => {
    setShowIndex(); // This calls the function in the Parent
  };

  return (
    <div className="w-6/12 mx-auto my-4 bg-slate-900 shadow-lg p-4 border border-white/10 rounded-xl">
      {/* Header */}
      <div 
        className="flex justify-between cursor-pointer hover:text-indigo-400 transition-colors"
        onClick={handleClick}
      >
        <span className="font-bold text-lg text-white">
          {data.title} ({data.items.length})
        </span>
        <span className="text-white">{showItems ? "▲" : "▼"}</span>
      </div>

      {/* Accordion Body - Only visible if showItems is true */}
      {showItems && (
        <div className="mt-4 border-t border-white/5 pt-4 text-left">
           <ul className="text-slate-400">
             {data.items.map(item => <li key={item} className="py-1">⭐ {item}</li>)}
           </ul>
        </div>
      )}
    </div>
  );
};

export default RestaurantCategories;
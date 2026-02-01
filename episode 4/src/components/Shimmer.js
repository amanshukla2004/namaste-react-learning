

// // const Shimmer = () =>{
// //     return <div className="shimmer-container" >
// //         <div className="shimmer-card">Cards</div>
// //         <div className="shimmer-card">Cards</div>
// //         <div className="shimmer-card">Cards</div>
// //         <div className="shimmer-card">Cards</div>
// //         <div className="shimmer-card">Cards</div>
// //         <div className="shimmer-card">Cards</div>
// //         <div className="shimmer-card">Cards</div>
// //         <div className="shimmer-card">Cards</div>
// //         <div className="shimmer-card">Cards</div>
// //         <div className="shimmer-card">Cards</div>
// //         <div className="shimmer-card">Cards</div>
// //         <div className="shimmer-card">Cards</div>
// //         <div className="shimmer-card">Cards</div>
// //         <div className="shimmer-card">Cards</div>
// //         <div className="shimmer-card">Cards</div>
// //         <div className="shimmer-card">Cards</div>
// //         <div className="shimmer-card">Cards</div>
// //         <div className="shimmer-card">Cards</div>
// //         <div className="shimmer-card">Cards</div>
// //         <div className="shimmer-card">Cards</div>
// //         <div className="shimmer-card">Cards</div>

// //     </div>
// // }

// // export default Shimmer;
// const Shimmer = () =>{
//     return (
//       /* Matching the grid layout of your Body component for seamless transition */
//       <div className="shimmer-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-12 bg-[#020617] min-h-screen">
        
//         {/* We apply the same styling to every card to create a consistent loading skeleton */}
//         {[...Array(21)].map((_, index) => (
//           <div key={index} className="shimmer-card relative overflow-hidden bg-slate-800/40 border border-white/5 rounded-[2rem] h-[380px] flex flex-col shadow-2xl">
            
//             {/* The Shimmering Light Effect - animated via pulse */}
//             <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent"></div>

//             {/* Mock Image Area */}
//             <div className="h-48 w-full bg-slate-700/50 animate-pulse rounded-t-[2rem]"></div>

//             {/* Mock Content Area */}
//             <div className="p-5 space-y-4">
//               {/* Mock Title */}
//               <div className="h-6 w-3/4 bg-slate-700/60 rounded-lg animate-pulse"></div>
              
//               {/* Mock Cuisines */}
//               <div className="h-4 w-1/2 bg-slate-700/40 rounded-lg animate-pulse"></div>

//               {/* Mock Footer info */}
//               <div className="mt-4 pt-4 border-t border-white/5 flex justify-between">
//                 <div className="h-8 w-16 bg-slate-700/40 rounded-xl animate-pulse"></div>
//                 <div className="h-8 w-16 bg-slate-700/40 rounded-xl animate-pulse"></div>
//               </div>
//             </div>
//           </div>
//         ))}

//         {/* Keeping your original structure in mind, but mapped for cleaner CSS application */}
//         {/* Your original 21 divs are represented by the map above to ensure the UI remains consistent */}
//       </div>
//     )
// }

// export default Shimmer;


import React from "react";

const Shimmer = () => {
  return (
    /* Matching the grid layout of your Body component for a seamless transition */
    <div className="shimmer-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-12 bg-[#020617] min-h-screen">
      
      {/* Mapping through an array to generate 20 skeleton cards */}
      {Array(20).fill("").map((_, index) => (
        <div 
          key={index} 
          className="shimmer-card relative overflow-hidden bg-slate-800/40 border border-white/5 rounded-[2rem] h-[380px] flex flex-col shadow-2xl"
        >
          {/* The Moving Light Streak (Shimmer Effect) */}
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          {/* Mock Image Area */}
          <div className="h-48 w-full bg-slate-700/50 rounded-t-[2rem]"></div>

          {/* Mock Content Area */}
          <div className="p-5 space-y-4">
            {/* Mock Title */}
            <div className="h-6 w-3/4 bg-slate-700/60 rounded-lg"></div>
            
            {/* Mock Cuisines */}
            <div className="h-4 w-1/2 bg-slate-700/40 rounded-lg"></div>

            {/* Mock Footer info */}
            <div className="mt-4 pt-4 border-t border-white/5 flex justify-between">
              <div className="h-8 w-16 bg-slate-700/40 rounded-xl"></div>
              <div className="h-8 w-16 bg-slate-700/40 rounded-xl"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
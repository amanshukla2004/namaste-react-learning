// import React from "react";

// const Grocery = () => {
//   return (
//     <h1>
      
//       our Grocery online store, and we have a lot of child component inside
//     </h1>
//   );
// }; 

// export default Grocery;


import React from "react";

const Grocery = () => {
  // Sample categories to represent the "child components" visually
  const categories = [
    { id: 1, name: "Fruits & Veggies", icon: "🍎", color: "from-emerald-500/20" },
    { id: 2, name: "Dairy & Bread", icon: "🥛", color: "from-blue-500/20" },
    { id: 3, name: "Snacks & Drinks", icon: "🍿", color: "from-purple-500/20" },
    { id: 4, name: "Meat & Fish", icon: "🥩", color: "from-red-500/20" },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 px-6 md:px-12 py-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-indigo-900/20 to-slate-900 border border-white/10 p-12 mb-12 text-center">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-indigo-600/10 blur-[100px] rounded-full"></div>
        
        <h1 className="text-5xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-slate-500">
          InstaMart <span className="text-indigo-500">Grocery</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-400 font-medium leading-relaxed">
          Welcome to our premium online store. We've optimized this module using 
          <span className="text-indigo-400 font-mono"> React.lazy</span> for lightning-fast performance.
        </p>
      </div>

      {/* Category Grid (Representing the "lot of child components") */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div 
            key={cat.id}
            className={`group relative overflow-hidden backdrop-blur-md bg-white/[0.03] border border-white/10 p-8 rounded-[2rem] transition-all duration-500 hover:bg-white/[0.08] hover:border-indigo-500/40 hover:-translate-y-2`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            
            <div className="relative z-10">
              <span className="text-5xl mb-4 block transform group-hover:scale-110 transition-transform duration-500">
                {cat.icon}
              </span>
              <h3 className="text-xl font-bold text-white mb-2">{cat.name}</h3>
              <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Explore Section</p>
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-indigo-500 transition-all duration-500 group-hover:w-full"></div>
          </div>
        ))}
      </div>

      {/* Loading Disclaimer for Lazy Bundle */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900/50 border border-white/5 text-xs font-mono text-slate-500">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          Bundle Chunk Loaded Successfully via Suspense
        </div>
      </div>
    </div>
  );
};

export default Grocery;
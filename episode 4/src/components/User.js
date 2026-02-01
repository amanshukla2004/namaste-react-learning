// // const User = () => {

// //     async function getUserInfo(){
        
// //     }
// //     return <div className="user-card flashy">
// //         <h2>Name : Aman Shukla</h2>
// //         <h3>Location: Delhi</h3>
// //         <h4>Contact: 1234567890</h4>
// //     </div>
// // }

// // export default User;
// const User = () => {

//     async function getUserInfo(){
        
//     }
//     return (
//       /* Card Wrapper with a glowing border effect */
//       <div className="user-card flashy relative group max-w-sm mx-auto overflow-hidden">
//         {/* Animated background glow */}
//         <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2rem] blur opacity-20 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        
//         <div className="relative backdrop-blur-xl bg-slate-900/90 border border-white/10 rounded-[2rem] p-8 shadow-2xl">
//           {/* Decorative Profile Icon Placeholder */}
//           <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-6 flex items-center justify-center shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
//             <span className="text-3xl text-white font-bold">AS</span>
//           </div>

//           <div className="space-y-4">
//             <div className="border-b border-white/5 pb-2">
//               <span className="text-[10px] uppercase tracking-[0.3em] text-indigo-400 font-bold">Identity</span>
//               <h2 className="text-2xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-indigo-300 transition-all">
//                 Name : Aman Shukla
//               </h2>
//             </div>

//             <div className="border-b border-white/5 pb-2">
//               <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">Base</span>
//               <h3 className="text-lg font-medium text-slate-300">
//                 Location: Delhi
//               </h3>
//             </div>

//             <div>
//               <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">Secure Line</span>
//               <h4 className="text-lg font-mono text-indigo-300/80">
//                 Contact: 1234567890
//               </h4>
//             </div>
//           </div>

//           {/* Bottom decorative bar */}
//           <div className="mt-8 flex items-center gap-1">
//             <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
//               <div className="h-full w-1/3 bg-indigo-500 animate-[loading_3s_infinite]"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
// }

// export default User;

import React, { useEffect } from "react";

const User = () => {
  // Equivalent to componentDidMount in class components
  useEffect(() => {
    getUserInfo();

    // Optional: Cleanup function (equivalent to componentWillUnmount)
    return () => {
      console.log("User Component Unmounted");
    };
  }, []);

  async function getUserInfo() {
    // You can fetch GitHub user data here later!
    console.log("Fetching user info...");
  }

  return (
    /* Card Wrapper with a glowing border effect */
    <div className="user-card flashy relative group max-w-sm mx-auto overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2rem] blur opacity-20 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
      
      <div className="relative backdrop-blur-xl bg-slate-900/90 border border-white/10 rounded-[2rem] p-8 shadow-2xl">
        {/* Decorative Profile Icon Placeholder */}
        <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-6 flex items-center justify-center shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
          <span className="text-3xl text-white font-bold">AS</span>
        </div>

        <div className="space-y-4">
          <div className="border-b border-white/5 pb-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-indigo-400 font-bold">Identity</span>
            <h2 className="text-2xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-indigo-300 transition-all">
              Name: Aman Shukla
            </h2>
          </div>

          <div className="border-b border-white/5 pb-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">Base</span>
            <h3 className="text-lg font-medium text-slate-300">
              Location: Delhi
            </h3>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">Secure Line</span>
            <h4 className="text-lg font-mono text-indigo-300/80">
              Contact: 1234567890
            </h4>
          </div>
        </div>

        {/* Bottom decorative bar */}
        <div className="mt-8 flex items-center gap-1">
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-indigo-500 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
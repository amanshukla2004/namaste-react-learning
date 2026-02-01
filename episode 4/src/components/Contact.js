// const Contact = () =>{
//     return (
//       <div className="min-h-[80vh] flex items-center justify-center bg-[#020617] px-6">
//         {/* Animated Glow Background behind the card */}
//         <div className="relative w-full max-w-xl">
//           <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
//           <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          
//           <div className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[2.5rem] p-12 shadow-2xl text-center">
//             <h1 className="text-5xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-slate-500"> 
//               Contact page 
//             </h1>
            
//             <h2 className="text-xl font-medium text-indigo-400 tracking-[0.2em] uppercase mb-8"> 
//               contact details
//             </h2>
            
//             {/* Elegant glass container for the paragraph content */}
//             <div className="bg-black/20 rounded-2xl p-6 border border-white/5">
//               <p className="text-slate-400 font-mono tracking-widest break-all"> 
//                 .............................
//               </p>
//             </div>

//             {/* Subtle call to action visual */}
//             <div className="mt-10 flex justify-center gap-4">
//                <div className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></div>
//                <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse delay-75"></div>
//                <div className="h-2 w-2 rounded-full bg-slate-500 animate-pulse delay-150"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
// }

// export default Contact;


import React from "react";

const Contact = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#020617] px-6">
      {/* Animated Glow Background behind the card */}
      <div className="relative w-full max-w-xl">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

        <div className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[2.5rem] p-12 shadow-2xl text-center">
          <h1 className="text-5xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-slate-500">
            Contact Us
          </h1>

          <h2 className="text-sm font-semibold text-indigo-400 tracking-[0.3em] uppercase mb-8">
            Get In Touch
          </h2>

          {/* Glass container for content or form */}
          <div className="bg-black/20 rounded-2xl p-6 border border-white/5">
            <p className="text-slate-400 font-mono tracking-widest break-all">
              shukla.aman@example.com
            </p>
          </div>

          {/* Subtle animated indicators */}
          <div className="mt-10 flex justify-center gap-4">
            <div className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></div>
            <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse delay-75"></div>
            <div className="h-2 w-2 rounded-full bg-slate-500 animate-pulse delay-150"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
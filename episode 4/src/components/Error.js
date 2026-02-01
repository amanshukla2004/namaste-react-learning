// import React from 'react'

// import {useRouteError} from "react-router-dom";

// const Error = () => {
//     const err = useRouteError(); // returns a object containing what kind of error
//     console.log(err); 
//   return (
//     /* Background with a deep red/slate gradient to signal error state */
//     <div className="min-h-screen bg-[#020617] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-slate-900 to-black flex items-center justify-center p-6 font-sans">
        
//         {/* Error Card with frosted glass and a subtle red border glow */}
//         <div className="relative max-w-2xl w-full backdrop-blur-2xl bg-white/[0.03] border border-red-500/20 rounded-[3rem] p-10 md:p-16 shadow-[0_0_50px_-12px_rgba(220,38,38,0.3)] overflow-hidden">
            
//             {/* Background Decorative Element */}
//             <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/10 blur-[80px] rounded-full"></div>

//             <h1 className="text-6xl font-black text-white mb-4 tracking-tighter">
//                 OOPS <span className="text-red-500">something</span> went wrong
//             </h1>
            
//             <h2 className="text-sm font-mono text-slate-500 mb-8 leading-relaxed break-all opacity-60">
//                 heheheh\neheheehhehehhehehhehhehehehheehhheheheheh
//             </h2>

//             {/* Error Details Grid */}
//             <div className="grid grid-cols-1 gap-4 text-left">
//                 <div className="flex items-center gap-4 bg-black/40 border border-white/5 rounded-2xl p-4 transition-hover hover:border-red-500/40">
//                     <span className="text-red-500 font-bold text-2xl px-4 border-r border-white/10">{err.status}</span>
//                     <div className="flex flex-col">
//                         <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Status Message</span>
//                         <h3 className="text-lg text-slate-200 font-medium"> {err.statusText}</h3>
//                     </div>
//                 </div>

//                 <div className="space-y-2 px-2">
//                     <h3 className="text-sm text-slate-400 bg-red-500/10 inline-block px-3 py-1 rounded-full border border-red-500/20"> 
//                         Error Trace: {err.Error}
//                     </h3>
//                     <h3 className="block text-xs font-mono text-slate-500 bg-slate-900/50 p-4 rounded-xl border border-white/5"> 
//                         Data Payload: {err.data}
//                     </h3>
//                 </div>
//             </div>

//             {/* Back to Home Visual Cue */}
//             <div className="mt-12">
//                 <div className="inline-flex items-center gap-2 text-indigo-400 font-semibold hover:text-indigo-300 transition-colors cursor-pointer group">
//                     <span>Scroll or Refresh to retry</span>
//                     <div className="w-8 h-[1px] bg-indigo-500 group-hover:w-12 transition-all"></div>
//                 </div>
//             </div>

//         </div>
//     </div>
//   )
// }

// export default Error;


import React from 'react';
import { useRouteError, Link } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.error(err); // Changed to console.error for better visibility in dev tools

    return (
        /* Background with a deep red/slate gradient */
        <div className="min-h-screen bg-[#020617] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-slate-900 to-black flex items-center justify-center p-6 font-sans">
            
            {/* Error Card with frosted glass and a subtle red border glow */}
            <div className="relative max-w-2xl w-full backdrop-blur-2xl bg-white/[0.03] border border-red-500/20 rounded-[3rem] p-10 md:p-16 shadow-[0_0_50px_-12px_rgba(220,38,38,0.3)] overflow-hidden">
                
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/10 blur-[80px] rounded-full"></div>

                <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter">
                    OOPS <span className="text-red-500">something</span> went wrong
                </h1>
                
                <h2 className="text-sm font-mono text-slate-500 mb-8 leading-relaxed opacity-60">
                    The requested page encountered an unexpected issue.
                </h2>

                {/* Error Details Grid */}
                <div className="grid grid-cols-1 gap-4 text-left">
                    <div className="flex items-center gap-4 bg-black/40 border border-white/5 rounded-2xl p-4 hover:border-red-500/40 transition-all">
                        <span className="text-red-500 font-bold text-2xl px-4 border-r border-white/10">
                            {err.status || "Error"}
                        </span>
                        <div className="flex flex-col">
                            <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Status Message</span>
                            <h3 className="text-lg text-slate-200 font-medium"> 
                                {err.statusText || err.message || "Unknown Error"}
                            </h3>
                        </div>
                    </div>

                    <div className="space-y-2 px-2">
                        {err.data && (
                            <div className="block text-xs font-mono text-slate-400 bg-slate-900/50 p-4 rounded-xl border border-white/5"> 
                                <span className="text-red-400/60 uppercase text-[10px] block mb-1">Payload:</span>
                                {typeof err.data === 'object' ? JSON.stringify(err.data) : err.data}
                            </div>
                        )}
                    </div>
                </div>

                {/* Back to Home Navigation */}
                <div className="mt-12">
                    <Link to="/" className="inline-flex items-center gap-2 text-indigo-400 font-semibold hover:text-indigo-300 transition-colors group">
                        <span>Return to Dashboard</span>
                        <div className="w-8 h-[1px] bg-indigo-500 group-hover:w-12 transition-all"></div>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Error;


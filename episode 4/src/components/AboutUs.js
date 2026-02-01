// import User from "./User";
// import UserClass from "./UserClass";
// //import React from "react";
// import { Component } from "react";

// //class AboutUs extends React.Component {
// class AboutUs extends Component {
//   constructor(props) {
//     super(props);
//     console.log(" parent Constructorrrrr");
//   }
//   componentDidMount() {
//     console.log("parent component did mount");
//   }
//   render() {
//     console.log(" parent renderrrrrrrrrrrr");
//     return (
//       /* Main Container with an animated mesh gradient background */
//       <div className="min-h-screen bg-[#0f172a] bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900 to-black flex flex-col items-center justify-center p-8 transition-all duration-500">
        
//         {/* Glassmorphic Card Wrapper */}
//         <div className="relative group overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] rounded-[2.5rem] p-12 max-w-2xl w-full text-center hover:border-white/20 transition-all duration-500 hover:shadow-indigo-500/10">
          
//           {/* Animated background glow behind the text */}
//           <div className="absolute -top-24 -left-24 w-48 h-48 bg-indigo-600/20 blur-[100px] rounded-full group-hover:bg-indigo-600/30 transition-colors" />
          
//           <h1 className="relative text-5xl font-extrabold tracking-tight mb-4">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-slate-400 animate-gradient">
//               About class Component
//             </span>
//           </h1>
          
//           <h2 className="relative text-lg font-medium text-slate-400 tracking-widest uppercase mb-10 opacity-80">
//             Learning Routing in react
//           </h2>

//           {/* Separator Line */}
//           <div className="w-24 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mb-10 opacity-50" />

//           {/* Component Container with a subtle inner glow */}
//           <div className="relative bg-black/20 rounded-3xl p-6 border border-white/5 shadow-inner">
//             <UserClass name={"raj from class"} location={"noida from class"} />
//           </div>

//         </div>
//       </div>
//     );
//   }
// }

// /* const AboutUs = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>Learning Routing in react</h2>
//             <User />
//             <UserClass name = {"raj from class"} 
//             location = {"noida from class"} />
//         </div>
//     )
// } */
// export default AboutUs;


import { Component } from "react";
import UserClass from "./UserClass";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    
    // Initializing state if needed, though not used here yet
    this.state = {};

    console.log("Parent: Constructor");
  }

  componentDidMount() {
    // Perfect place for API calls
    console.log("Parent: Component Did Mount");
  }

  render() {
    console.log("Parent: Render");

    return (
      /* Main Container with an animated mesh gradient background */
      <div className="min-h-screen bg-[#0f172a] bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900 to-black flex flex-col items-center justify-center p-8 transition-all duration-500">
        
        {/* Glassmorphic Card Wrapper */}
        <div className="relative group overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] rounded-[2.5rem] p-12 max-w-2xl w-full text-center hover:border-white/20 transition-all duration-500 hover:shadow-indigo-500/10">
          
          {/* Animated background glow behind the text */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-indigo-600/20 blur-[100px] rounded-full group-hover:bg-indigo-600/30 transition-colors" />
          
          <h1 className="relative text-5xl font-extrabold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-slate-400">
              About Class Component
            </span>
          </h1>
          
          <h2 className="relative text-lg font-medium text-slate-400 tracking-widest uppercase mb-10 opacity-80">
            Learning Routing in React
          </h2>

          {/* Separator Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mb-10 opacity-50" />

          {/* Component Container with a subtle inner glow */}
          <div className="relative bg-black/20 rounded-3xl p-6 border border-white/5 shadow-inner">
            <UserClass name={"Raj (Class)"} location={"Noida (Class)"} />
          </div>

        </div>
      </div>
    );
  }
}

export default AboutUs;
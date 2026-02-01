// import React from "react";

// class UserClass extends React.Component {
//   constructor(props) {
//     super(props); 

//     this.state = {
//       userInfo: {
//         name: "dummy",
//         location: "default"
//       }
//     };
//   }

//   async componentDidMount() {
//     try {
//         const data = await fetch("https://api.github.com/users/akshaymarch7");
//         const json = await data.json();
        
//         // Safety check to ensure we got an object back
//         if (json) {
//             this.setState({ userInfo: json });
//         }
//     } catch (error) {
//         console.error("Failed to fetch user:", error);
//     }
//   }

//   render() {
//     // Optional Chaining safety: in case userInfo becomes null
//     const { name, location } = this.state.userInfo || {}; 
    
//     console.log(" child render");
    
//     return (
//       <div className="user-card flashy">
//         <h2>Name : {name}</h2>
//         {/* Added a fallback for location since GitHub users often leave it blank */}
//         <h3>Location: {location || "No Location Provided"}</h3>
//         <h4>Contact: 1234567890</h4>
//       </div>
//     );
//   }
// }

// export default UserClass;




import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Loading...",
        location: "Loading...",
        avatar_url: null, // FIX 1: Set to null instead of ""
      },
    };
  }

  async componentDidMount() {
    try {
      const data = await fetch("https://api.github.com/users/akshaymarch7");
      const json = await data.json();

      if (json) {
        this.setState({
          userInfo: json,
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="flex flex-col items-center gap-4 p-6 bg-slate-800/50 rounded-3xl border border-white/10 backdrop-blur-sm">
        
        {/* FIX 2: Conditional Rendering - Only show <img> if avatar_url exists */}
        {avatar_url ? (
          <img 
            src={avatar_url} 
            className="w-24 h-24 rounded-2xl border-2 border-indigo-500 shadow-xl shadow-indigo-500/20" 
            alt={name}
          />
        ) : (
          /* Placeholder while loading */
          <div className="w-24 h-24 bg-slate-700 animate-pulse rounded-2xl" />
        )}

        <div className="text-center">
          <h2 className="text-xl font-bold text-white">Name: {name}</h2>
          <h3 className="text-slate-400 font-medium">Location: {location || "Remote"}</h3>
        </div>
      </div>
    );
  }
}

export default UserClass;
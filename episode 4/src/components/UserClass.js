import React from "react";

class UserClass extends React.Component {
  // constructor will receive the props
  constructor(props) {
    super(props); // why super() ??
    

    this.state = {
      // this is a object
      userInfo: {
        name: "dummy",
        location:"default"
      }
    };
  }

  async componentDidMount() {
    // console.log("child component did mount");
    
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json() ;
    console.log(json);
    this.setState({userInfo : json})
}



  render() {
    const {name, location} = this.state.userInfo;
    console.log(" child render");
    return (
      <div className="user-card flashy">
       
        <h2>Name : {name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact: 1234567890</h4>
      </div>
    );
  }
}
export default UserClass;

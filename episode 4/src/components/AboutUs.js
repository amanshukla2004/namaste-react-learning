import User from "./User";
import UserClass from "./UserClass";
//import React from "react";
import { Component } from "react";

//class AboutUs extends React.Component {
class AboutUs extends Component {
  constructor(props) {
    super(props);
    console.log(" parent Constructorrrrr");
  }
  componentDidMount() {
    console.log("parent component did mount");
  }
  render() {
    console.log(" parent renderrrrrrrrrrrr");
    return (
      <div>
        <h1>About class Component</h1>
        <h2>Learning Routing in react</h2>

        <UserClass name={"raj from class"} location={"noida from class"} />
      </div>
    );
  }
}

/* const AboutUs = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>Learning Routing in react</h2>
            <User />
            <UserClass name = {"raj from class"} 
            location = {"noida from class"} />
        </div>
    )
} */
export default AboutUs;

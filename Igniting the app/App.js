import React from "react";
import ReactDOM from "react-dom/client";

/* const headingElement = React.createElement(
  "h1",
  { id: "heading" },
  "Hello, React!",
); // this react element is JS object not HTML element

console.log(headingElement);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headingElement); // JS object --(render)-->  HTML element

// --------------------------------------------

const jsxHeadingElement = (
  <h1 id="jsx-heading" className="header">
    Hello, JSX React!
  </h1>
); // this is also JS object not HTML element

console.log(jsxHeadingElement);
// -------------------------------------------------
const jsxHeading = <h1 id="jsx-heading ">Namaste React using JSX</h1>;
// this is also JS object not HTML element
// this is not a HTML element
// jsx is HTML or XML like syntax used in react to create react element
// .................................................................
// React fnal component

const Headingg1 = () => {
  return <h1 className="heading"> hiii React fnal component </h1>;
};
const Headingg2 = () => (
  <h1 className="heading"> hiii React fnal component </h1>
); // they both are same;

// fn that returns react components
// ...................................................................................
const fn1 = () => {
  return something;
};
// same as

const fn2 = () => something;

// react element -> react component
// ..................................................................................

// how we will render the react component;

root.render(reactElement);

// but for the react component
 root.render( <reactComponent/> );  */// this is how you render your react fn  Compomnent

 // ---------------------------------------------------------------------------------

 // how one component can be used in another component 
const Title = () => {
  return <h1 className="heading"> hii this is a title </h1>;
};

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">this is a heading component </h1>
      
  </div>
);

const root1 = ReactDOM.createRoot(document.getElementById('root'));
root1.render(<HeadingComponent/>)


// -------------------------------------------------------------------

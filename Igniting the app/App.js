import React from "react";
import ReactDOM from "react-dom/client";


const headingElement = React.createElement(
  "h1",
  { id: "heading" },
  "Hello, React!",
);

console.log(headingElement);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headingElement);
/* const headingElement = React.createElement(
  "h1",
  { id: "heading" },
  "Hello, React!",
);

console.log(headingElement);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headingElement);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am an h1 tag inside child div"),
  ),
);
console.log(parent);
root.render(parent);

const parent2 = React.createElement(
  "div",
  { id: "parent2" },

  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 tag inside child div"),
    React.createElement("h1", {}, "I am the second h1 tag inside child div"),
  ]),
);
console.log(parent2);
root.render(parent2);
 */
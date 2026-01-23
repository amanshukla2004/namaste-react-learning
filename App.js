// 0.js comments
/* ctrt + / --> to comment multiple lines
alt + shift + a --> to comment multiple lines */
//-------------------------------------------------

// 1. Basic React Element Creation and Rendering
// creating a React element is a core thing in React so the first link is used
const headingElement = React.createElement(
  "h1",
  { id: "heading" },
  "Hello, React!",
);
// {} is for attributes like class, id, style etc.
// {} --> ex; {className: 'header', id: 'title'}

console.log(headingElement);
// this is object not a HTML element
// it has properties like type, props etc.
// props contains all the attributes and children like text

// when we want to render something to the DOM, we use ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headingElement);
// root.render() takes a React element and renders it to the DOM --> will convert the headingElement object to an actual HTML element and put it inside the div with id 'root'

// React.createElement() --> creates a React element (object representation of a UI element)
// ReactDOM.createRoot() --> creates a root to render the React element
// root.render() --> renders the React element to the DOM
// In React, we don't manipulate the DOM directly. Instead, we create React elements and let React handle the DOM updates efficiently.
// This is the basic workflow of React for rendering UI elements to the DOM.
// React follows a declarative approach where we describe what the UI should look like, and React takes care of updating the DOM to match that description.
// This approach makes it easier to manage and update the UI, especially in complex applications.

//-------------------------------------------------
// 2. Nested React Elements
// how we will be able to create the nested structure like
/*
        <div id="parent">
            <div id="child">
                <hi>"I am an h1 tag inside child div"</hi>
            </div>
        </div>
*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  // here you can pass multiple children as an array
  // here you write what you want inside the div

  React.createElement(
    "div",
    { id: "child" },
    // again you can pass multiple children as an array
    React.createElement("h1", {}, "I am an h1 tag inside child div"),
  ),
);
console.log(parent);
// now we have created a nested structure using React.createElement()
// let's render it to the DOM
root.render(parent);
// here we created a nested structure using React.createElement()
// each call to React.createElement() creates a new element, and we can nest them by passing them as children to other elements.
// This way, we can build complex UI structures using simple function calls.
// React will take care of rendering this nested structure to the DOM efficiently.
// ---------------------------------------------------------
// 3. Creating Sibling Elements
// now we will create sibling elements

/* 

<div id="parent">
  <div id="child">
    <hi>"I am an h1 tag inside child div"</hi>
    <hi>"I am an h1 tag inside child div"</hi>
  </div>
</div>; 

*/

const parent2 = React.createElement(
  "div",
  { id: "parent2" },

  React.createElement(
    "div",
    { id: "child" },
    // again you can pass multiple children as an array
    [
      React.createElement("h1", {}, "I am an h1 tag inside child div"),
      React.createElement("h1", {}, "I am the second h1 tag inside child div"),
    ],
  ),
);
console.log(parent2);
root.render(parent2);
// -- > {{{{{{{{{{error}}}}}}}}}} because ReactDOM can render only one element at a time
// to render multiple elements we need to wrap them in a single parent element
// here we wrapped the two h1 tags inside an array to make them siblings
// React will render them as siblings inside the child div
// this way of creating sibling is so ugly
// ---------------------------------------------------------
// 4. thats why we use JSX
// and JSX is just a syntactic sugar over React.createElement()
// this is the last time we will use React.createElement() directly
/*
        <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>

        <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
        
        <script src="App.js"></script>

*/
// order of the scripts is important
// React and ReactDOM should be loaded before App.js
// because App.js uses React and ReactDOM
// ques -> what is crossorigin?
// ans -> it is used to handle CORS (Cross-Origin Resource Sharing) requests
// when you load scripts from a different origin, the browser may block them due to security reasons
// crossorigin attribute tells the browser to allow the script to be loaded from a different origin
// ---------------------------------------------------------
// 5. JSX Example




/* if you want to use JSX you need to include these two scripts in your HTML file  

*/

// you can use react in very small portion of your app
//questions
// what is the difference between React and ReactDOM?
// what does crossorigin attribute do in script tag?
// why do we need to include React and ReactDOM scripts before App.js?
// what does root.render() do?
// what if root already has some content and we call root.render() again?

/* in html file
div id="root"><h1> hello, i am present before root.render()</h1></div>

// now if we call root.render(headingElement) what will happen to the existing content inside root?
// ans -> it will be replaced by the new content
// root.render() will overwrite the existing content inside the root element with the new React element
// so after calling root.render(headingElement), the content inside root will be <h1>Hello, React!</h1>


'hello, i am present before root.render()' will be shown for a milisecond and then it will be replaced by 'Hello, React!'


*/
// how to create sibling elements in React without using arrays?
//if there are multiple elements to be rendered at the same level, they need to be wrapped inside a single parent element like a div or React.Fragment
//
//if there are elements before and after the root in html, WILL THEY BE RENDERED OR NOT?   
//
//
//
//


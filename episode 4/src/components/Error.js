import React from 'react'

import {useRouteError} from "react-router-dom";

const Error = () => {
    const err = useRouteError(); // returns a object containing what kind of error
    console.log(err); 
  return (
    <div>
        <h1>OOPS something went wrong</h1>
        <h2>heheheh\neheheehhehehhehehhehhehehehheehhheheheheh</h2>
        <h3> {err.status}</h3>
        <h3> {err.Error}</h3>
        <h3> {err.statusText}</h3>
        <h3> {err.data}</h3>
       
    </div>
  )
}

export default Error;

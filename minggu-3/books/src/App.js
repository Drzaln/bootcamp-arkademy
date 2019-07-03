import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Screen/Home";
// import Detail from "./Screen/Detail";
// import { Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <Home/>
        {/* <Route exact path='/' component={Navbar}/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/detail' component={Detail}/> */}
      </div>
    );
  }
}

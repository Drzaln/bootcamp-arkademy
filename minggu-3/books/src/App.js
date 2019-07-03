import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Screen/Home";

export default class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <Home/>
      </div>
    );
  }
}

import React, { Component } from 'react'
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import Button from "./Components/Button";
import Card from "./Components/Card";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Search/>
        <Button/>
        <Card/>
      </div>
    )
  }
}

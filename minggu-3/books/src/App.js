import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import Button from "./Components/Button";
import Card from "./Components/Card";
import { flexbox } from "@material-ui/system";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div style={{ marginLeft: 100, marginRight: 100 }}>
          <Search />
          <Button />
          <div className="box" style={{display: flexbox,flexDirection: "row"}}>
            <Card />
            <Card/>
          </div>
        </div>
      </div>
    );
  }
}

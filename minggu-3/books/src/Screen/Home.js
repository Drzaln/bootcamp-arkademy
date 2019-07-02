import React, { Component } from "react";
import Search from "../Components/Search";
import Card from "../Components/Card";
import Grid from "@material-ui/core/Grid";
import Modal from "../Components/Modal";

export default class Home extends Component {
  render() {
    return (
      <div style={{ marginLeft: 100, marginRight: 100 }}>
        <Search />
        <Modal/>
        <Grid container spacing={3} xs={12} justify="space-around">
          <Grid xs={12} sm={3}>
            <Card gambar='https://www.beautyscene.net/wp-content/uploads/2013/10/Beauty-Exclusive-Oriental-Beauty-by-Camilla-Camaglia-4.jpg'/>
          </Grid>
          <Grid xs={12} sm={3}>
            <Card />
          </Grid>
          <Grid xs={12} sm={3}>
            <Card />
          </Grid>
          <Grid xs={12} sm={3}>
            <Card />
          </Grid>
        </Grid>
      </div>
    );
  }
}

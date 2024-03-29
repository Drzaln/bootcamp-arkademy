import React, { Component } from "react";
import Search from "../Components/Search";
import Card from "../Components/CardDetail";
import Grid from "@material-ui/core/Grid";
import Modal from "../Components/ModalHome";
import Data from "../Data/dummy";

const text = (text) => {
  if (text.length > 5) {
    let textSplit = text.substr(0, 7);
    return `${textSplit} ...`;
  } else {
    let textSplit = text;
    return `${textSplit}`;
  }
}

function convert(date) {
	let data = Date.parse(date);
	let newDate = new Date(data);
	let day = newDate.getDate();
	let months = [ 'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember' ];
	let month = months[newDate.getMonth()];
	var year = newDate.getFullYear();
	return `${day} ${month} ${year}`;
}

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newDat: Data,
    };
  }

  render() {
    return (
      <div style={{ marginLeft: 100, marginRight: 100 }}>
        <Search />
        <Modal />
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          {this.state.newDat.map(item => {
            return (
              <Grid item xs={3}>
                <Card gambar={item.image_url} judul={text(item.title)} judulFull={item.title} tgl={convert(item.updated_at)} id={item.bookid} deskripsi={item.description} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}

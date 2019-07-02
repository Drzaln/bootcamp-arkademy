import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Data from "../Data/dummy";

let teks = (text) => {
  if (text.length > 10) {
    let tksSplit = text.substr(0, 10)
    return `${tksSplit} ...`
  }else{
    let tksSplit = text
    return `${tksSplit}`
  }
}

const useStyles = makeStyles({
  card: {
    maxWidth: 238,
    height: 340,
    marginTop: 64,
    marginBottom: 64,
    borderRadius: 16,
    boxShadow: `0px 4px 15px #bfbfbf`
  },
});

export default class ImgMediaCard extends Component {
  // const classes = useStyles();
  constructor(){
    super()
    this.state=Data
  }

  render(){
    return (
      <Card className={useStyles.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="240"
            image={gambar}
            title="Contemplative Reptile"
          />
          <CardContent style={{marginTop:4}}>
          <Typography variant="h6" color="textPrimary" component="h6" style={{marginLeft: 14, marginRight: 14, marginTop: 12}}>
              Lizards are a widespread group of
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}
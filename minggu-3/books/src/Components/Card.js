import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 238,
    height: 340,
    marginTop: 100,
    marginBottom: 100,
    borderRadius: 15,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="237"
          image="https://www.beautyscene.net/wp-content/uploads/2013/10/Beauty-Exclusive-Oriental-Beauty-by-Camilla-Camaglia-4.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
        <Typography variant="h6" color="textPrimary" component="h6" style={{marginLeft: 14, marginRight: 14, marginTop: 12}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
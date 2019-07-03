import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import { AppBar } from "@material-ui/core";
import ModalDetail from "../Components/ModalDetail";

const useStyles = makeStyles({
  card: {
    maxWidth: 238,
    height: 340,
    marginTop: 64,
    marginBottom: 64,
    borderRadius: 16,
    boxShadow: `0px 4px 15px #bfbfbf`
  },
  appBar: {
    position: "relative"
  },
  title: {
    flex: 1
  },
  media: {
    paddingTop: "30%" // 16:9
  },
  btnUp: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  },
  tutup: {
    flexGrow: 1
  },
  profile: {
    width: "10%"
  },
  littleBook:{
    position: "absolute",
    top: "45%",
    right: "10%",
    width: "10%",
    height: "30%",
    borderRadius: 16,
    boxShadow: `0px 4px 15px #bfbfbf`,
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ImgMediaCard({ gambar }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleDetailOpen() {
    setOpen(true);
  }

  function handleDetailClose() {
    setOpen(false);
  }

  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea onClick={handleDetailOpen}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="240"
            image={gambar}
            title="Contemplative Reptile"
          />
          <CardContent style={{ marginTop: 4 }}>
            <Typography
              variant="h6"
              color="textPrimary"
              component="h6"
              style={{ marginLeft: 14, marginRight: 14, marginTop: 12 }}
            >
              Lizards are a widespread group of
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Dialog
        fullScreen
        open={open}
        onClose={handleDetailClose}
        TransitionComponent={Transition}
      >
        <AppBar
          position="absolute"
          style={{ backgroundColor: "#FF000000", boxShadow: `0px 0px 0px` }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleDetailClose}
              aria-label="Close"
              className={classes.btnUp}
            >
              <CloseIcon />
            </IconButton>
            <Typography className={classes.tutup} />
            <Button className={classes.btnUp} onClick={handleDetailClose}>
              DELETE
            </Button>
            <ModalDetail/>
          </Toolbar>
        </AppBar>
        <CardMedia
          className={classes.media}
          image="https://i0.wp.com/www.imagesqueen.com/wp-content/uploads/2017/12/Imogen-Dyer-Desktop.jpg"
        />
        <Card className={classes.littleBook} position="absolute">
        <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="240"
            image={gambar}
            title="Contemplative Reptile"
          />
        </Card>
      </Dialog>

    </div>
  );
}

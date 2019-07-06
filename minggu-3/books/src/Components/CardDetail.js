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
import { AppBar } from "@material-ui/core";
import ModalDetail from "./ModalEdit";
import ModalDelete from "../Components/ModalDelete";

const useStyles = makeStyles({
  card: {
    maxWidth: 170,
    height: 270,
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
    top: "30%",
    right: "10%",
    width: "15%",
    height: "45%",
    borderRadius: 16,
    boxShadow: `0px 4px 15px #4c4c4c`,
  },
  judul:{
    fontWeight: "bold",
    marginLeft: "10%",
    marginTop: "5%",
  },
  tgl:{
    fontWeight: "lighter",
    marginLeft: "10%",
  },
  deskripsi:{
    marginLeft: "10%",
    marginTop: "5%",
    marginBottom: "5%",
    marginRight: "10%",
  }
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CardDetail(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleDetailOpen() {
    setOpen(true);
  }

  function handleDetailClose() {
    setOpen(false);
  }

  return (
    <div style={{marginLeft:"20%"}}>
      <Card className={classes.card} id={props.id}>
        <CardActionArea onClick={handleDetailOpen}>
          <CardMedia
            component="img"
            alt={props.judulFull}
            height="200"
            image={props.gambar}
            title={props.judulFull}
          />
          <CardContent>
            <Typography
              variant="h6"
              color="textPrimary"
              component="h6"
              style={{ marginLeft: 14, marginRight: 14, marginTop: 1 }}
            >
              {props.judul}
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
            <ModalDelete/>
            <ModalDetail/>
          </Toolbar>
        </AppBar>
        <CardMedia
          className={classes.media}
          image={props.gambar}
        />
        <Card className={classes.littleBook} position="absolute">
        <CardMedia
            component="img"
            alt="gambar"
            height="350"
            image={props.gambar}
            title={props.judulFull}
          />
        </Card>
        <Typography gutterBottom variant="h4" component="h1" className={classes.judul}>
          {props.judulFull}
        </Typography>
        <Typography variant="body2" component="body2" className={classes.tgl}>
          {props.tgl}
        </Typography>
        <Typography align="justify" variant="body1" component="body1" className={classes.deskripsi} style={{marginRight:"25%"}}>
          {props.deskripsi}
        </Typography>
      </Dialog>
    </div>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Close from "@material-ui/icons/Close";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import TextField from "@material-ui/core/TextField";
import Btn from "./Button";

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    boxShadow: `0px 4px 15px #4c4c4c`,
    outline: "none",
    borderRadius: 15,
    height: "65%",
    width: "60%",
    justifyContent: "center"
  },
  button: {
    marginLeft: "83%"
  },
  textField: {
    marginLeft: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  dlmButton: {
    backgroundColor: "#F4CF5D",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#DBBA53",
      borderColor: "#DBBA53"
    }
  },
  btnUp: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  },
}));

export default function SimpleModal() {
  const [open, setOpen] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  return (
    <div>
      <Button className={classes.btnUp} onClick={handleOpen}>
              EDIT
            </Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <Grid
            container
            spacing={3}
            xs={12}
            justify="space-around"
            style={{ marginTop: 16, marginBottom: 16 }}
          >
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h6"
                id="modal-title"
                style={{ fontWeight: "bold" }}
              >
                Add Data
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Button
                onClick={handleClose}
                color="secondary"
                className={classes.button}
              >
                <Close />
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            xs={12}
            justify="space-around"
            alignItems="center"
          >
            <Grid item xs={12} sm={3}>
              <Typography variant="body1">Url Image</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-dense"
                label="Url Image"
                className={clsx(classes.textField, classes.dense)}
                variant="outlined"
                margin="dense"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            xs={12}
            justify="space-around"
            alignItems="center"
          >
            <Grid item xs={12} sm={3}>
              <Typography variant="body1">Title</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-dense"
                label="Title"
                className={clsx(classes.textField, classes.dense)}
                variant="outlined"
                margin="dense"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            xs={12}
            justify="space-around"
            alignItems="center"
          >
            <Grid item xs={12} sm={3}>
              <Typography variant="body1">Description</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows="4"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          <div style={{marginRight: "0.5%", marginBottom: "20%"}}>
          <Btn text='SAVE'/>
          </div>
        </div>
      </Modal>
    </div>
  );
}

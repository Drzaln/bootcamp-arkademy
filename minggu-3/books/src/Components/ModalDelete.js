import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Close from "@material-ui/icons/Close";
import Grid from "@material-ui/core/Grid";
import CheckCircleOutline from "@material-ui/icons/CheckCircleOutline";
import { Typography } from "@material-ui/core";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    boxShadow: `0px 4px 15px #4c4c4c`,
    outline: "none",
    borderRadius: 15,
    height: "45%",
    width: "40%",
    justifyContent: "center"
  },
  button: {
    marginLeft: "78%"
  },
  btnUp: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  },
  modDel: {
    position: "absolute"
  },
  littleBook: {
    position: "absolute",
    top: "30%",
    right: "10%",
    width: "15%",
    height: "45%",
    borderRadius: 16,
    boxShadow: `0px 4px 15px #4c4c4c`
  }
}));

export default function ModalDelete() {
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
        DELETE
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
            direction="row"
            justify="flex-end"
            alignItems="flex-start"
          >
            <Grid item xs={5} sm={5}>
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
            direction="column"
            justify="center"
            alignItems="center"
          >
            <CheckCircleOutline style={{ color: "#3DB39E", fontSize: 200 }} />
            <Typography variant="h5" component="h5">
              Data Sudah Dihapus!
            </Typography>
          </Grid>
        </div>
      </Modal>
    </div>
  );
}

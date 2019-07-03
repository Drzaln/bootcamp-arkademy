import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: 32,
    marginLeft: "89%"
  },
  dlmButton: {
    backgroundColor: "#F4CF5D",
    color: "white",
    fontWeight: "bold",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 16,
    fontSize: 32,
    "&:hover": {
      backgroundColor: "#DBBA53",
      borderColor: "#DBBA53"
    }
  }
}));

export default function ContainedButtons({text, onClick}) {
  const classes = useStyles();

  return (
    <div className={classes.button}>
      <Button
        onClick={onClick}
        variant="contained"
        className={classes.dlmButton}
      >
        {text}
      </Button>
    </div>
  );
}

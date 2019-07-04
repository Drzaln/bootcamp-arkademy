import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: 32,
    marginLeft: "89%"
  },
}));

export default function ContainedButtons(props) {
  const classes = useStyles();

  return (
    <div className={classes.button}>
      <Button
        onClick={props.click}
        variant="contained"
        className={props.clasName}
      >
        {props.teks}
      </Button>
    </div>
  );
}

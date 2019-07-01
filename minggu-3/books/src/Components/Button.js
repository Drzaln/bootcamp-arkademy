import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    merginTop: 408,
    marginBottom: 545,
    marginLeft: 1157
  },
  dlmButton: {
    backgroundColor: "#F4CF5D",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#DBBA53",
      borderColor: "#DBBA53"
    }
  }
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.button}>
      <Button variant="contained" className={classes.dlmButton} style={{paddingLeft: 53, paddingRight: 53, paddingTop: 25, paddingBottom: 25, borderRadius: 10, fontSize: 30}}>
        ADD
      </Button>
    </div>
  );
}

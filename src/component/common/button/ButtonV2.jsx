import React from "react";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

const styles = makeStyles({
  root: {
    background: (props) =>
      props.background || "white",
    borderRadius: 3,
    border: props=>props.border || 0,
    color: props=>props.color || "white",
    height: (props) => props.height || 48,
    width: (props) => props.width || 200,
    padding:props=>props.padding || "10px 30px",
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .1)",
    textTransform: "capitalize",
    borderRadius:props=>props.borderRadius,
    margin: (props) => props.margin || "5px auto",
    transition:"all 0.5s",
    display:"block",
    "&:hover": {
      backgroundColor: (props) => props.backgroundColor || "#ffa726",
      color:"white"
    },
  },
});

export default function ButtonV2(props) {
  const {
    background,
    width,
    children,
    backgroundColor,
    margin,
    height,
    padding,
    borderRadius,
    border,
    color,
    ...other
  } = props;
  const classes = styles({
    background,
    width,
    backgroundColor,
    margin,
    height,
    padding,
    borderRadius,
    border,
    color
  });
  return (
    <Button className={classes.root} {...other}>
      {children || "Button Custom"}
    </Button>
  );
}

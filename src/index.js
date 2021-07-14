import { withStyles } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const GlobalCss=withStyles({
  '@global':{
    '.MuiAppBar-colorPrimary':{
      backgroundColor:"white",
      color:"black",
      boxShadow: "0 3px 4px 1px rgba(0, 0, 0, .1)",
    }
  },
})(()=>null);


ReactDOM.render(
  <React.StrictMode>
    <GlobalCss></GlobalCss>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

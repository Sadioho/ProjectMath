import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import React, { useContext } from "react";
import { DataApp } from "../../../App";

function Question(props) {
  const stateGlobal = useContext(DataApp);

  return stateGlobal.data.map((item) => (
    <Box
      key={item.id}
      borderRadius={16}
      boxShadow={1}
      p={2}
      m={1}
    >
      <Typography variant="subtitle1" >
        {item.name}
      </Typography>
      <Typography variant="subtitle1" >
        {item.question}
      </Typography>
    </Box>
  ));
}

Question.propTypes = {};

export default Question;

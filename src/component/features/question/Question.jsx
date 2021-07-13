import React, { useContext } from "react";
import { DataApp } from "../../../App";
import "./question.scss"; 
function Question(props) {
  const stateGlobal=useContext(DataApp)

  return stateGlobal.data.map((item) => (
    <div className="question" key={item.id}>
      <p className="question__title">{item.name}</p>
      <p className="question__content">{item.question}</p>
    </div>
  ));
}

Question.propTypes = {};

export default Question;

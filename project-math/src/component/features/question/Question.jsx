import React from "react";
import "./question.scss";
function Question(props) {
  console.log(props.data);
  return props.data.map((item) => (
    <div className="question" key={item.id}>
      <p className="question__title">{item.name}</p>
      <p className="question__content">{item.question}</p>
    </div>
  ));
}

Question.propTypes = {};

export default Question;

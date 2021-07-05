import React, { useState } from "react";
import "./style.scss";
import Button from "../../common/button/Button";
import dots from "../../../image/3-dotted.png"
function DetailQuestion(props) {
  const [numberQuestion, setNumberQuestion] = useState(0);
  const lenghtData = props.data.length;
  const [listResult, setListResult] = useState([]);
  let count = 0;
  function handleResult(i, id) {
    const obj = {
      result_choise: i,
      id_question: id,
    };

    const check = listResult.filter((item) => item.id_question !== id);
    check
      ? setListResult([...check, obj])
      : setListResult([...listResult, obj]);
  }
  function handleFinish() {


    listResult &&
      listResult.map(
        (item) =>
          props.data.filter((i) => i.result_true === item.result_choise)
            .length !== 0 && (count += 1)
      );

    props.handleResult(count);
    props.handleOver(true);
  }
  return (
    <div className="detail_question">
      <div key={props.data[numberQuestion].id}>
        <div className="question">
          <p className="question__title">{props.data[numberQuestion].name}</p>
          <p className="question__content">
            {props.data[numberQuestion].question}
          </p>
        </div>
        <div className="detail_question__result">
          {props.data[numberQuestion].results.map((i, index) => (
            <div key={index} className="detail_question__result_item">
              <input
                type="radio"
                id={i}
                name={props.data[numberQuestion].name}
                value={i}
                defaultChecked={
                  listResult.filter(
                    (a) =>
                      a.result_choise === i &&
                      a.id_question === props.data[numberQuestion].id
                  ).length !== 0
                }
              />

              <label
                htmlFor={i}
                onClick={() => handleResult(i, props.data[numberQuestion].id)}
              >
                {i}
              </label>
            </div>
          ))}
          {props.data[numberQuestion].result}
        </div>
      </div>

      <div className="detail_question__toolbar">
        <div className="detail_question__toolbar_item-1">
          <div className="time">
            <i className="far fa-clock">
              <span>66:40</span>
            </i>
          </div>
          <div className="check">
            <input type="checkbox" id="check" />
            <label htmlFor="check"> Xem lại</label>
          </div>
        </div>
        <div className="detail_question__toolbar_item-2">
          {numberQuestion > 0 && (
            <button
              className="btn-back"
              onClick={() => setNumberQuestion(numberQuestion - 1)}
            ></button>
          )}
          {numberQuestion >= lenghtData - 1 ? (
            <></>
          ) : (
            <button
              className="btn-next"
              onClick={() => setNumberQuestion(numberQuestion + 1)}
            ></button>
          )}

          {numberQuestion === lenghtData -1 ? (
            <Button
              className="btn-yellow btn-small"
              content="Nộp bài"
              onClick={handleFinish}
            />
          ): <div className="dots" onClick={()=>console.log("âhaha")}><img src={dots} alt="" /></div> }
        </div>
      </div>
      <div className="list__answer">
        <div className="list__answer-header">
          <p className="list__answer-title">Bấm vào câu muốn trả lời</p>
          <Button
            className="btn-yellow btn-small"
            content="Nộp bài sớm"
            onClick={handleFinish}
          />
        </div>
        <div className="list__answer-item">
          {props.data.map((item, index) => (
            <span className="box" key={item.id}>{index + 1}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailQuestion;

import React, { useContext, useState } from "react";
import { DataApp } from "../../../App";
import {
  defaultChecked, filterByResult
} from "../../../helpers";
import dots from "../../../image/3-dotted.png";
import Button from "../../common/button/Button";
import Login from "../../layout/login/Login";
import Clock from "../clock/Clock";
import "./style.scss";

function DetailQuestion(props) {
  const stateGlobal = useContext(DataApp);

  const [numberQuestion, setNumberQuestion] = useState(0);
  const lenghtData = stateGlobal.data.length;
  const [listItemQuestion, setlistItemQuestion] = useState(false);
  const [listReview, setlistReview] = useState([]);
 
  let count = 0;
  function handleResult(i, id) {
    const obj = {
      result_choise: i.result_answer,
      id_question: id,
    };
    const check = stateGlobal.listResult.filter((item) => item.id_question !== id);
    check
      ? stateGlobal.handleListResult([...check, obj])
      : stateGlobal.handleListResult([...stateGlobal.listResult, obj]);
  }

  function handleFinish() {
    stateGlobal.listResult &&
      stateGlobal.listResult.map(
        (item) =>
          stateGlobal.data.filter(
            (i) => i.result_true === item.result_choise
          ).length !== 0 && (count += 1)
      );
    stateGlobal.handleShowResult(count);
    props.handleOver(true);
  }

  function plus() {
    setNumberQuestion(numberQuestion + 1);
  }
  function minus() {
    setNumberQuestion(numberQuestion - 1);
  }

  function setCheck(data, id) {
    const obj = {
      id_question: id,
      checked: data,
    };
    const check = listReview.filter((item) => item.id_question !== id);
    check
      ? setlistReview([...check, obj])
      : setlistReview([...listReview, obj]);
  } 
  
  return (
    <div className="detail_question">
      <div key={stateGlobal.data[numberQuestion].id}>
        <div className="question">
          <p className="question__title">{stateGlobal.data[numberQuestion].name}</p>
          <p className="question__content">
            {stateGlobal.data[numberQuestion].question}
          </p>
        </div>
        <div className="detail_question__result">
          {stateGlobal.data[numberQuestion].results.map((i, index) => (
            <div key={index} className="detail_question__result_item">
              <input
                type="radio"
                id={i.result_answer}
                name={stateGlobal.data[numberQuestion].name}
                value={i.result_answer}
                defaultChecked={defaultChecked(
                  stateGlobal.listResult,
                  stateGlobal.data[numberQuestion],
                  i
                )}
              />

              <label
                htmlFor={i.result_answer}
                onClick={() => handleResult(i, stateGlobal.data[numberQuestion].id)}
              >
                {`${i.name_answer}. ${i.result_answer}`}
              </label>
            </div>
          ))}
          {stateGlobal.data[numberQuestion].result}
        </div>
      </div>

      <div className="detail_question__toolbars">
        <div className="detail_question__toolbar">
          <div className="detail_question__toolbar_item-1">
            <div className="time">
              <i className="far fa-clock">
                <span><Clock/></span>
              </i>
            </div>
            <div className="check">
              <input
                type="checkbox"
                id="check"
                checked={defaultChecked(
                  listReview,
                  stateGlobal.data[numberQuestion],
                  null
                )}
                onChange={(e) =>
                  setCheck(e.target.checked, stateGlobal.data[numberQuestion].id)
                }
              />
              <label htmlFor="check"> Xem lại</label>
            </div>
          </div>
          <div className="detail_question__toolbar_item-2">
            {numberQuestion > 0 && (
              <button className="btn-back" onClick={minus}></button>
            )}
            {numberQuestion >= lenghtData - 1 ? (
              <></>
            ) : (
              <button className="btn-next" onClick={plus}></button>
            )}

            {numberQuestion === lenghtData - 1 ? (
              <Button
                className="btn-yellow btn-small"
                content="Nộp bài"
                onClick={handleFinish}
              />
            ) : (
              <div
                className="dots"
                onClick={() => setlistItemQuestion(!listItemQuestion)}
              >
                <img src={dots} alt="" />
              </div>
            )}
          </div>
        </div>
        {listItemQuestion === false ? null : (
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
            {stateGlobal.data.map((item, index) => (
              <span
                className={filterByResult(listReview, stateGlobal.listResult, item)}
                key={item.id}
                onClick={() => setNumberQuestion(index)}
              >
                {index + 1}
              </span>
            ))}
          </div>
        </div>
      )}
     
     
      </div>

    </div>
  );
}

export default DetailQuestion;

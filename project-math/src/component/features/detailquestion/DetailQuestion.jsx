import React, { useContext, useState } from "react";
import dots from "../../../image/3-dotted.png";
import Button from "../../common/button/Button";
import { DataContext } from "../../layout/main/Main";
import "./style.scss";
import {
  filterByResult,
  defaultChecked,
  defaultCheckedV2,
} from "../../../helpers";

function DetailQuestion(props) {
  const dataFun = useContext(DataContext);

  const [numberQuestion, setNumberQuestion] = useState(0);
  const lenghtData = dataFun.data.length;
  const [listResult, setListResult] = useState([]);
  const [listItemQuestion, setlistItemQuestion] = useState(false);
  const [listReview, setlistReview] = useState([]);

  let count = 0;
  function handleResult(i, id) {
    const obj = {
      result_choise: i.result_answer,
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
          dataFun.data.filter(
            (i) => i.result_true === item.result_choise.result_answer
          ).length !== 0 && (count += 1)
      );
    dataFun.handleResult(count);
    dataFun.handleOver(true);
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

  // console.log("list review: ", listResult);
  return (
    <div className="detail_question">
      <div key={dataFun.data[numberQuestion].id}>
        <div className="question">
          <p className="question__title">{dataFun.data[numberQuestion].name}</p>
          <p className="question__content">
            {dataFun.data[numberQuestion].question}
          </p>
        </div>
        <div className="detail_question__result">
          {dataFun.data[numberQuestion].results.map((i, index) => (
            <div key={index} className="detail_question__result_item">
              <input
                type="radio"
                id={i.result_answer}
                name={dataFun.data[numberQuestion].name}
                value={i.result_answer}
                defaultChecked={defaultChecked(
                  listResult,
                  dataFun.data[numberQuestion],
                  i
                )}
              />

              <label
                htmlFor={i.result_answer}
                onClick={() => handleResult(i, dataFun.data[numberQuestion].id)}
              >
                {`${i.name_answer}. ${i.result_answer}`}
              </label>
            </div>
          ))}
          {dataFun.data[numberQuestion].result}
        </div>
      </div>

      <div className="detail_question__toolbars">
        <div className="detail_question__toolbar">
          <div className="detail_question__toolbar_item-1">
            <div className="time">
              <i className="far fa-clock">
                <span>66:49</span>
              </i>
            </div>
            <div className="check">
              <input
                type="checkbox"
                id="check"
                checked={defaultChecked(
                  listReview,
                  dataFun.data[numberQuestion],
                  null
                )}
                onChange={(e) =>
                  setCheck(e.target.checked, dataFun.data[numberQuestion].id)
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
            {dataFun.data.map((item, index) => (
              <span
                className={filterByResult(listReview, listResult, item)}
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

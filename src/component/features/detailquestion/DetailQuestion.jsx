import {
  Box,
  Checkbox,
  FormControlLabel,
  makeStyles,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import { DataApp } from "../../../App";
import { defaultChecked, filterByResult } from "../../../helpers";
import dots from "../../../image/3-dotted.png";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Clock from "../clock/Clock";
import "./style.scss";
import ButtonV2 from "../../common/button/ButtonV2";
const useStyles = makeStyles((theme) => ({
  radio: {
    margin: theme.spacing(1, 0),
    border: "1px solid #eceff1",
    borderRadius: ".5rem",
    padding: theme.spacing(1, 0),
  },
}));
function DetailQuestion(props) {
  const stateGlobal = useContext(DataApp);
  const classes = useStyles();

  const [numberQuestion, setNumberQuestion] = useState(0);
  const lenghtData = stateGlobal.data.length;
  const [listItemQuestion, setlistItemQuestion] = useState(false);
  const [listReview, setlistReview] = useState([]);

  function handleResult(i, id) {
    const obj = {
      result_choise: i.result_answer,
      id_question: id,
    };
    const check = stateGlobal.listResult.filter(
      (item) => item.id_question !== id
    );
    check
      ? stateGlobal.setListResult([...check, obj])
      : stateGlobal.setListResult([...stateGlobal.listResult, obj]);
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
        <Box
          borderRadius={5}
          variant="outlined"
          border="0.5px solid #DEE2E6"
          p={2}
        >
          <Typography variant="body2" component="h2">
            {stateGlobal.data[numberQuestion].name}
          </Typography>
          <Typography variant="body2" component="h2">
            {stateGlobal.data[numberQuestion].question}
          </Typography>
        </Box>

        <RadioGroup>
          {stateGlobal.data[numberQuestion].results.map((i, index) => (
            <FormControlLabel
              className={classes.radio}
              onChange={() =>
                handleResult(i, stateGlobal.data[numberQuestion].id)
              }
              name={stateGlobal.data[numberQuestion].name}
              value={i.result_answer}
              control={<Radio color="primary" />}
              label={`${i.name_answer}. ${i.result_answer}`}
              checked={defaultChecked(
                stateGlobal.listResult,
                stateGlobal.data[numberQuestion],
                i
              )}
            />
          ))}
        </RadioGroup>
      </div>

      <div className="detail_question__toolbars">
        <div className="detail_question__toolbar">
          <div className="detail_question__toolbar_item-1">
            <div className="time">
              <i className="far fa-clock">
                <span>
                  <Clock
                    handleFinishV2={props.handleFinishV2}
                    handleFinish={props.handleFinish}
                    setOverLay={props.setOverLay}
                  />
                </span>
              </i>
            </div>
            <div className="check">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={defaultChecked(
                      listReview,
                      stateGlobal.data[numberQuestion],
                      null
                    )}
                    onChange={(e) =>
                      setCheck(
                        e.target.checked,
                        stateGlobal.data[numberQuestion].id
                      )
                    }
                    name="checkedA"
                  />
                }
                label="Xem Lại"
              />
            </div>
          </div>
          <div className="detail_question__toolbar_item-2">
            {numberQuestion > 0 && (
              <ButtonV2
                background="white"
                backgroundColor="#CAF0F8"
                onClick={minus}
                width="70px"
                height="35px"
                margin="0 3px"
                color="black"
                padding="5px 0px"
              >
                <ArrowBackIcon />
              </ButtonV2>
            )}
            {numberQuestion >= lenghtData - 1 ? (
              <></>
            ) : (
              <ButtonV2
                background="white"
                backgroundColor="#CAF0F8"
                onClick={plus}
                width="70px"
                height="35px"
                margin="0 3px"
                color="black"
                padding="5px 0px"
              >
                <ArrowForwardIcon />
              </ButtonV2>
            )}

            {numberQuestion === lenghtData - 1 ? (
              <ButtonV2
                width="100px"
                height="35px"
                padding="0"
                margin="0"
                onClick={props.handleFinish}
                background="#66bb6a"
                backgroundColor="#81c784"
              >
                Nộp Bài
              </ButtonV2>
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
              <ButtonV2
                onClick={props.handleFinish}
                width="100px"
                height="35px"
                padding="0"
                margin="0"
                background="#66bb6a"
                backgroundColor="#81c784"
              >
                Nộp bài sớm
              </ButtonV2>
            </div>
            <div className="list__answer-item">
              {stateGlobal.data.map((item, index) => (
                <span
                  className={filterByResult(
                    listReview,
                    stateGlobal.listResult,
                    item
                  )}
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

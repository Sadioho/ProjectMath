import React, { useContext } from "react";
import { DataApp } from "../../../App";
import { format_second_to_minutes } from "../../../helpers";
// import Button from "../../common/button/Button";
import Question from "../question/Question";
import "./exam.scss";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
    border: "none",
    fontSize: 15,
    background: "#FFC25B",
    margin: "auto",
    display: "block",
  },
  reset:{
    color:"white",
    fontSize:20,
    
  }
}));
function Exam(props) {
  const stateGlobal = useContext(DataApp);
  const classes = useStyles();
  return (
    <>
      <div className="exam">
        <h1 className="exam__title">Đề kiểm tra 1 tiết</h1>
        <div className="exam__detail-question">
          <i className="far fa-check-square">
            <span> {stateGlobal.data.length} Câu</span>
          </i>
          <i className="far fa-user">
            <span> 45 phút</span>
          </i>
        </div>
        {stateGlobal.finish === false ? (
          <>
            <div className="exam__question">
              <Question />
            </div>
            {/* <Button
              onClick={props.handleClick}
              className="btn-yellow btn-medium"
              content="BẮT ĐẦU THI"
            /> */}
            <Button
              classes={{ root: classes.root }}
              variant="contained"
              color="primary"
              onClick={props.handleClick}
              size="large"
            >
              BẮT ĐẦU THI
            </Button>
          </>
        ) : (
          <div className="finish">
            <div className="finish__title">
              <h1>Kết quả bạn đạt được</h1>
            </div>
            <div className="finish__content">
              <div className="finish__content-box">
                <p>Số câu đúng</p>
                <h1>
                  {stateGlobal.showResult}/{stateGlobal.data.length}
                </h1>
              </div>
              <div className="finish__content-box">
                <p>Điểm số</p>
                <h1>{stateGlobal.showResult * 1}</h1>
              </div>
              <div className="finish__content-box">
                <p>Thời gian làm bài</p>
                <h1>{`${format_second_to_minutes(
                  2700 - stateGlobal.timePause
                )}`}</h1>
              </div>
            </div>
            {stateGlobal.showResult * 2.5 <= 5 ? (
              <div className="finish__title red">
                <h1>Bạn cần cố gắng hơn nữa !</h1>
              </div>
            ) : (
              <div className="finish__title green">
                <h1>Chúc mừng bạn đã hoàn thành phần thi! 😂😂😂</h1>
              </div>
            )}
           
          </div>
        )}
      </div>
    </>
  );
}

Exam.propTypes = {};

export default Exam;

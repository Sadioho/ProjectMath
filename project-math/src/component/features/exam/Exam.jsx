import React, { useContext } from "react";
import { DataApp } from "../../../App";
import Button from "../../common/button/Button";
import Question from "../question/Question";
import "./exam.scss";
function Exam(props) {
  const stateGlobal = useContext(DataApp);
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
        {props.finish === false ? (
          <>
            <div className="exam__question">
              <Question data={props.data} />
            </div>
            <Button
              onClick={props.handleClick}
              className="btn-yellow btn-medium"
              content="BẮT ĐẦU THI"
            />
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
                <h1>{stateGlobal.showResult * 2.5}</h1>
              </div>
              <div className="finish__content-box">
                <p>Thời gian làm bài</p>
                <h1>{`${stateGlobal.seconds_to(
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

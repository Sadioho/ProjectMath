import React from "react";
import "./exam.scss";
import Question from "../question/Question";
import Button from "../../common/button/Button";
function Exam(props) {
  return (
    <>
      <div className="exam">
        <h1 className="exam__title">Đề kiểm tra 1 tiết</h1>
        <div className="exam__detail-question">
          <i className="far fa-check-square">
            <span> 30 Câu</span>
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
                  {props.showResult}/{props.data.length}
                </h1>
              </div>
              <div className="finish__content-box">
                <p>Điểm số</p>
                <h1>{props.showResult * 2.5}</h1>
              </div>
              <div className="finish__content-box">
                <p>Thời gian làm bài</p>
                <h1>33:59</h1>
              </div>
            </div>
            <div className="finish__title red">
              <h1>Bạn cần cố gắng hơn nữa !</h1>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

Exam.propTypes = {};

export default Exam;

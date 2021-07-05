import React, { useState } from "react";
import PropTypes from "prop-types";
import "./tutorial.scss";
import Checkbox from "../../../image/checkbox-icon.png";
import Radio from "../../../image/radio-icon.png";
import Back from "../../../image/back-question-icon.png";
import Next from "../../../image/next-question-icon.png";
import Button from "../../common/button/Button";
import DetailQuestion from "../detailquestion/DetailQuestion";
function Tutorial(props) {
  return (
    <>
      {props.exam === false ? (
        <>
          <div className="tutorial">
            <h1 className="tutorial__heading">Hướng dẫn làm bài trắc nghiệm</h1>
            <div className="tutorial__detail">
              <div className="tutorial__detail_item">
                <img className="tutorial__detail_icon " src={Radio} alt="" />
                <p className="one">Chọn câu trả lời đúng</p>
              </div>
              <div className="tutorial__detail_item ">
                <img className="tutorial__detail_icon" src={Checkbox} alt="" />
                <p className="one">
                  Đánh dấu <b>"xem lại"</b> nếu câu trả lời{" "}
                  <b>chưa chắc chắn</b>
                </p>
              </div>

              <div className="tutorial__detail_item">
                <img className="tutorial__detail_icon" src={Back} alt="" />
                <p>
                  Quay lại <b>câu trước</b>
                </p>
              </div>

              <div className="tutorial__detail_item">
                <img className="tutorial__detail_icon" src={Next} alt="" />
                <p>
                  Chuyển qua <b>câu kế tiếp</b>
                </p>
              </div>
            </div>
            <div className="tutorial__note">
              <h1>Lưu ý:</h1>
              <p>
                Những câu <b>chưa chọn đáp án</b> sẽ được tính là{" "}
                <b>câu trả lời sai</b>
              </p>
              <p>
                Nếu bạn <b>thoát ra</b> trong lúc chưa hết thời gian làm bài thì
                kết quả <b>sẽ không được tính</b>
              </p>
            </div>
          </div>
          <Button
            onClick={()=>props.handleExam()}
            className="btn-yellow btn-medium"
            content="BẮT ĐẦU THI"
          />
        </>
      ) : (
        <DetailQuestion handleOver={props.handleOver}  handleResult={props.handleResult} data={props.data}/>
      )}
    </>
  );
}

Tutorial.propTypes = {};

export default Tutorial;

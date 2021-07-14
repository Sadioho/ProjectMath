import React from "react";
import Back from "../../../image/back-question-icon.png";
import Checkbox from "../../../image/checkbox-icon.png";
import Next from "../../../image/next-question-icon.png";
import Radio from "../../../image/radio-icon.png";
import ButtonV2 from "../../common/button/ButtonV2";
import DetailQuestion from "../detailquestion/DetailQuestion";
import "./tutorial.scss";

function Tutorial(props) {
  const loadingExam = () => {
    props.setExam(true);
  };
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
              <h2>Lưu ý:</h2>
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

          <ButtonV2
            onClick={loadingExam}
            background="#66bb6a"
            backgroundColor="#81c784"
          >
            Bắt Đầu Thi
          </ButtonV2>
        </>
      ) : (
        <DetailQuestion
          handleFinish={props.handleFinish}
          setOverLay={props.setOverLay}
          handleFinishV2={props.handleFinishV2}
        />
      )}
    </>
  );
}

Tutorial.propTypes = {};

export default Tutorial;

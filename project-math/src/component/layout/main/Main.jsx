import React, { useContext, useState } from "react";
import { DataApp } from "../../../App";
import { countResult } from "../../../helpers";
import Button from "../../common/button/Button";
import Exam from "../../features/exam/Exam";
import TopExam from "../../features/top_exam/TopExam";
import Tutorial from "../../features/tutorial/Tutorial";
import "./main.scss";

function Main(props) {
  const stateGlobal = useContext(DataApp);

  const [overLay, setOverLay] = useState(false);
  const [tutorial, setTutorial] = useState(false);
  const [exam, setExam] = useState(false);

  function handleExam() {
    setExam(true);
  }
  function handleClick() {
    setTutorial(true);
  }

  function handleOver(data) {
    setOverLay(data);
  }

  function handleFinishV2() {
    stateGlobal.setFinishV2(true);
    handleOver(false);
    setTutorial(false);
    setExam(false);
    let count = countResult(stateGlobal.listResult, stateGlobal.data, 0);
    stateGlobal.handleShowResult(count);
  }

  // let count = 0;
  function handleFinish() {
    let count = countResult(stateGlobal.listResult, stateGlobal.data, 0);
    stateGlobal.handleShowResult(count);
    stateGlobal.setTimePauseV2(stateGlobal.timeCountDown);
    handleOver(true);
  }

  return (
    <div className="main">
      <div className="container">
        {overLay && (
          <div className="container_overlay" onClick={() => handleOver(false)}>
            <div className="overlay">
              <div className="overlay__content">
                <h3 className="overlay__content-title">
                  {stateGlobal.data.length - stateGlobal.listResult.length > 0
                    ? `Bạn còn  ${
                        stateGlobal.data.length - stateGlobal.listResult.length
                      }  câu chưa trả lời 😩😩`
                    : "Bạn đã làm xong bài thi 😍"}
                </h3>
                <p>
                  Thời gian còn ⌚{" "}
                  {stateGlobal.seconds_to(stateGlobal.timePause)}
                </p>
                <p>Bạn đồng ý nộp bài ✅</p>
              </div>
              <div className="overlay__button">
                <Button
                  onClick={() => handleFinishV2()}
                  content="Nộp bài 📑"
                  className="btn-yellow btn-overlay "
                />
                <Button
                  onClick={() => handleOver(false)}
                  content="Làm tiếp 🎮"
                  className="btn-blue btn-overlay"
                />
              </div>
            </div>
          </div>
        )}
        <div className="row align-items-start">
          <div className="col-9 main__content">
            <div className="main__content_item">
              {tutorial === false ? (
                <Exam finish={stateGlobal.finish} handleClick={handleClick} />
              ) : (
                <Tutorial
                  handleExam={handleExam}
                  exam={exam}
                  handleOver={handleOver}
                  handleFinishV2={handleFinishV2}
                  handleFinish={handleFinish}
                />
              )}
            </div>
          </div>
          <div className="col-3 main__ratings">
            {!tutorial && !stateGlobal.finish ? (
              <>
                <div className="main__ratings_header"></div>
                <p className="main__ratings_text">
                  Bạn có muốn chinh phục đề thi này ?
                </p>
                <div className="main__ratings_main">
                  <Button
                    onClick={handleClick}
                    className="btn-yellow btn-max "
                    content="Có, tôi muốn thi?"
                  />
                  <Button
                    className="btn-blue btn-max"
                    content="Chia sẻ lên facebook"
                  />
                </div>
              </>
            ) : (
              <TopExam />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Main.propTypes = {};

export default Main;

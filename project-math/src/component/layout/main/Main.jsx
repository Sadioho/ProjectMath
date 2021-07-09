import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { DataApp } from "../../../App";
import { countResult } from "../../../helpers";
import Button from "../../common/button/Button";
import Exam from "../../features/exam/Exam";
import TopExam from "../../features/top_exam/TopExam";
import Tutorial from "../../features/tutorial/Tutorial";
import "./main.scss";
import { Spinner } from "../../spinner/Spinner";
import { ViewResult } from "../../features/ViewResult/ViewResult";

function Main(props) {
  const stateGlobal = useContext(DataApp);
  let history = useHistory();
  const [overLay, setOverLay] = useState(false);
  const [tutorial, setTutorial] = useState(false);
  const [exam, setExam] = useState(false);

  function handleClick() {
    if (!localStorage.getItem("my-info")) {
      history.push("/login");
    } else {
      setTutorial(true);
    }
  }

  function handleFinishV2() {
    stateGlobal.setFinish(true);
    setOverLay(false);
    setTutorial(false);
    setExam(false);
    let count = countResult(stateGlobal.listResult, stateGlobal.data, 0);
    stateGlobal.setShowResult(count);
    localStorage.removeItem("loadingExam")
  }

  // let count = 0;
  function handleFinish() {
    let count = countResult(stateGlobal.listResult, stateGlobal.data, 0);
    stateGlobal.setShowResult(count);
    stateGlobal.setTimePause(stateGlobal.timeCountDown);
    setOverLay(true);
  }

  return (
    <div className="main">
      <div className="container">
        {overLay && (
          <div className="container_overlay" onClick={() => setOverLay(false)}>
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
                  {stateGlobal.format_second_to_minutes(stateGlobal.timePause)}
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
                  onClick={() => setOverLay(false)}
                  content="Làm tiếp 🎮"
                  className="btn-blue btn-overlay"
                />
              </div>
            </div>
          </div>
        )}
        <div className="row align-items-start">
          <div className="col-8 main__content">
            <div className="main__content_item">
              {!stateGlobal.isLoading ? (
                <Spinner />
              ) : tutorial === false ? (
                <Exam  handleClick={handleClick} />
              ) : (
                <Tutorial
                  setExam={setExam}
                  exam={exam}
                  setOverLay={setOverLay}
                  handleFinishV2={handleFinishV2}
                  handleFinish={handleFinish}
                />
              )}
            </div>
          </div>
          <div className="col-4 main__ratings">
            {stateGlobal.finish && <ViewResult />}
            {!tutorial && !stateGlobal.finish && !localStorage.getItem("loadingExam") ? (
              <>
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

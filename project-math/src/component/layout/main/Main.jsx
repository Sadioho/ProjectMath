import React, { useContext, useState } from "react";
import { DataApp } from "../../../App";
import Button from "../../common/button/Button";
import Exam from "../../features/exam/Exam";
import TopExam from "../../features/top_exam/TopExam";
import Tutorial from "../../features/tutorial/Tutorial";
import "./main.scss";

function Main(props) {
  const stateGlobal = useContext(DataApp);

  const [tutorial, setTutorial] = useState(false);
  const [overLay, setOverLay] = useState(false);
  const [finish, setFinish] = useState(false);
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
  function handleFinish() {
    setFinish(true);
    setOverLay(false);
    setTutorial(false);
    setExam(false);
  }




console.log("haha");

  return (
    <div className="main">
      <div className="container">
        {overLay && (
          <div className="container_overlay" onClick={() => handleOver(false)}>
            <div className="overlay">
              <div className="overlay__content">
                <h3 className="overlay__content-title">
                
                   {`Bạn còn ${stateGlobal.data.length - stateGlobal.listResult.length} câu chưa trả lời `}
                  
                </h3>
                <p>Thời gian còn ({})</p>
                <p>Bạn đồng ý nộp bài</p>
              </div>
              <div className="overlay__button">
                <Button
                  onClick={() => handleFinish()}
                  content="Nộp bài"
                  className="btn-yellow btn-overlay "
                />
                <Button
                  onClick={() => handleOver(false)}
                  content="Làm tiếp"
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
                <Exam finish={finish} handleClick={handleClick} />
              ) : (
                <Tutorial
                  handleExam={handleExam}
                  exam={exam}
                  handleOver={handleOver}
                />
              )}
            </div>
          </div>
          <div className="col-3 main__ratings">
            {!tutorial && !finish ? (
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

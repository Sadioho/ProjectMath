import React, { useEffect, useState } from "react";
import Button from "../../common/button/Button";
import Exam from "../../features/exam/Exam";
import Tutorial from "../../features/tutorial/Tutorial";
import "./main.scss";
// import DetailQuestion from "../../features/detailquestion/DetailQuestion";

export const DataContext = React.createContext(null);
function Main(props) {
  const [data, setData] = useState([]);
  const [tutorial, setTutorial] = useState(false);
  const [showResult, setShowResult] = useState(0);
  const [overLay, setOverLay] = useState(false);
  const [finish, setFinish] = useState(false);
  const [exam, setExam] = useState(false);

  function handleExam() {
    setExam(true);
  }
  function handleClick() {
    setTutorial(true);
  }
  function handleResult(data) {
    setShowResult(data);
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
  useEffect(() => {
    async function fetchListQuestion() {
      const requestUrl = "http://localhost:3000/list_question";
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      setData(responseJSON);
    }
    fetchListQuestion();
    return () => {};
  }, []);

  // console.log(showResult);

  return (
    <div className="main">
      <div className="container">
        {overLay && (
          <div className="overlay">
            <div className="overlay__content">
              <h3 className="overlay__content-title">
                Bạn còn 40 câu chưa trả lời?
              </h3>
              <p>Thời gian còn (58 phút 48 giây)</p>
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
        )}
        <div className="row align-items-start">
          <div className="col-9 main__content">
            <div className="main__content_item">
              {tutorial === false ? (
                <Exam
                  showResult={showResult}
                  finish={finish}
                  data={data}
                  handleClick={handleClick}
                />
              ) : (
                <DataContext.Provider
                  value={{
                    data: data,
                    handleOver: handleOver,
                    handleResult: handleResult,
                  }}
                >
                  <Tutorial handleExam={handleExam} exam={exam} />
                </DataContext.Provider>
              )}
            </div>
          </div>
          <div className="col-3 main__ratings">
            {!tutorial && (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Main.propTypes = {};

export default Main;

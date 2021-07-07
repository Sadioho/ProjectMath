import "./app.scss";
import Header from "./component/layout/header/Header";
import Footer from "./component/layout/footer/Footer";
import Main from "./component/layout/main/Main";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./component/layout/login/Login";
import Signup from "./component/layout/signup/Signup"

export const DataApp = React.createContext(null);

function App() {
  const [data, setData] = useState([]);
  const [listResult, setListResult] = useState([]);
  const [showResult, setShowResult] = useState(0);
  const [finish, setFinish] = useState(false);
  const [timeCountDown, setTimeCountDown] = useState(0);
  const [timePause, setTimePause] = useState(0);


  function setTimePauseV2(data) {
    setTimePause(data);
  }

  function setTimeCountDownV2(data) {
    setTimeCountDown(data);
  }

  function setFinishV2(data) {
    setFinish(data);
  }

  function handleShowResult(data) {
    setShowResult(data);
  }

  function handleListResult(data) {
    setListResult(data);
  }

  useEffect(() => {
    async function fetchListQuestion() {
      const requestUrl = "http://localhost:3002/list_question";
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      setData(responseJSON);
    }
    fetchListQuestion();
    return () => {};
  }, []);


  const seconds_to = (sec) => {
    var hours = Math.floor(sec / 3600);
    hours >= 1 ? (sec = sec - hours * 3600) : (hours = "00");
    var min = Math.floor(sec / 60);
    min >= 1 ? (sec = sec - min * 60) : (min = "00");
    sec < 1 ? (sec = "00") : void 0;
    min.toString().length === 1 ? (min = "0" + min) : void 0;
    sec.toString().length === 1 ? (sec = "0" + sec) : void 0;
    return  min + ":" + sec;
  };

  return (
    <Router>
      <DataApp.Provider
        value={{
          data: data,
          listResult: listResult,
          handleListResult: handleListResult,
          showResult: showResult,
          handleShowResult: handleShowResult,
          timeCountDown: timeCountDown,
          setTimeCountDownV2: setTimeCountDownV2,
          seconds_to: seconds_to,
          setFinishV2: setFinishV2,
          finish: finish,
          setTimePauseV2: setTimePauseV2,
          timePause: timePause,
        }}
      >
        <Header />

        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>

        <Footer />
      </DataApp.Provider>
    </Router>
  );
}

export default App;

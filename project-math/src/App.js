import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import "./app.scss";
import Footer from "./component/layout/footer/Footer";
import Header from "./component/layout/header/Header";
import Login from "./component/layout/login/Login";
import Main from "./component/layout/main/Main";
import Signup from "./component/layout/signup/Signup";

export const DataApp = React.createContext(null);

function App() {
  const [data, setData] = useState([]);
  const [listResult, setListResult] = useState([]);
  const [showResult, setShowResult] = useState(0);
  const [finish, setFinish] = useState(false);
  const [timeCountDown, setTimeCountDown] = useState(0);
  const [timePause, setTimePause] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    async function fetchListQuestion() {
      const requestUrl = "http://localhost:3002/list_question";
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      setData(responseJSON);
      setIsLoading(true);
    }
    fetchListQuestion();
    if (localStorage.getItem("my-info")) {
      let fullName =
        JSON.parse(localStorage.getItem("my-info")).firstName +
        " " +
        JSON.parse(localStorage.getItem("my-info")).lastName;
      setUserName(fullName);
      setLoginSuccess(true);
    }
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
    return min + ":" + sec;
  };

  return (
    <Router>
      <DataApp.Provider
        value={{
          data: data,
          listResult: listResult,
          setListResult: setListResult,
          showResult: showResult,
          setShowResult: setShowResult,
          timeCountDown: timeCountDown,
          setTimeCountDown: setTimeCountDown,
          seconds_to: seconds_to,
          setFinish: setFinish,
          finish: finish,
          setTimePause: setTimePause,
          timePause: timePause,
          //login
          userName: userName,
          setUserName: setUserName,
          loginSuccess: loginSuccess,
          setLoginSuccess: setLoginSuccess,
          isLoading: isLoading,
        }}
      >
        <Header />
        <Route path="/" exact>
          <Main />
        </Route>

        <Route
          path="/login"
          exact
          render={() => {
            return !localStorage.getItem("my-info") ? (
              <Login />
            ) : (
              <Redirect to="/" />
            );
          }}
        ></Route>
        <Route
          path="/signup"
          exact
          render={() => {
            return !localStorage.getItem("my-info") ? (
              <Signup />
            ) : (
              <Redirect to="/" />
            );
          }}
        ></Route>
        <Footer />
      </DataApp.Provider>
    </Router>
  );
}

export default App;

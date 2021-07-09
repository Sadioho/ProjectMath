import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Redirect, Route ,Switch} from "react-router-dom";
import "./app.scss";
import Footer from "./component/layout/footer/Footer";
import Header from "./component/layout/header/Header";
import Login from "./component/layout/login/Login";
import Main from "./component/layout/main/Main";
import Signup from "./component/layout/signup/Signup";
import { _isEmpty } from "./helpers";
// import { CurrencyProvider,useCurrency } from "./hooks/demoContext";

export const DataApp = React.createContext(null);

function App() {
  const [data, setData] = useState([]);
  const [listResult, setListResult] = useState([]);
  const [showResult, setShowResult] = useState(0);
  const [finish, setFinish] = useState(false);
  const [timeCountDown, setTimeCountDown] = useState(0);
  const [timePause, setTimePause] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [loginSuccess, setloginSuccess] = useState(false)




  useEffect(() => {
    async function fetchListQuestion() {
      const requestUrl = "http://localhost:3000/list_question";
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      setData(responseJSON);
      setIsLoading(true);
    }
    
    fetchListQuestion();

    if(!_isEmpty(localStorage.getItem('my-info'))){
      setloginSuccess(true)
    }
    return () => {};
  }, []);

  const format_second_to_minutes = (sec) => {
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
      <Header loginSuccess={loginSuccess} setloginSuccess={setloginSuccess}/>
      <Route path="/" exact>
        <DataApp.Provider
          value={{
            data: data,
            listResult: listResult,
            setListResult: setListResult,
            showResult: showResult,
            setShowResult: setShowResult,
            timeCountDown: timeCountDown,
            setTimeCountDown: setTimeCountDown,
            format_second_to_minutes: format_second_to_minutes,
            finish: finish,
            setFinish: setFinish,
            setTimePause: setTimePause,
            timePause: timePause,
            isLoading: isLoading,
            
          }}
        >
          <Main />
        </DataApp.Provider>
      </Route>
      <Route
        path="/login"
        render={() => {
          return _isEmpty(localStorage.getItem("my-info")) ? (
            <Login setloginSuccess={setloginSuccess}/>
          ) : (
            <Redirect to="/"  />
          );
        }}
      ></Route>
      <Route
        path="/signup"
        render={() => {
          return _isEmpty(localStorage.getItem("my-info")) ? (
            <Signup setloginSuccess={setloginSuccess}/>
          ) : (
            <Redirect to="/" />
          );
        }}
      ></Route>
      <Footer />
    </Router>
  );
}

export default App;

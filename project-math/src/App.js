import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
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
  const [loginSuccess, setloginSuccess] = useState(false);

  const [listUser, setlistUser] = useState([]);
  const [reload, setreload] = useState();

  useEffect(() => {
    async function fetchListQuestion() {
      const requestUrl = "http://localhost:3000/list_question";
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      setData(responseJSON);
      setIsLoading(true);
    }
    fetchListQuestion();
    if (!_isEmpty(localStorage.getItem("my-info"))) {
      setloginSuccess(true);
    }
  }, []);

  async function fetchUsers() {
    const requestUrl = "http://localhost:3000/users";
    const response = await fetch(requestUrl);
    const responseJSON = await response.json();
    setlistUser(responseJSON);
  }

  useEffect(() => {
    fetchUsers();
  }, [reload]);

  return (
    <Router>
      <Header
        setFinish={setFinish}
        loginSuccess={loginSuccess}
        setloginSuccess={setloginSuccess}
        setListResult={setListResult}
      />
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
            finish: finish,
            setFinish: setFinish,
            setTimePause: setTimePause,
            timePause: timePause,
            isLoading: isLoading,

            setreload: setreload,
            listUser: listUser,
          }}
        >
          <Main />
        </DataApp.Provider>
      </Route>
      <Route
        path="/login"
        render={() => {
          return _isEmpty(localStorage.getItem("my-info")) ? (
            <Login setloginSuccess={setloginSuccess} listUser={listUser} />
          ) : (
            <Redirect to="/" />
          );
        }}
      ></Route>
      <Route
        path="/signup"
        render={() => {
          return _isEmpty(localStorage.getItem("my-info")) ? (
            <Signup setloginSuccess={setloginSuccess} listUser={listUser} setreload={setreload}/>
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

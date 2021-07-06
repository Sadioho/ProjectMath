import "./app.scss";
import Header from "./component/layout/header/Header";
import Footer from "./component/layout/footer/Footer";
import Main from "./component/layout/main/Main";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./component/layout/login/Login";
export const DataApp = React.createContext(null);

function App() {
  const [data, setData] = useState([]);
  const [listResult, setListResult] = useState([]);
  const [showResult, setShowResult] = useState(0);
  const [timer, setTimer] = useState(0);
 

  function handleShowResult(data) {
    setShowResult(data);
  }

  function handleListResult(data) {
    setListResult(data);
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


  const setTimerOclock = (data) => {
    setTimer(data);
  };

  const seconds_to = (sec) => {
    var hours = Math.floor(sec / 3600);
    hours >= 1 ? (sec = sec - hours * 3600) : (hours = "00");
    var min = Math.floor(sec / 60);
    min >= 1 ? (sec = sec - min * 60) : (min = "00");
    sec < 1 ? (sec = "00") : void 0;
    min.toString().length === 1 ? (min = "0" + min) : void 0;
    sec.toString().length === 1 ? (sec = "0" + sec) : void 0;
    return hours + ":" + min + ":" + sec;
  };

console.log("timer,app",seconds_to(timer));


  return (
    <Router>
      <DataApp.Provider
      value={{
        data: data,
        listResult: listResult,
        handleListResult: handleListResult,
        showResult: showResult,
        handleShowResult: handleShowResult,
        timer:timer,
        setTimerOclock:setTimerOclock,
        seconds_to:seconds_to,

        
        
      }}
    >
      <Header />

      <Route path="/" exact><Main /></Route> 
      <Route path="/login" exact><Login /></Route> 
      
      <Footer />
    </DataApp.Provider>
    </Router>
  );
}

export default App;

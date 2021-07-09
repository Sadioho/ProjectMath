import React, { useContext } from "react";
import { DataApp } from "../../../App";
import "./style.scss";
export const ViewResult = () => {
  const stateGlobal = useContext(DataApp);
  // let a=stateGlobal.data.map((item) => (
  //   stateGlobal.listResult.filter(i => i.result_choise === item.result_true && i.id_question === item.id ).length !== 0 
  // ))

  // let b=stateGlobal.data.map((item) => (
  //   stateGlobal.listResult.filter(i => i.id_question === item.id ).length !== 0 
  // ))
  // console.log("cau hoi da tl:",b);
  // console.log("Câu đúng sai",a);
  // console.log(stateGlobal.listResult);
  return (
    <div className="view-result">
      <div className="main__ratings_header">
        <h1>Bấm vào câu đã làm</h1>
        <p>để xem lại đáp án + lời giải chi tiết</p>
      </div>
      <div className="view-result__number">
        {stateGlobal.data.map((item, index) => (
          <span
            onClick={() => console.log(item.id)}
            className={`view-result__number-box 
          ${ stateGlobal.finish && stateGlobal.listResult.filter(i => i.result_choise === item.result_true && i.id_question === item.id ).length !== 0 ? "success2" : "fail2"}
            ` }
        
          >
            {index + 1}
          </span>
        ))}
      </div>
    </div>
  );
};

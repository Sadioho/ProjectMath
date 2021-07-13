import React, { useContext } from "react";
import { DataApp } from "../../../App";
import "./style.scss";
export const ViewResult = () => {
  const stateGlobal = useContext(DataApp);
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

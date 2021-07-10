import React, { useContext, useState } from "react";
import { DataApp } from "../../../App";
import { format_second_to_minutes } from "../../../helpers";
import "./style.scss";

export default function TopExam() {
  const stateGlobal = useContext(DataApp);
  const [number, setnumber] = useState(5);
  let arrUser = stateGlobal.listUser.sort((a, b) =>
    b.point - a.point === 0 ? a.time - b.time : b.point - a.point
  );

  return (
    <>
      <div className="main__scores">
        <h1 className="main__scores_title">Top 10/3000 lượt thi</h1>
      </div>
      <div className="main__listExam">
        <table>
          <tbody>
            <tr>
              <th>Tên</th>
              <th>Điểm</th>
              <th>Thời gian</th>
            </tr>
            {arrUser !== null &&
              arrUser.map(
                (item, index) =>
                  index < number &&
                  item.point > 7 && (
                    <tr>
                      <td>
                        🥇{item.firstName} {item.lastName}
                      </td>
                      <td>{item.point}</td>
                      <td>{format_second_to_minutes(item.time)}</td>
                    </tr>
                  )
              )}
          </tbody>
        </table>
        {number < arrUser.length && (
          <div className="view">
            <span onClick={() => setnumber(10)}>Xem Thêm</span>
          </div>
        )}
      </div>
    </>
  );
}

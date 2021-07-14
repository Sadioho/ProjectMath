import React, { useContext, useState } from "react";
import { DataApp } from "../../../App";
import { format_second_to_minutes } from "../../../helpers";
import ButtonV2 from "../../common/button/ButtonV2";
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
        <h3 className="main__scores_title">Top Lượt Thi</h3>
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
                  item.point >= 7 && (
                    <tr key={index}>
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
        {number > 5 && number <= 10 && (
          <ButtonV2
            width="37"
            height="35"
            background="#4caf50"
            backgroundColor="#66bb6a"
            onClick={() => setnumber(10)}
          >
            Xem thêm
          </ButtonV2>
        )}
      </div>
    </>
  );
}

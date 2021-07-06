import React from "react";

export default function TopExam() {
  return (
    <>
      <div className="main__scores">
        <h1 className="main__scores_title">Top 10/3000 lượt thi</h1>{" "}
      </div>
      <div className="main__listExam">
        <table>
          <tbody>
            <tr>
              <th>Tên</th>
              <th>Điểm</th>
              <th>Thời gian</th>
            </tr>
            <tr>
              <td>🥇Hồ Xuân Anh</td>
              <td>10đ</td>
              <td>1:30</td>
            </tr>
            <tr>
              <td>🥈Lê Công Hòa</td>
              <td>10đ</td>
              <td>1:40</td>
            </tr>
            <tr>
              <td>🥉Lê Quốc Cường</td>
              <td>9.0đ</td>
              <td>2:00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

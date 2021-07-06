import React from "react";
import "./style.scss";
import Button from "../../common/button/Button";
export default function Login() {
  return (
    <div className="login">
      <div className="login__title">
        <h3>Xin chào!✌️ Chúc bạn có một ngày tốt lành 🤪🤪🤪🤪</h3>
      </div>
      <div className="login__fb">
        <Button
          content="Đăng nhập nhanh bằng Facebook"
          className="btn-blue btn-max btn-font-size"
        />
      </div>
      <span className="login__or"></span>
      <div className="login__email">
        <input type="email" placeholder="Nhập Email hoặc số điện thoại"/>
        <input type="password" placeholder="Nhập mật khẩu" />
        <div className="login__forget">
          <span>Quên mật khẩu? </span>
          <a className="login__forget-link" href="#a">
            Nhấn vào đây
          </a>
        </div>
        <Button
          content="Đăng nhập "
          className="btn-red btn-max btn-font-size"
        />
        <div className="login__sigup">
          <span>Nếu bạn chưa có tài khoản ? </span>
          <a className="login__forget-link" href="#a">
            Đăng ký ngay
          </a>
        </div>
      </div>
    </div>
  );
}

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataApp } from "../../../App";
import Logo from "../../../image/trac-nghiem-online.png";
import "./header.scss";

function Header(props) {
  const stateGlobal = useContext(DataApp);
  function signout(){
    stateGlobal.setLoginSuccess(false);
    localStorage.removeItem("my-info");
  }
  return (
    <header className="header">
      <div className="container">
        <div className="row align-items-center">
          <div className="header__logo ">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="header__navbar">
            <div className="header__nav">
              <nav>
                <ul className="header__nav_item">
                  <li>
                    <a href="http://#">THI THPTQG</a>
                  </li>
                  <li>
                    <a href="http://#">ĐỀ KIỂM TRA</a>
                  </li>
                  <li>
                    <a href="http://#">ENGLISH TEST</a>
                  </li>
                  <li>
                    <a href="http://#">IT TEST</a>
                  </li>
                  <li>
                    <a href="http://#">ĐẠI HỌC</a>
                  </li>
                  <li>
                    <a href="http://#"> HƯỚNG NGHIỆP</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header__login">
              {stateGlobal.loginSuccess ? (
                <div className="login-success">
                  <a href="/#" className="username">
                    <span> {stateGlobal.userName}</span>
                    <i className="header__login_icon  fas fa-user-tie"></i>
                  </a>
                  <a href="/#" onClick={signout} className="signup">
                    <span> Đăng xuất</span>
                    <i className="header__login_icon fas fa-sign-out-alt"></i>
                  </a>
                </div>
              ) : (
                <Link to="/login">
                  <span>Đăng nhập</span>
                  <i className="header__login_icon  fas fa-user-tie"></i>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="header__breadcrumb">
        <div className="container">
          <h3>ĐỀ KIỂM TRA</h3>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {};

export default Header;

import React from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../../image/trac-nghiem-online.png";
import "./header.scss";


function Header(props) {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("my-info"));
  function signout() {
    props.setloginSuccess(false)
    props.setFinish(false)
    props.setListResult([])
    localStorage.removeItem("my-info");
    history.push("/login");
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
              { props.loginSuccess ? (
                <div className="login-success">
                  <label htmlFor="check-logout">
                  <div className="username  button-sigin">
                    <span>
                      {user.firstName} {user.lastName}
                    </span>
                    <i className="header__login_icon  fas fa-user-tie"></i>
                  </div>
                  </label>
                  <input type="checkbox" id="check-logout"/>

                  <div onClick={signout} className="signup ">
                    <i className=" fas fa-sign-out-alt"></i>
                    <span> Đăng xuất</span>
                  </div>
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

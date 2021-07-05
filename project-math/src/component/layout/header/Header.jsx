import React from "react";
import Logo from "../../../image/trac-nghiem-online.png";
import "./header.scss";

function Header(props) {
  return (
    <header className="header">
      <div className="container">
        <div className="row align-items-center">
          <div className="header__logo ">
            <img src={Logo} alt="" />
          </div>
          <div className="header__navbar">
            <div className="header__nav">
              <nav>
                <ul className="header__nav_item">
                  <li><a href="http://#">THI THPTQG</a></li>
                  <li><a href="http://#">ĐỀ KIỂM TRA</a></li>
                  <li><a href="http://#">ENGLISH TEST</a></li>
                  <li><a href="http://#">IT TEST</a></li>
                  <li><a href="http://#">ĐẠI HỌC</a></li>
                  <li><a href="http://#"> HƯỚNG NGHIỆP</a></li>
                  <li><a href="http://#">TÀI LIỆU</a></li>
                </ul>
              </nav>
            </div>
            <div className="header__login">
              <a href="/#">
                <span>Đăng nhập</span>
                <i className="header__login_icon  fas fa-user-tie"></i>
              </a>
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

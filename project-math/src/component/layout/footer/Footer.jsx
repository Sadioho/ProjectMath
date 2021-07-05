import React from "react";
import PropTypes from "prop-types";
import "./footer.scss";
import LogoFooter from "../../../image/logo-footer.png";

function Footer(props) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__logo">
          <img src={LogoFooter} alt="" />
        </div>
        <div className="footer__widget">
          <div className="footer__nav">
            <ul className="footer__nav_item">
              <li className="footer__nav_title">
                <a href="#a">THI THPT QG</a>
              </li>
              <li className="footer__nav_title">
                <a href="#a">Môn Toán-Văn-Anh</a>
              </li>
              <li className="footer__nav_title">
                <a href="#a">Môn Toán-Văn-Anh</a>
              </li>
              <li className="footer__nav_title">
                <a href="#a">Môn Toán-Văn-Anh</a>
              </li>
            </ul>

            <ul className="footer__nav_item">
              <li className="footer__nav_title">
                <a href="#a">THI THPT QG</a>
              </li>
              <li className="footer__nav_title">
                <a href="#a">Môn Toán-Văn-Anh</a>
              </li>
              <li className="footer__nav_title">
                <a href="#a">Môn Toán-Văn-Anh</a>
              </li>
              <li className="footer__nav_title">
                <a href="#a">Môn Toán-Văn-Anh</a>
              </li>
            </ul>

            <ul className="footer__nav_item">
              <li className="footer__nav_title">
                <a href="#a">THI THPT QG</a>
              </li>
              <li className="footer__nav_title">
                <a href="#a">Môn Toán-Văn-Anh</a>
              </li>
              <li className="footer__nav_title">
                <a href="#a">Môn Toán-Văn-Anh</a>
              </li>
              <li className="footer__nav_title">
                <a href="#a">Môn Toán-Văn-Anh</a>
              </li>
            </ul>

            <ul className="footer__nav_item">
              <li className="footer__nav_title">
                <a href="#a">THI THPT QG</a>
              </li>
              <li className="footer__nav_title">
                <a href="#a">Môn Toán-Văn-Anh</a>
              </li>
              <li className="footer__nav_title">
                <a href="#a">Môn Toán-Văn-Anh</a>
              </li>
              <li className="footer__nav_title">
                <a href="#a">Môn Toán-Văn-Anh</a>
              </li>
            </ul>

            <ul className="footer__nav_item">
              <li className="footer__nav_title">
                <a href="#a">THI THPT QG</a>
              </li>
              <li className="footer__nav_title">
                <a href="#a">Môn Toán-Văn-Anh</a>
              </li>
              <li className="footer__nav_title">
                <a href="#a">Môn Toán-Văn-Anh</a>
              </li>
              <li className="footer__nav_title">
                <a href="#a">Môn Toán-Văn-Anh</a>
              </li>
            </ul>

            <ul className="footer__nav_item">
              <li className="footer__nav_title">
                <a href="#a">THI THPT QG</a>
              </li>
              <li className="footer__nav_title">
                <a href="#a">Môn Toán-Văn-Anh</a>
              </li>
              <li className="footer__nav_title">
                <a href="#a">Môn Toán-Văn-Anh</a>
              </li>
              <li className="footer__nav_title">
                <a href="#a">Môn Toán-Văn-Anh</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__coppyright">
          <p> Copyright © 2021 by Danny Hồ </p>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;

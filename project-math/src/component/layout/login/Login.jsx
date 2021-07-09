import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import Button from "../../common/button/Button";
import { Spinner2 } from "../../spinner/Spinner2";
import "./style.scss";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(15).required(),
  // confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

export default function Login(props) {
  const [users, setUsers] = useState([]);
  const [loginError, setLoginError] = useState(false);

  let history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function fetchUsers() {
    const requestUrl = "http://localhost:3000/users";
    const response = await fetch(requestUrl);
    const responseJSON = await response.json();
    setUsers(responseJSON);
  }

  function setLoginErrorV2() {
    setLoginError(true);
  }

  useEffect(() => {
    fetchUsers();
    return () => {};
  }, []);

  const submitForm = (data) => {
    let checkLogin = users.filter(
      (item) => item.email === data.email && item.password === data.password
    );
    if (checkLogin.length === 1) {
      localStorage.setItem("my-info", JSON.stringify(checkLogin[0]));
      props.setloginSuccess(true);
      history.push("/");
    } else {
      setLoginErrorV2();
    }
  };
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
        <form onSubmit={handleSubmit(submitForm)}>
          <input
            type="text"
            name="email"
            placeholder="Email..."
            {...register("email")}
          />
          <p className="login__errors">
            {errors.email && "Nhập email cho đúng"}
          </p>
          <input
            type="password"
            name="password"
            placeholder="Password..."
            {...register("password")}
          />
          <p className="login__errors">
            {errors.password && "Mật khẩu phải dài hơn 4 ký tự"}
          </p>
          <p className="login__errors">
            {loginError && "Tài khoản or mật khẩu không chính xác"}
          </p>
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
          {loginError && <Spinner2></Spinner2>}
        </form>

        <div className="login__sigup">
          <span>Nếu bạn chưa có tài khoản ? </span>
          <Link to="/signup" className="login__forget-link">
            Đăng ký ngay
          </Link>
          {/* <a  href="#a">
            
          </a> */}
        </div>
      </div>
    </div>
  );
}

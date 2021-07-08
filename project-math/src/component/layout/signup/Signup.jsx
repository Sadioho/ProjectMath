import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import Button from "../../common/button/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { DataApp } from "../../../App";

const schema = yup.object().shape({
  firstName: yup.string().required("First Name should be required please"),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

export default function Login() {
  const stateGlobal = useContext(DataApp);
  const [users, setUsers] = useState([]);
  const [errorsCheckAccount, seterrorsCheckAccount] = useState(true);
  const [signupSuccess, setSignupSuccess] = useState(false);
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
  useEffect(() => {
    fetchUsers();
    return () => {};
  }, []);

  async function submitForm(data) {
    console.log(data);
    let countAccount = users.filter((item) => {
      return item.email === data.email;
    });

    if (countAccount.length > 0) {
      seterrorsCheckAccount(false);
      setSignupSuccess(false);
      console.log("trùng");
    } else {
      let apiUser = await fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      apiUser = await apiUser.json();
      fetchUsers();
      seterrorsCheckAccount(true);
      setSignupSuccess(true);
      stateGlobal.setLoginSuccess(true);
      stateGlobal.setUserName(`${data.firstName} ${data.lastName}`);
      localStorage.setItem("my-info", JSON.stringify(apiUser));
      history.push("/");
      console.log("Dang ky thanh cong");
    }
  }

  return (
    <div className="login">
      <div className="login__title">
        <h3>Đăng ký miễn phí 😂😂😂</h3>
      </div>
      <div className="login__fb">
        <Button
          content="Đăng ký bằng Facebook 😉"
          className="btn-blue btn-max btn-font-size"
        />
      </div>
      <span className="login__or"></span>
      <div className="login__email">
        <form onSubmit={handleSubmit(submitForm)}>
          <input
            type="text"
            name="firstName"
            {...register("firstName")}
            placeholder="First Name..."
          />
          <p className="login__errors">
            {errors.firstName && "Không được để trống"}
          </p>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name..."
            {...register("lastName")}
          />
          <p className="login__errors">
            {errors.lastName && "Không được để trống "}
          </p>
          <input
            type="text"
            name="email"
            placeholder="Email..."
            {...register("email")}
          />
          <p className="login__errors"> {errors.email && "Nhập đúng email"} </p>
          {!errorsCheckAccount && (
            <p className="login__errors"> Email đã tồn tại </p>
          )}
          <input
            type="password"
            name="password"
            placeholder="Password..."
            {...register("password")}
          />
          <p className="login__errors">
            {errors.password && "Không được để trống, Mật khẩu lớn hơn 4 ký tự"}
          </p>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password..."
            {...register("confirmPassword")}
          />
          <p className="login__errors">
            {errors.confirmPassword && "Mật khẩu không trùng"}
          </p>
          <p className="success">
            {signupSuccess && "Bạn đã đăng ký thành công 😍😉😂😍 !! "}
          </p>
          <Button
            content="Đăng Ký "
            className="btn-red btn-max btn-font-size"
          />
        </form>

        <div className="login__sigup">
          <span>Chào mừng bạn đến với Nhà Của Xanh 😍</span>
        </div>
      </div>
    </div>
  );
}

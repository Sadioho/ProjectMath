import React from "react";
import "./style.scss";
import Button from "../../common/button/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Link
} from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(15).required(),
  // confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

export default function Login() {
  const { register, handleSubmit, formState:{errors} } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data);
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
        {/* <input type="email" placeholder="Nhập Email hoặc số điện thoại"/>
        <input type="password" placeholder="Nhập mật khẩu" /> */}
         <form onSubmit={handleSubmit(submitForm)}>
         
          <input
            type="text"
            name="email"
            placeholder="Email..."
           {...register('email')}
          />
          <p className="login__errors"> {errors.email && 'Nhập email cho đúng'} </p>
          <input
            type="password"
            name="password"
            placeholder="Password..."
           {...register('password') }
          
          />
          <p className="login__errors"> {errors.password && 'Mật khẩu phải dài hơn 4 ký tự'} </p>
          <div className="login__forget">
          <span>Quên mật khẩu? </span>
          <a className="login__forget-link" href="#a">
            Nhấn vào đây
          </a>
        </div>
          {/* <input type="submit" id="submit" /> */}
          <Button
          content="Đăng nhập "
          className="btn-red btn-max btn-font-size"
        />
        </form>

       
        <div className="login__sigup">
          <span>Nếu bạn chưa có tài khoản ? </span>
          <Link to="/signup" className="login__forget-link">Đăng ký ngay</Link>
          {/* <a  href="#a">
            
          </a> */}
        </div>
      </div>
    </div>
  );
}

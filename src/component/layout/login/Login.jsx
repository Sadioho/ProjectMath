import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { createTheme, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
// import Button from "../../common/button/Button";
import "./style.scss";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: theme.spacing(2),
    fontSize: 13,
  },
  margin: {
    margin: theme.spacing(10, "auto"),
    fontSize: 13,
  },
}));

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(15).required(),
});

export default function Login(props) {
  const [loginError, setLoginError] = useState(false);
  const classes = useStyles();
  let history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function setLoginErrorV2() {
    setLoginError(true);
  }

  const submitForm = (data) => {
    let checkLogin = props.listUser.filter(
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
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(submitForm)}
        >
          <TextField
            variant="outlined"
            margin="normal"
            {...register("email")}
            required
            fullWidth
            id="email"
            label=" Email Address"
            inputProps={{ style: { fontSize: 15 } }}
            InputLabelProps={{ style: { fontSize: 12 } }}
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            {...register("password")}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            inputProps={{ style: { fontSize: 15 } }}
            InputLabelProps={{ style: { fontSize: 12 } }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            fullWidth
          >
            Đăng Nhập
          </Button>
          <Grid container >
            <Grid item xs  >
              <Link href="#" variant="body2" >
                Forgot password?
              </Link>
            </Grid>
            <Grid item xs>
              <Link to="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}

// <div className="bg_login">
//   <div className="login">
//     <div className="login__title">
//       <h3>Xin chào!✌️ Chúc bạn có một ngày tốt lành 🤪🤪🤪🤪</h3>
//     </div>
//     <div className="login__fb">
//       <Button
//         content="Đăng nhập nhanh bằng Facebook"
//         className="btn-blue btn-max btn-font-size"
//       />
//     </div>
//     <span className="login__or"></span>
//     <div className="login__email">
//       <form onSubmit={handleSubmit(submitForm)}>
//         <input
//           type="text"
//           name="email"
//           placeholder="Email..."
//           {...register("email")}
//         />
//         <p className="login__errors">
//           {errors.email && "Nhập email cho đúng"}
//         </p>
//         <input
//           type="password"
//           name="password"
//           placeholder="Password..."
//           {...register("password")}
//         />
//         <p className="login__errors">
//           {errors.password && "Mật khẩu phải dài hơn 4 ký tự"}
//         </p>
//         <p className="login__errors">
//           {loginError && "Tài khoản or mật khẩu không chính xác"}
//         </p>
//         <div className="login__forget">
//           <span>Quên mật khẩu? </span>
//           <a className="login__forget-link" href="#a">
//             Nhấn vào đây
//           </a>
//         </div>
//         <Button
//           content="Đăng nhập "
//           className="btn-red btn-max btn-font-size"
//         />
//         {loginError && <Spinner2></Spinner2>}
//       </form>

//       <div className="login__sigup">
//         <span>Nếu bạn chưa có tài khoản ? </span>
//         <Link to="/signup" className="login__forget-link">
//           Đăng ký ngay
//         </Link>
//         {/* <a  href="#a">

//       </a> */}
//       </div>
//     </div>
//   </div>
// </div>

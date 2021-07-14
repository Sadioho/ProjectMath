import { yupResolver } from "@hookform/resolvers/yup";
import { Box } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import "./style.scss";
import { Spinner2 } from "../../spinner/Spinner2";
import ButtonV2 from "../../common/button/ButtonV2";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(3, "auto"),
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
  fonts: {
    fontSize: 13,
    textDecoration: "none",
    fontWeight: "bold",
    color: "black",
    "&:hover": {
      color: "#757ce8",
    },
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
    <Box boxShadow={2} className="login">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h4">
          Đăng Nhập
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
            InputLabelProps={{ style: { fontSize: 15 } }}
            name="email"
            autoComplete="email"
            autoFocus
          />
          <p className="login__errors">
            {errors.email && "Nhập email cho đúng"}
          </p>
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
            InputLabelProps={{ style: { fontSize: 15 } }}
          />
          <p className="login__errors">
            {errors.password && "Mật khẩu phải dài hơn 4 ký tự"}
          </p>
          <p className="login__errors">
            {loginError && "Tài khoản or mật khẩu không chính xác"}
          </p>
          <ButtonV2 type="submit" width="100%" background="#09a6f3" backgroundColor="rgb(144, 224, 239)" height="55px">Đăng Nhập</ButtonV2>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" className={classes.fonts}>
                Quên mật khẩu ?
              </Link>
            </Grid>
            <Grid item xs>
              <Link to="/signup" variant="body2" className={classes.fonts}>
                {"Đăng ký"}
              </Link>
            </Grid>
          </Grid>
          {loginError && <Spinner2></Spinner2>}
        </form>
      </div>
    </Box>
  );
}

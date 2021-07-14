import { yupResolver } from "@hookform/resolvers/yup";
import {
  Avatar,
  Box,
  Button,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { Spinner2 } from "../../spinner/Spinner2";
import "./style.scss";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1, "auto"),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: theme.spacing(2),
    backgroundColor:"#f44336",
    color:"white",
    fontWeight:"bold",
    '&:hover': {
      backgroundColor:"#ff7961",
    }

  }
}));

export default function Login(props) {
  const [errorsCheckAccount, seterrorsCheckAccount] = useState(true);
  const [signupSuccess, setSignupSuccess] = useState(false);
  let history = useHistory();
  const classes = useStyles();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function submitForm(data) {
    let data2 = { ...data, time: null, point: null };
    let countAccount = props.listUser.filter((item) => {
      return item.email === data.email;
    });
    if (countAccount.length > 0) {
      seterrorsCheckAccount(false);
      console.log("trùng");
    } else {
      let ramdomID = Math.random().toString(36).substring(7);

      let apiUser = await fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify(data2),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      apiUser = await apiUser.json();
      console.log(apiUser);
      localStorage.setItem("my-info", JSON.stringify(apiUser));
      setSignupSuccess(true);
      seterrorsCheckAccount(true);
      props.setloginSuccess(true);
      props.setreload(ramdomID);
      history.push("/");
    }
  }

  return (
    <Box className="login" boxShadow={2}>
      <Avatar className={classes.avatar}></Avatar>
      <Typography variant="h5" >
        Đăng Ký Miễn Phí
      </Typography>
      <span className="login__or"></span>
      <div className="login__email">
        <form onSubmit={handleSubmit(submitForm)}>
          <TextField
            variant="outlined"
            margin="normal"
            {...register("firstName")}
            fullWidth
            id="firstName"
            label=" First Name "
            inputProps={{ style: { fontSize: 15 } }}
            InputLabelProps={{ style: { fontSize: 15 } }}
            name="firstName"
            autoComplete="firstName"
            autoFocus
          />
          <p className="login__errors">
            {errors.firstName && "Không được để trống"}
          </p>
          <TextField
            variant="outlined"
            margin="normal"
            {...register("lastName")}
            fullWidth
            id="lastName"
            label=" Last Name "
            inputProps={{ style: { fontSize: 15 } }}
            InputLabelProps={{ style: { fontSize: 15 } }}
            name="lastName"
            autoComplete="lastName"
          />
          <p className="login__errors">
            {errors.lastName && "Không được để trống "}
          </p>

          <TextField
            variant="outlined"
            margin="normal"
            {...register("email")}
            fullWidth
            id="email"
            label="Email "
            inputProps={{ style: { fontSize: 15 } }}
            InputLabelProps={{ style: { fontSize: 15 } }}
            name="email"
            autoComplete="email"
          />
          <p className="login__errors">{errors.email && "Nhập đúng email"} </p>
          {!errorsCheckAccount && (
            <p className="login__errors"> Email đã tồn tại </p>
          )}
          <TextField
            variant="outlined"
            margin="normal"
            {...register("password")}
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
            {errors.password && "Không được để trống, Mật khẩu lớn hơn 4 ký tự"}
          </p>

          <TextField
            variant="outlined"
            margin="normal"
            {...register("confirmPassword")}
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="current-password"
            inputProps={{ style: { fontSize: 15 } }}
            InputLabelProps={{ style: { fontSize: 15 } }}
          />
          <p className="login__errors">
            {errors.confirmPassword && "Mật khẩu không trùng"}
          </p>
          <p className="success">
            {signupSuccess && "Bạn đã đăng ký thành công 😍😉😂😍 !! "}
          </p>
          <Button
            type="submit"
            variant="contained"
            // color="primary"
            className={classes.submit}
            fullWidth
          >
            Đăng Ký
          </Button>
          {!errorsCheckAccount && <Spinner2></Spinner2>}
        </form>
      </div>
    </Box>
  );
}

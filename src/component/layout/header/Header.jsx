import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../../image/trac-nghiem-online.png";
import ButtonV2 from "../../common/button/ButtonV2";
import "./header.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  textDe: {
    textDecoration: "none",
  },
}));
function Header(props) {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("my-info"));
  const classes = useStyles();

  function signout() {
    props.setloginSuccess(false);
    props.setFinish(false);
    props.setListResult([]);
    localStorage.removeItem("my-info");
    history.push("/login");
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h3" className={classes.title}>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </Typography>

        {props.loginSuccess ? (
          <>
            <div className="username sigup">
              <span>
                {user.firstName} {user.lastName}
              </span>
              <i className="header__login_icon  fas fa-user-tie"></i>
            </div>

            <ButtonV2
              width="130px"
              borderRadius="40px 0px 69px 40px "
              padding="10px"
              height="unset"
              background="unset"
              color="black"
              backgroundColor="#09A6F3"
              onClick={signout}
            >
              Đăng Xuất
            </ButtonV2>
          </>
        ) : (
          <Link to="/login" className={classes.textDe}>
            <ButtonV2
              width="130px"
              borderRadius="0px 40px 40px 69px / 3px 40px 40px 75px "
              padding="10px"
              height="unset"
              background="unset"
              color="black"
              backgroundColor="#09A6F3"
            >
              Đăng nhập
            </ButtonV2>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {};

export default Header;

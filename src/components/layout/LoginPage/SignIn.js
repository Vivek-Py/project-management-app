import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleDemoOn,
  updateEmail,
  updatePass,
  updateSignup,
} from "../../state/actions";

const SignIn = (props) => {
  const { handleLogin } = props;

  const dispatch = useDispatch();
  //const demo = useSelector((state) => state.demo);
  const error = useSelector((state) => state.error);

  function demoLogin() {
    dispatch(updateEmail("test@email.com"));
    dispatch(updatePass("testPassword"));
    dispatch(toggleDemoOn());
  }

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <div className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoFocus
            autoComplete="email"
            onChange={(e) => {
              dispatch(updateEmail(e.target.value));
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => {
              dispatch(updatePass(e.target.value));
            }}
          />
          <p className="errorMsg">{error}</p>

          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleLogin}
          >
            Sign In
          </Button>

          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.demo}
            onClick={demoLogin}
          >
            Login with Demo account
          </Button>

          <Grid container className={classes.gride}>
            <Grid item>
              <Link
                onClick={() => {
                  dispatch(updateSignup());
                }}
                variant="body2"
              >
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

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
    margin: theme.spacing(3, 0, 0),
  },
  demo: {
    margin: theme.spacing(1, 0, 3),
    backgroundColor: "#303F9F",
  },
  gride: {
    justifyContent: "end",
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Made with ♥ "}
      <Link color="inherit" href="https://material-ui.com/">
        in India
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default SignIn;

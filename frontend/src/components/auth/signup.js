import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useState } from "react";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
// var dataobj = Sequelize()
// dataobj.firstname = "rahul"
// dataobj.save()

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
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  //this.handleEmailChange = this.handleEmailChange.bind(this);

  const [passone, setPassone] = useState("");
  const [passtwo, setPasstwo] = useState("");

  const [firstname, setfirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  function handleFirstname(e) {
    let val = e.target.value;
    setfirstname(val);
  }
  function handleLastname(e) {
    let val = e.target.value;
    setLastname(val);
  }

  function handleUsername(e) {
    let val = e.target.value;
    setUsername(val);
  }

  function handleEmailChange(e) {
    let val = e.target.value;
    setPassone(val);
  }

  function handleEmailChange2(e) {
    let val = e.target.value;
    setPasstwo(val);
  }

  function handleEmail(e) {
    let val = e.target.value;
    setEmail(val);
  }

  async function validate(e) {
    e.preventDefault();

    var valid = false;

    // if (passwords match) and if (fields are not -> "") => valid = true

    if (
      firstname === "" ||
      lastname === "" ||
      username === "" ||
      email === ""
    ) {
    } else {
      if (passone === passtwo) {
        valid = true;
      }
    }

    if (valid) {
      var mg_body = JSON.stringify({
        username: username,
        first_name: firstname,
        last_name: lastname,
        email: email,
        password: passtwo,
      });
      await fetch("http://localhost:8000/signup/user", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: mg_body,
      })
        .then((res) => {
          console.log(res);
          res.json();
        })
        .then((data) => console.log("================", data))
        .catch((e) => {
          //show alert ERROR
        });
    } else {
      console.log("not allowed");
      alert("Form has errors.");
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="username Address"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={handleUsername}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstname"
            label="firstname Address"
            name="firstname"
            autoComplete="firstname"
            autoFocus
            onChange={handleFirstname}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastname"
            label="lastname Address"
            name="lastname"
            autoComplete="lastname"
            autoFocus
            onChange={handleLastname}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleEmail}
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
            onChange={handleEmailChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmpassword"
            label="confirmPassword"
            type="confirmpassword"
            id="confirmpassword"
            autoComplete="current-password"
            onChange={handleEmailChange2}
          />

          <Button
            onClick={validate}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

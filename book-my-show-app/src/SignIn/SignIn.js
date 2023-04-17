import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAutodication } from "../features/counter/counterSlice";
import "./SignIn.css";
import { useState } from "react";
import { useEffect } from "react";
import { onValue, ref, set } from "firebase/database";
import { db } from "../Firsebase/Firebase";
const theme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [flag3, setFlag3] = useState(false);
  const [flag4, setFlag4] = useState(false);
  const [userIds, setUserIds] = useState([]);
  const [userDatas, setUserDatas] = useState([]);
  useEffect(() => {
    const getDetails = async () => {
      await onValue(ref(db, "userDetails"), (getData) => {
        const data = getData.val();
        setUserIds(Object.keys(data));
        setUserDatas(Object.values(data));
      });
    };
    getDetails();
  }, []);
  const handlingUserDetails = (e) => {
    if (e.target.name === "email") {
      setFlag1(false);
      setFlag3(false);
      setEmail(e.target.value);
    } else {
      setFlag2(false);
      setFlag4(false);
      setPassword(e.target.value);
    }
  };
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    var userData = userDatas;
    console.log(userDatas);
    const loginAthend = userData.some((e) => e.email === email);
    var userFilter;
    if (loginAthend) {
      userFilter = userData.filter(
        (value) => value.email === data.get("email")
      );
      userFilter = userFilter[0];
      if (
        userFilter.email === data.get("email") &&
        userFilter.password === data.get("password")
      ) {
        setFlag4(false);
      } else if (
        userFilter.email === data.get("email") &&
        userFilter.password !== data.get("password")
      ) {
        setFlag4(true);
      }
    } else {
      setFlag3(true);
    }
    if (email === "") {
      setFlag1(true);
    }
    if (password === "") {
      setFlag2(true);
    }
    if (
      email !== "" &&
      loginAthend &&
      userFilter.password === password &&
      password !== ""
    ) {
      dispatch(setAutodication(true));
      navigate("/goToMovieCard");
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#f84464" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={(e) => handlingUserDetails(e)}
              autoFocus
            />
            {email === "" && flag1 && (
              <p style={{ color: "#f84564" }}>User Email is required</p>
            )}
            {email !== "" && flag3 && (
              <p style={{ color: "#f84564" }}>
                This is not a registered email. Please try a value Email
              </p>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => handlingUserDetails(e)}
            />
            {password === "" && flag2 && (
              <p style={{ color: "#f84564" }}>Password is required</p>
            )}
            {password !== "" && flag4 && (
              <p style={{ color: "#f84564" }}>Password didn't Match</p>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "#f84464", p: 1.5 }}
              className="signIn-btn"
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/gotosignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

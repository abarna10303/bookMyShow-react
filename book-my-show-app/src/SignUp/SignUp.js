import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import '../SignIn/SignIn.css';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { setAutodication } from '../features/counter/counterSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const theme = createTheme();

export default function SignUp() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [existEmail,setExistEmail]=useState(false);
  const [existPassword,setExistPassword]=useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    var obj = {
      email: data.get('email'),
      password: data.get('password'),
      Cpassword: data.get('Cpassword')
    }

    if ( localStorage.getItem("allObj")==null){
      localStorage.setItem("allObj", "[]")
    }

    var allDetails = JSON.parse(localStorage.getItem("allObj"));
    var isAthend = allDetails.some(val => val.email === data.get("email"))

    if (!isAthend){
      setExistEmail(false);
        allDetails.push(obj);
        localStorage.setItem("allObj", JSON.stringify(allDetails));
        dispatch(setAutodication(true));
        navigate("/goToMovieCard");
     
    }
    if(isAthend){
      setExistEmail(true);
    }
    if(obj.password!==obj.Cpassword)
    {
      setExistPassword(true);
    }
    else{
      setExistPassword(false);
     } 
  };
//  localStorage.clear()
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor:'#f84464',p:1.5 }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={()=>setExistEmail(false)}
                />
              </Grid>
              {existEmail?<p style={{color:'red',padding:'16px 0px 0px 16px'}}>Alredy Exist this Email</p>:null}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Cpassword"
                  label="Confirm Password"
                  type="password"
                  id="Cpassword"
                  autoComplete="C-password"
                  onChange={()=>setExistPassword(false)}
                />
              </Grid>
              {existPassword?<p style={{color:'red',padding:'16px 0px 0px 16px'}}>Password and Corrent Password didn't Match</p>:null}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,bgcolor:'#f84464',p:1.5}}
              className='sign-up'
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="*" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
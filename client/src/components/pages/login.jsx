import { React, useState } from 'react';
import swal from 'sweetalert2';
import '../../global.css';
import Topbar from '../common/navbar/navbar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios'; // Assuming you're using axios for API requests

const defaultTheme = createTheme();
const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:8080/api/auth/',
        formData
      );
      if (response.data.success) {
        // Assuming the response has a "success" property
        swal.fire({
          title: 'Login Successful!',
          text: 'You have successfully Login to Your account.',
          icon: 'success',
          confirmButtonText: 'Ok',
        });
      } else {
        swal.fire({
          title: 'Login Failed Server Issue!',
          text:
            response.data.message || 'An error occurred during login.', // Provide a more specific error message if available
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      swal.fire({
        title: 'Login Error',
        text: 'An unexpected error occurred. Please try again later.', // Informative error message
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    } 
    // finally {
    //   // Reset the form regardless of success or failure for a clean experience
    //   setFormData({
    //     email: '',
    //     password: '',
    //   });  };
    }
  return (
    <>
      <Topbar />
      <div className="">
        <div className="App-main-all container">
          <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  // marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Log In
                </Typography>
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  noValidate
                  sx={{ mt: 1 }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Log in
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link to="/registration" variant="body2">
                        Don't have an account? Sign Up
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Container>
          </ThemeProvider>
        </div>
      </div>
    </>
  );
};

export default SignIn;

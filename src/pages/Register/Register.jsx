import {
  Alert,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import login from "../../images/login.svg";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { googleLogin, newUser, error, success } = useAuth();
  const history = useHistory();
  const location = useLocation();

  // state of user Info
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    img: "",
    password: "",
  });

  // Handle Register
  const handleRegister = (e) => {
    e.preventDefault();

    newUser(
      userInfo.name,
      userInfo.img,
      userInfo.email,
      userInfo.password,
      location,
      history
    );

    setUserInfo({
      name: "",
      email: "",
      img: "",
      password: "",
    });
  };

  return (
    <section>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 2 }}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                {" "}
                Register
              </Typography>
              {error && <Alert severity="error">{error}</Alert>}
              {success && (
                <Alert severity="success">Successfully Registered!</Alert>
              )}

              <form onSubmit={handleRegister}>
                <TextField
                  label="Name"
                  variant="filled"
                  type="text"
                  fullWidth
                  sx={{ my: 2 }}
                  required
                  value={userInfo.name}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, name: e.target.value })
                  }
                />
                <TextField
                  label="Email"
                  variant="filled"
                  type="email"
                  fullWidth
                  required
                  sx={{ my: 2 }}
                  value={userInfo.email}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, email: e.target.value })
                  }
                />
                <TextField
                  label="Image URL"
                  variant="filled"
                  type="text"
                  fullWidth
                  required
                  sx={{ my: 2 }}
                  value={userInfo.img}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, img: e.target.value })
                  }
                />
                <TextField
                  label="Password"
                  variant="filled"
                  type="password"
                  required
                  fullWidth
                  sx={{ my: 2 }}
                  value={userInfo.password}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, password: e.target.value })
                  }
                />
                <Button
                  sx={{
                    width: "100%",
                    p: 2,
                  }}
                  variant="contained"
                  type="submit"
                >
                  Submit
                </Button>
              </form>

              <NavLink
                to="/login"
                style={{
                  margin: "15px 0",
                  textAlign: "center",
                  display: "block",
                  color: "#1B37B1",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
              >
                {" "}
                Already Have an Account? Please Log in
              </NavLink>

              <Typography align="center" variant="h6" sx={{ mt: 4, mb: 4 }}>
                {" "}
                or{" "}
              </Typography>

              <Button
                sx={{
                  width: "100%",
                  textTransform: "none",
                  boxShadow: 3,
                  p: 2,
                  borderRadius: 16,
                  color: "#454545",
                }}
                onClick={() => googleLogin(location, history)}
              >
                {" "}
                <img
                  src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg"
                  style={{ width: "25px", marginRight: "15px" }}
                  alt=""
                />{" "}
                Continue With Google
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={login} alt="login-img" />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Register;

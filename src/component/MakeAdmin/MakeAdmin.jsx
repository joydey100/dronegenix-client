import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import admin from "../../images/admin.svg";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const MakeAdmin = () => {
  // Initial States
  const [email, setEmail] = useState("");
  const { error, setError } = useAuth();

  const user = { email };

  const handleAdmin = (e) => {
    e.preventDefault();
    setError("");

    fetch(`https://sheltered-waters-81006.herokuapp.com/users/admin`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setEmail("");
          Swal.fire({
            title: "Great Job!",
            text: "You successfully created an admin",
            icon: "success",
            confirmButtonColor: "#1B37B1",
          });
        } else {
          setError("Oops! There is something wrong");
        }
      });
  };

  return (
    <section>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box sx={{ pt: 4 }}>
            <Typography varaint="h5" color="primary" sx={{ fontWeight: 600 }}>
              {" "}
              Give a admin role
            </Typography>
            {error && <Alert severity="error">{error}</Alert>}
            <form onSubmit={handleAdmin}>
              <TextField
                label="Email Address"
                type="email"
                variant="filled"
                fullWidth
                required
                sx={{ my: 2 }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" variant="contained">
                {" "}
                Submit
              </Button>
            </form>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={admin} alt="admin" />
        </Grid>
      </Grid>
    </section>
  );
};

export default MakeAdmin;

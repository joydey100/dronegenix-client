import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import SingleDrone from "../../component/DroneList/SingleDrone";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";

const Explore = () => {
  const [drones, setDrones] = useState([]);

  // Getting Drone List
  useEffect(() => {
    fetch("https://sheltered-waters-81006.herokuapp.com/dronelist")
      .then((res) => res.json())
      .then((data) => setDrones(data));
  }, []);

  return (
    <>
      <Header />
      <Box>
        <section>
          <Container>
            <Box sx={{ textAlign: "center", mb: 3 }}>
              <Typography
                variant="h4"
                component="h2"
                color="primary"
                sx={{ fontWeight: 600 }}
              >
                {" "}
                Explore Latest Drones
              </Typography>
            </Box>
            <Grid container spacing={3}>
              {drones.map((drone) => (
                <SingleDrone key={drone._id} {...drone} />
              ))}
            </Grid>
          </Container>
        </section>
      </Box>
      <Footer />
    </>
  );
};

export default Explore;

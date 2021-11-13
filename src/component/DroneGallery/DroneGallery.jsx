import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import data from "./galleryData";

const DroneGallery = () => {
  return (
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
            Drone Gallery
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {data.map((data) => (
            <Grid item xs={12} md={4} key={data.id}>
              <Paper>
                <img src={data.img} alt="img-gallery" />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default DroneGallery;

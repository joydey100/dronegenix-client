import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import data from "./BannerData";
import "./Banner.css";
import { NavLink } from "react-router-dom";

const Banner = () => {
  // State Index Value changing
  const [index, setIndex] = useState(0);

  //   destructuring data
  const { img, name, desc } = data[index];

  // Interval of Banner meals
  useEffect(() => {
    const intervalData = setInterval(() => {
      if (index >= data.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 2000);

    return () => clearInterval(intervalData);
  }, [index]);

  return (
    <section className="banner">
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box>
              <Typography
                variant="h3"
                component="h2"
                sx={{ fontWeight: 600 }}
                gutterBottom
                color="primary"
              >
                {name}
              </Typography>
              <Typography paragraph gutterBottom>
                {desc}
              </Typography>
              <NavLink to="/explore" style={{ textDecoration: "none" }}>
                <Button variant="contained" size="large">
                  {" "}
                  Explore More
                </Button>
              </NavLink>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src={img}
              alt="banner-img"
              style={{ width: "450px", margin: "0 auto", display: "block" }}
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Banner;

import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <Container sx={{ mt: 5, pt: 8, color: "#fff" }}>
        <Grid container>
          {/* Footer 1  */}
          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="h6" component="h2" gutterBottom>
              Dronegenix
            </Typography>
            <Typography variant="body1" component="p">
              We are providing best drone camera to our customer. Latest Drone
              with high specification and in reasonable budget.
            </Typography>
          </Grid>

          {/* Footer 2 - important links */}
          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="h6" component="h2" gutterBottom>
              Important Links
            </Typography>
            <div className="contact-info">
              <Link
                to="/"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  margin: "10px 0",
                  display: "block",
                }}
              >
                Home
              </Link>
              <Link
                to="/"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  marginBottom: "10px",
                  display: "block",
                }}
              >
                About
              </Link>
              <Link
                to="/"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  marginBottom: "10px",
                  display: "block",
                }}
              >
                Explore Drones
              </Link>
              <Link
                to="/"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  marginBottom: "10px",
                  display: "block",
                }}
              >
                Contact Us
              </Link>
            </div>
          </Grid>

          {/* Footer 3 */}
          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="h6" component="h2" gutterBottom>
              Social Media
            </Typography>
            <div className="contact-info">
              <Link
                to="/"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  marginBottom: "10px",
                  display: "block",
                }}
              >
                Facebook
              </Link>
              <Link
                to="/"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  marginBottom: "10px",
                  display: "block",
                }}
              >
                Twitter
              </Link>
              <Link
                to="/"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  marginBottom: "10px",
                  display: "block",
                }}
              >
                Instagram
              </Link>
              <Link
                to="/"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  marginBottom: "10px",
                  display: "block",
                }}
              >
                LinkedIn
              </Link>
            </div>
          </Grid>

          {/* Footer 4 */}
          <Grid item xs={12} md={6} lg={3}>
            <div className="footer-info mt-3 mt-md-0">
              <Typography variant="h6" component="h2" gutterBottom>
                {" "}
                Contact Information{" "}
              </Typography>
              <p className="text-light mb-3">
                {" "}
                You can contact with us through E-mail, Phone and our social
                media site. Also we are available in offline office.
              </p>
              <div className="contact-info">
                <Link
                  to="/"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    marginBottom: "10px",
                    display: "block",
                  }}
                >
                  {" "}
                  +1-23456-789{" "}
                </Link>
                <Link
                  to="/"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    marginBottom: "10px",
                    display: "block",
                  }}
                >
                  {" "}
                  dronegenix@gmail.com{" "}
                </Link>
                <Link
                  to="/"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    marginBottom: "10px",
                    display: "block",
                  }}
                >
                  {" "}
                  Sector: 07, Uttara, Dhaka{" "}
                </Link>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Typography
        sx={{
          mt: 3,
          textAlign: "center",
          color: "#fff",
          p: 1,
          backgroundColor: "#1b37b1",
        }}
      >
        &copy; Copyright Reserved by Dronegenix
      </Typography>
    </footer>
  );
};

export default Footer;

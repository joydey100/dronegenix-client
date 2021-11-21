import { Container, Typography } from "@mui/material";
import React from "react";
import Header from "../../component/Header/Header";

const ErrorPage = () => {
  return (
    <>
      <Header />
      <section>
        <Container>
          <img
            src="https://medicare-react-project.web.app/static/media/error.4717b9a5.svg"
            alt="not-found"
            style={{ width: "75%", display: "block", margin: "0 auto" }}
          />
          <Typography
            varaint="h5"
            color="primary"
            sx={{ my: 2, textAlign: "center" }}
          >
            {" "}
            Page Not Found!
          </Typography>
        </Container>
      </section>
    </>
  );
};

export default ErrorPage;

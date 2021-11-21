import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../hooks/useAuth";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";

const AdminRoute = ({ children, ...rest }) => {
  const { user, loading, admin } = useAuth();

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Container, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import useAuth from "../../hooks/useAuth";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import TransitEnterexitIcon from "@mui/icons-material/TransitEnterexit";

const drawerWidth = 240;

const useStyles = makeStyles({
  drawer: {
    width: drawerWidth,
  },
});

const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const matches = useMediaQuery("(max-width:900px)");
  const { logOut, user } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const classes = useStyles();

  return (
    <>
      {/* Main AppBar */}
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant="h6">
                <NavLink
                  to="/"
                  exact
                  style={{
                    color: "#1B37B1",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Dronegenix
                </NavLink>
              </Typography>
            </Box>

            <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
              {!matches && (
                <Box>
                  <NavLink
                    to="/"
                    exact
                    className="menu-link"
                    activeStyle={{
                      fontWeight: 500,
                      color: "#1B37B1",
                    }}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/explore"
                    exact
                    className="menu-link"
                    activeStyle={{
                      fontWeight: 500,
                      color: "#1B37B1",
                    }}
                  >
                    Explore Drones
                  </NavLink>
                </Box>
              )}

              {!matches && !user.email && (
                <NavLink to="/login" style={{ textDecoration: "none" }}>
                  <Button color="primary" variant="contained">
                    Login
                  </Button>
                </NavLink>
              )}

              {!matches && user.email && (
                <NavLink
                  to="/dashboard"
                  exact
                  className="menu-link"
                  activeStyle={{
                    fontWeight: 500,
                    color: "#1B37B1",
                  }}
                >
                  Dashboard
                </NavLink>
              )}
              {!matches && user.email && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <Typography variant="body1" sx={{ mr: 1 }}>
                    {" "}
                    Sign in as {user.displayName}{" "}
                  </Typography>
                  <Button color="error" variant="contained" onClick={logOut}>
                    Log out
                  </Button>
                </Box>
              )}
              {matches && (
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </Container>
        </Toolbar>
      </AppBar>

      {/* Left Drawer */}

      <Drawer
        className={classes.drawer}
        classes={{ paper: classes.drawer }}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        anchor="left"
      >
        <Box sx={{ textAlign: "center", pt: 6 }}>
          {user.email ? (
            <Box>
              {" "}
              <img
                src={user?.photoURL}
                alt="user-img"
                style={{
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                  display: "block",
                  margin: "10px auto",
                }}
              />{" "}
              <Typography variant="h6" sx={{ fontWeight: 500, my: 1 }}>
                {" "}
                {user.displayName}{" "}
              </Typography>{" "}
            </Box>
          ) : (
            <Box sx={{ textAlign: "center" }}>
              {" "}
              <NavLink
                to="/"
                exact
                style={{ textDecoration: "none", color: "#757575" }}
                activeStyle={{
                  color: "#1B37B1",
                }}
              >
                <Typography
                  variant="h5"
                  color="primary"
                  sx={{ fontWeight: 600 }}
                >
                  {" "}
                  Dronegenix
                </Typography>
              </NavLink>{" "}
            </Box>
          )}
        </Box>

        <List sx={{ mt: 2 }}>
          <NavLink
            to="/"
            exact
            style={{ textDecoration: "none", color: "#757575" }}
            activeStyle={{
              color: "#1B37B1",
            }}
          >
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </NavLink>
          <NavLink
            to="/explore"
            exact
            style={{ textDecoration: "none", color: "#757575" }}
            activeStyle={{
              color: "#1B37B1",
            }}
          >
            <ListItem button>
              <ListItemIcon>
                <ExploreIcon />
              </ListItemIcon>
              <ListItemText primary="Explore Drones" />
            </ListItem>
          </NavLink>

          {user.email && (
            <NavLink
              to="/dashboard"
              exact
              style={{ textDecoration: "none", color: "#757575" }}
              activeStyle={{
                color: "#1B37B1",
              }}
            >
              <ListItem button>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
            </NavLink>
          )}
          {user.email && (
            <ListItem
              button
              onClick={logOut}
              style={{ textDecoration: "none", color: "#757575" }}
              activeStyle={{
                color: "#1B37B1",
              }}
            >
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Log Out" />
            </ListItem>
          )}

          {!user.email && (
            <NavLink
              to="/login"
              exact
              style={{ textDecoration: "none", color: "#757575" }}
              activeStyle={{
                color: "#1B37B1",
              }}
            >
              <ListItem button>
                <ListItemIcon>
                  <TransitEnterexitIcon />
                </ListItemIcon>
                <ListItemText primary="Log In" />
              </ListItem>
            </NavLink>
          )}
        </List>
      </Drawer>
    </>
  );
};

export default Header;

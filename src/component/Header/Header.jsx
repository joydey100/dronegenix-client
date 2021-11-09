import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { makeStyles } from "@mui/styles";

const drawerWidth = 240;

const useStyles = makeStyles({
  drawer: {
    width: drawerWidth,
  },
});

const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const classes = useStyles();


  return (
    <>
      {/* Main AppBar */}
      <AppBar position="static">
        <Toolbar>
          <Container sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Logo
            </Typography>

            <Box component="div" sx={{ flexGrow: 1 }}>
              <Button color="inherit">Menu</Button>
            </Box>

            <Box component="div">
              <Button color="inherit">Login</Button>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
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
        <List></List>
      </Drawer>
    </>
  );
};

export default Header;

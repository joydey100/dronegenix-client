import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import MyOrder from "../../component/MyOrder/MyOrder";
import NewReview from "../../component/NewReview/NewReview";
import PayOrder from "../../component/PayOrder/PayOrder";
import useAuth from "../../hooks/useAuth";
import ManageOrders from "../../component/ManageOrders/ManageOrders";
import AddProduct from "../../component/AddProduct/AddProduct";
import MakeAdmin from "../../component/MakeAdmin/MakeAdmin";
import ManageProducts from "../../component/ManageProducts/ManageProducts";
import DrawerList from "../../component/DrawerList/DrawerList";

const drawerWidth = 280;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path } = useRouteMatch();
  const { user } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />

      <Box sx={{ textAlign: "center" }}>
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
        </Typography>
      </Box>

      <Divider />
      <List>
        <DrawerList />
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        color="inherit"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dronegenix
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Switch>
          <Route exact path={path}>
            <MyOrder />
          </Route>
          <Route path={`${path}/pay`}>
            <PayOrder />
          </Route>
          <Route path={`${path}/review`}>
            <NewReview />
          </Route>
          <Route path={`${path}/manage-orders`}>
            <ManageOrders />
          </Route>
          <Route path={`${path}/add-product`}>
            <AddProduct />
          </Route>
          <Route path={`${path}/make-admin`}>
            <MakeAdmin />
          </Route>
          <Route path={`${path}/manage-products`}>
            <ManageProducts />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

export default Dashboard;

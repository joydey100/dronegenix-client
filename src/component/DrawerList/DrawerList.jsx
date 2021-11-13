import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import PaymentIcon from "@mui/icons-material/Payment";
import StarsIcon from "@mui/icons-material/Stars";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouteMatch, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";

const DrawerList = () => {
  // Initial States and important routes
  const { logOut, admin } = useAuth();
  const { url } = useRouteMatch();

  return (
    <List>
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
      <NavLink
        to={`${url}`}
        exact
        style={{ textDecoration: "none", color: "#757575" }}
        activeStyle={{
          color: "#1B37b1",
        }}
      >
        <ListItem button>
          <ListItemIcon>
            <AssignmentTurnedInIcon />
          </ListItemIcon>
          <ListItemText primary="My Order" />
        </ListItem>
      </NavLink>
      <NavLink
        to={`${url}/pay`}
        exact
        style={{ textDecoration: "none", color: "#757575" }}
        activeStyle={{
          color: "#1B37B1",
        }}
      >
        <ListItem button>
          <ListItemIcon>
            <PaymentIcon />
          </ListItemIcon>
          <ListItemText primary="Payment" />
        </ListItem>
      </NavLink>
      <NavLink
        to={`${url}/review`}
        exact
        style={{ textDecoration: "none", color: "#757575" }}
        activeStyle={{
          color: "#1B37B1",
        }}
      >
        <ListItem button>
          <ListItemIcon>
            <StarsIcon />
          </ListItemIcon>
          <ListItemText primary="Review" />
        </ListItem>
      </NavLink>
      {admin && (
        <Box>
          {" "}
          <NavLink
            to={`${url}/manage-orders`}
            exact
            style={{ textDecoration: "none", color: "#757575" }}
            activeStyle={{
              color: "#1B37B1",
            }}
          >
            <ListItem button>
              <ListItemIcon>
                <ManageAccountsIcon />
              </ListItemIcon>
              <ListItemText primary="Manage Orders" />
            </ListItem>
          </NavLink>
          <NavLink
            to={`${url}/add-product`}
            exact
            style={{ textDecoration: "none", color: "#757575" }}
            activeStyle={{
              color: "#1B37B1",
            }}
          >
            <ListItem button>
              <ListItemIcon>
                <AddBoxIcon />
              </ListItemIcon>
              <ListItemText primary="Add Product" />
            </ListItem>
          </NavLink>
          <NavLink
            to={`${url}/make-admin`}
            exact
            style={{ textDecoration: "none", color: "#757575" }}
            activeStyle={{
              color: "#1B37B1",
            }}
          >
            <ListItem button>
              <ListItemIcon>
                <AdminPanelSettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Make Admin" />
            </ListItem>
          </NavLink>
          <NavLink
            to={`${url}/manage-products`}
            exact
            style={{ textDecoration: "none", color: "#757575" }}
            activeStyle={{
              color: "#1B37B1",
            }}
          >
            <ListItem button>
              <ListItemIcon>
                <ProductionQuantityLimitsIcon />
              </ListItemIcon>
              <ListItemText primary="Manage Product" />
            </ListItem>
          </NavLink>{" "}
        </Box>
      )}
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
    </List>
  );
};

export default DrawerList;

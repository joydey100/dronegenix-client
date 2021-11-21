import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Explore from "./pages/Explore/Explore";
import LoginHome from "./pages/Login/LoginHome";
import RegisterHome from "./pages/Register/RegisterHome";
import PurchaseHome from "./pages/Purchase/PurchaseHome";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "../src/PrivateRoute/PrivateRoute";
import Dashboard from "../src/pages/Dashboard/Dashboard";
import ErrorPage from "./component/ErrorPage/ErrorPage";

// Some Theme Changes
const theme = createTheme({
  typography: {
    fontFamily: ["Poppins"].join(","),
  },
  palette: {
    primary: {
      main: "#1b37b1",
    },
  },
});

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/explore">
              <Explore />
            </Route>
            <Route exact path="/login">
              <LoginHome />
            </Route>
            <Route exact path="/register">
              <RegisterHome />
            </Route>
            <PrivateRoute exact path="/drone/:id">
              <PurchaseHome />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route exact path="*">
              <ErrorPage />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;

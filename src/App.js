import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Some Theme Changes
const theme = createTheme({
  typography: {
    fontFamily: ["Poppins"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;

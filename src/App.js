import "./App.css";
import Routes from "./routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes></Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

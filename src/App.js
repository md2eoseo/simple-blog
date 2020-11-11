import "./App.css";
import Routes from "./components/routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import styled from "styled-components";

const Main = styled.div`
  width: 100%;
  padding: 50px 10px;
  display: grid;
  row-gap: 20px;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Main>
          <Routes></Routes>
        </Main>
      </Router>
    </ThemeProvider>
  );
}

export default App;

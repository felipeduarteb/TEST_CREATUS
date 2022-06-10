import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./global/Style/global-styled";
import { Container } from "./global/Style/app-styled";
import RouterNavigation from "./routes";
import Home from "./pages/Home";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Container>
        <Home />
        {/* <RouterNavigation /> */}
      </Container>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import { Header } from "./components/Header";
import { GlobalStyle } from "./global";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Termos } from "./pages/Termos";
import { Politica } from "./pages/Politica";

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyle />
        <Header />
      </div>

      <Switch>
        <Route path="/termos">
          <Termos />
        </Route>
        <Route path="/politica">
          <Politica />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

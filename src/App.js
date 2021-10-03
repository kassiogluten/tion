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
      <div
        style={{
          color: "white",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          display: 'flex',
          flexDirection:'column',
          padding:'1rem'
        }}
      >
        <p>JP Consultoria LTDA</p>
       <p> 041.466.581/0001-39</p>
        <p>(33) 99865-0761</p>
       <p> contato@tionapp.com.br</p>
      </div>
    </Router>
  );
}

export default App;

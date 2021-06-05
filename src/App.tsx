import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Header} from "./components/Header";
import {Home} from "./pages/Home";
import {Footer} from "./components/Footer";
import "./App.scss";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <div className="App-Container">
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/services">
            < div>This will be the services page</div>
            </Route>
            <Route path="/portfolio">
              <div>This will be the portfolio page</div>
            </Route>
            <Route path="/contact">
              <div>This will be the contact page</div>
            </Route>
          </div>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;

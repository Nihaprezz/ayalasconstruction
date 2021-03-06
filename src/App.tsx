import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Header} from "./components/Header";
import {Home} from "./pages/Home";
import {Footer} from "./components/Footer";
import {Services} from "./pages/Services";
import {Portfolio} from "./pages/Portfolio";
import {Contact} from "./pages/Contact";
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
              <Services/>
            </Route>
            <Route path="/portfolio">
              <Portfolio/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
          </div>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;

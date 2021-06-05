import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Header} from "./components/Header";
import "./App.scss";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/about">
            <div>This will be the about page</div>
          </Route>
          <Route path="/users">
            <div>This will be the users page</div>
          </Route>
          <Route path="/">
            <div>This will be the home page/default page</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

import React, { Component, lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const HomePage = lazy(() => import("./components/HomePage"));
const DisplayResults = lazy(() => import("./components/DisplayResults"));
const ImFeelingLucky = lazy(() => import("./components/ImFeelingLucky"));
const SavedCards = lazy(() => import("./components/savedCards"));

class App extends Component {
  state = {};
  render() {
    return (
      <Suspense fallback={<div> </div>}>
        <Router>
          <div>
            <Switch>
              <Route
                path="/imfeelinglucky"
                render={(props) => <ImFeelingLucky {...props} />}
              ></Route>
              <Route
                path="/search/:id"
                render={(props) => (
                  <DisplayResults yearFilters={props.yearFilters} {...props} />
                )}
              ></Route>
              <Route
                path="/search"
                render={(props) => (
                  <DisplayResults yearFilters={props.yearFilters} {...props} />
                )}
              ></Route>
              <Route
                path="/saved"
                render={(props) => (
                  <SavedCards yearFilters={props.yearFilters} {...props} />
                )}
              ></Route>
              <Route
                path="/"
                render={(props) => <HomePage {...props} />}
              ></Route>
            </Switch>
          </div>
        </Router>
      </Suspense>
    );
  }
}

export default App;

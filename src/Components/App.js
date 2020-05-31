import React from "react";
import UsersTable from "./UsersComponents/UsersTable";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ERR404 from "./ErrorComponents/ERR404";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={UsersTable} />
        <Route exact path="/page/:page" component={UsersTable} />
        <Redirect from="/LeeLoo/" to="/" />
        <Route
            render={() => {
              return <ERR404 />;
            }}
        />
      </Switch>
    </Router>
  );
};

export default App;

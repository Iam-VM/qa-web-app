import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import LogIn from "./components/login-page/LogIn";
import './App.css';


const App:React.FC = (): JSX.Element => {

  return (
      <Router>
        <Switch>
          <Route exact path={"/"} render={() => <Redirect to={'/login'} />} />
          <Route exact path={"/login"} render={() => (<LogIn />)} />
        </Switch>
      </Router>
  );
}

export default App;

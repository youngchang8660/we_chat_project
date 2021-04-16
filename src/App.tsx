import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Posts from './Components/Posts'
import Contacts from './Components/Contacts'

function App() {
  localStorage.setItem("servername", "http://localhost:3943");
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/posts" component={Posts} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </Router>
  );
}

export default App;

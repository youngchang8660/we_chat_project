import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register'

function App() {
  localStorage.setItem('servername', 'http://localhost:3943')
  return (
    <Router>
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
    </Router>
  );
}

export default App;

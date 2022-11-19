import React from 'react'
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route
  } from "react-router-dom";

  //importing pages
  import Home from './pages/Home';
  import Signup from './components/Signup';
  import Login from './components/Login';
  import Profile from './components/Profile';
export default function Routes() {
  return (
    <Router>
        <Switch>
        <Route exact path="/" element={<Home/>}>
            </Route>
        <Route exact path="/login" element={<Login/>}>
            </Route>
            <Route exact path="/signup" element={<Signup/>}>
            </Route>
            <Route exact path="/:name" element={<Profile/>}>
            </Route>
        </Switch>
    </Router>
  )
}

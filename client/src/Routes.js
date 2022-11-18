import React from 'react'
import Login from './components/Login';
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route
  } from "react-router-dom";

  //importing pages
  import Home from './pages/Home';
export default function Routes() {
  return (
    <Router>
        <Switch>
        <Route exact path="/" element={<Home/>}>
            </Route>
        <Route exact path="/login" element={<Login/>}>
            </Route>
        </Switch>
    </Router>
  )
}

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
  import Editor from './pages/Editor';
  import Share from './pages/Share';
  import View from './pages/View';
  import Edit from './pages/Edit';
  import Loader from './pages/Loader'

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
            <Route exact path="/editor" element={<Editor/>}> 
            </Route>
            <Route exact path="/share" element={<Share/>}> 
            </Route>
            <Route exact path="/view/:id" element={<View/>}> 
            </Route>
            <Route exact path="/edit/:id" element={<Edit/>}> 
            </Route>
            <Route exact path="/loader" element={<Loader/>}> 
            </Route>
        </Switch>
    </Router>
  )
}

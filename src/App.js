import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navigation from "./Navigation";
import Notes from "./Notes";
import MakeNote from './MakeNote';
import EditNote from './EditNote';
import Note from './Note';
import Pinned from "./Pinned";
import NoMatch from "./NoMatch";

export default class App extends React.Component {
  render() {
    return (
    <Router>
        <div className="container">
          <h1 className="page-title">Notes</h1>
          <Navigation/>

          <Switch>   

            <Route path="/notes/new" component={MakeNote} />
            <Route path="/notes/:notesid/edit" component={EditNote} />
            <Route path="/notes/:notesid" component={Note} />

            <Route path="/pinned">
              <Pinned /> 
            </Route>
            
            <Route exact path="/">
              <Notes />
            </Route>

            <Route path="*">
              <NoMatch />
            </Route>
            
            
            

          </Switch>
        </div>
        <ToastContainer 
          position="top-right"
          autoClose={5000}
          newestOnTop={false}
          closeOnClick
          draggable
          pauseOnHover/>
      </Router>
    );

  }
  
}


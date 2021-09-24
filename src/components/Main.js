import React from "react";
import SideBar from "./Sidebar";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Courses from "../pages/Courses";

function Main() {
  return (
    <div>
      <div className="header" style={{ zIndex: 3 }}>
        <SideBar />
      </div>
      <div>
        <Switch>
          <Route path="/home" component={() => <Home />} />
          <Route exact path="/aboutus" component={() => <About />} />
          <Route exact path="/courses" component={() => <Courses />} />
          <Redirect to="/home" />
        </Switch>
      </div>
    </div>
  );
}

export default Main;
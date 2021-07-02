import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from "../components/ui/NavBar";
import HeroesScreen from "../containers/HeroesScreen";
import Heroe from "../containers/Heroe";

export default function AppRouter() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
            <Route exact path="/" component={HeroesScreen} />
            <Route exact path="/dc" component={HeroesScreen} />
            <Route exact path="/marvel" component={HeroesScreen} />
            <Route exact path="/heroe/:id" component={Heroe} />
        </Switch>
      </div>
    </Router>
  );
}
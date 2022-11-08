import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/header/Header';
import HomePages from './home/HomePages';

function App() {
  return (
    <>
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={HomePages}>
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;

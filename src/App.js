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
import Footer from './components/footer/Footer';
import SinglePage from './components/watch/SinglePage';

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={HomePages} />
            <Route path="/singlePage/:id" component={SinglePage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;

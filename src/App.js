import logo from './logo.svg';
import './App.css';
import HomePages from './components/homes/HomePages';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/header/Header';

function App() {
  return (
    <>
    <Router>
      <Header/>
        <Switch>
          <Route exact path='/' component={HomePages}/>
        </Switch>
    </Router>
    </>
  );
}

export default App;

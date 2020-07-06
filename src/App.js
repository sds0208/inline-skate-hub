import React from 'react';
import './App.css';
import Nav from './components/nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './views/about';
import Home from './views/home';
import Learning from './views/learning';
import Shops from './views/shops';
import SkateWeather from './views/skate-weather';

function App(props) {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Nav />
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about"><About /></Route>
            <Route path="/shops"><Shops /></Route>
            <Route path="/skate-weather"><SkateWeather /></Route>
            <Route path="/learning"><Learning /></Route>
          </Switch>
        </main>  
      </Router>
    </div>
  );
}

export default App;

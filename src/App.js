import React from 'react';
import Header from './components/Header/Header';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Projects from './pages/Projects';
import MaterialCards from './pages/MaterialCards';
import Contractors from './pages/Contractors';
import Inspectors from './pages/Inspectors';
import Engineers from './pages/Engineers';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="wrapper">
          <Switch>
            <Route path="/" exact></Route>
            {/* <Route path="/projects">
            <Projects />
          </Route> */}
            <Route path="/material-cards">
              <MaterialCards />
            </Route>
            <Route path="/contractors">
              <Contractors />
            </Route>
            <Route path="/inspectors">
              <Inspectors />
            </Route>
            <Route path="/engineers">
              <Engineers />
            </Route>
            <Route path="*">404</Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;

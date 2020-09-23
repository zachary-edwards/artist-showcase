import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/artist'>
              <div>
                this is a test
              </div>
            </Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  )
}

export default App;

import React from 'react';
import './App.css';
import ProfileCard from './components/ProfileCard';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path='/' exact>
              <section className="container mt-4 mb-4">
                <div className="container">
                  <ProfileCard odd/>
                  <ProfileCard />
                  <ProfileCard odd/>
                  <ProfileCard />
                </div>
              </section>
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

import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Header from './components/Nav/Header';
import SideNav from './components/Nav/SideNav';
import About from './components/About';

function App() {
  const [showSideNav, setShowSideNav] = useState(false)

  const handleOnClick = (event: any) => {
    event.preventDefault()
    setShowSideNav(!showSideNav)
  }

  return (
    <div className="container">
      <BrowserRouter>
        <Header onClick={handleOnClick} />
        <SideNav
          show={showSideNav}
          onClick={handleOnClick}
        />

        <div className="main">
          <div className="content">
            <Switch>
              <Route path='/' exact>
                <Home />
              </Route>
              <Route path='/artist'>
                <div>
                  this is a test
                </div>
              </Route>
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/contact'>
                <div>
                  TODO: Contact us
                </div>
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div >
  )
}

export default App;

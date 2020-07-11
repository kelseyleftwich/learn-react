import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Gallery />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

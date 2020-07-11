import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="App-header">
      <header>
        <hgroup>
          <h1>Harvard Art Museums</h1>
          <h2>
            Fogg Museum / Busch-Reisinger Museum / Arthur M. Sackler Museum
          </h2>
        </hgroup>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Header;

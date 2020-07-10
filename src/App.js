import React from 'react';
import Header from './components/Header';
import ArtObject from './components/ArtObject';
import './App.css';
import art from './art.json';

function App() {
  return (
    <div className="App">
      <Header />
      <ArtObject art={art[0]} />
      <ArtObject art={art[1]} />
    </div>
  );
}

export default App;

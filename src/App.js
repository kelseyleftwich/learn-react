import React from 'react';
import Header from './components/Header';
import ArtObject from './components/ArtObject';
import './App.css';
import art from './art.json';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ArtObject art={art[0]} featured />
        <ArtObject art={art[1]} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

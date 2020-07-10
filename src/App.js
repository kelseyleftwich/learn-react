import React from 'react';
import Header from './components/Header';
import './App.css';
import art from './art.json';
import Footer from './components/Footer';
import ArtObjectList from './components/ArtObjectList';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ArtObjectList artObjects={art} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

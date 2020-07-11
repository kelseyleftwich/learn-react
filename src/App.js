import React from 'react';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import art from '../art.json';
import ArtObjectList from './ArtObjectList';

function App() {
  return (
    <main>
      <ArtObjectList artObjects={art} />
    </main>
  );
}

export default App;

import React, { useState } from 'react';
import art from '../art.json';
import ArtObjectList from './ArtObjectList';

const style = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const Gallery = () => {
  const [featuredOnly, setFeaturedOnly] = useState(false);

  const filteredArtObjects = !featuredOnly
    ? art
    : art.filter((artObject) => artObject.featured);
  const countMessage = featuredOnly
    ? `${filteredArtObjects.length} Featured Objects`
    : `${filteredArtObjects.length} Objects`;
  return (
    <main>
      <header style={style}>
        <div>
          <p>{countMessage}</p>
        </div>

        <div>
          <button onClick={() => setFeaturedOnly((prev) => !prev)}>
            {featuredOnly ? 'Show All' : 'Show Featured Only'}
          </button>
        </div>
      </header>
      <ArtObjectList artObjects={filteredArtObjects} />
    </main>
  );
};

export default Gallery;

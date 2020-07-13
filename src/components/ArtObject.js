import React from 'react';
import PropTypes from 'prop-types';
import types from '../types/propTypes';

const ArtObject = ({ artObject, featured }) => {
  const { imgSrc, title, objectNumber, people } = artObject;
  return (
    <article className="ArtObject">
      <figure>
        <img src={imgSrc} alt={title} />
      </figure>
      <header>
        <h3>{title}</h3>
      </header>
      <dl>
        <dl>
          <dt>Object Number</dt>
          <dd>{objectNumber}</dd>
          <dt>Artist</dt>
          <dd>{people[0]}</dd>

          <dt>Title</dt>
          <dd>{title}</dd>
        </dl>
      </dl>
      <footer>{featured && <mark>Featured Exhibition</mark>}</footer>
    </article>
  );
};

ArtObject.propTypes = {
  artObject: types.artObject.isRequired,
  featured: PropTypes.bool,
};

ArtObject.defaultProps = {
  featured: false,
};

export default ArtObject;

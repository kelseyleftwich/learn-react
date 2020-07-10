import React from 'react';
import PropTypes from 'prop-types';

const ArtObject = ({ art, featured }) => {
  const { imgSrc, title, objectNumber, people } = art;
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
  art: PropTypes.shape({
    imgSrc: PropTypes.string,
    title: PropTypes.string.isRequired,
    objectNumber: PropTypes.string.isRequired,
    people: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  featured: PropTypes.bool,
};

ArtObject.defaultProps = {
  featured: false,
};

export default ArtObject;

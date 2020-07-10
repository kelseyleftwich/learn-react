import React from 'react';

const ArtObject = ({ art }) => {
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
    </article>
  );
};

export default ArtObject;

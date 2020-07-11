import React from 'react';
import PropTypes from 'prop-types';
import ArtObject from './ArtObject';
import types from '../types/propTypes';

const ArtObjectList = ({ artObjects }) => {
  return artObjects.map((artObject) => (
    <ArtObject
      key={artObject.objectNumber}
      artObject={artObject}
      featured={artObject.featured}
    />
  ));
};

ArtObjectList.propTypes = {
  artObjects: PropTypes.arrayOf(types.artObject),
};

export default ArtObjectList;

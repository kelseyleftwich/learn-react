import React from 'react';
import PropTypes from 'prop-types';
import ArtObject from './ArtObject';
import types from '../types/propTypes';
import { Component } from 'react';

class ArtObjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { artObjects } = this.props;
    return artObjects.map((artObject) => (
      <ArtObject
        key={artObject.objectNumber}
        artObject={artObject}
        featured={artObject.featured}
      />
    ));
  }
}

ArtObjectList.propTypes = {
  artObjects: PropTypes.arrayOf(types.artObject),
};

export default ArtObjectList;

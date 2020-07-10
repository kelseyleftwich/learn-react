import React from 'react';
import PropTypes from 'prop-types';
import ArtObject from './ArtObject';
import types from '../types/propTypes';
import { Component } from 'react';

const style = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};

class ArtObjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredOnly: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      featuredOnly: !state.featuredOnly,
    }));
  }

  render() {
    const { artObjects } = this.props;
    const { featuredOnly } = this.state;

    const filteredArtObjects = !featuredOnly
      ? artObjects
      : artObjects.filter((artObject) => artObject.featured);

    return (
      <section>
        <header style={style}>
          <div>
            <p>
              {filteredArtObjects.length} {featuredOnly && 'Featured '}Objects
            </p>
          </div>

          <div>
            <button onClick={this.handleClick}>
              {featuredOnly ? 'Show All' : 'Show Featured Only'}
            </button>
          </div>
        </header>
        {filteredArtObjects.map((artObject) => (
          <ArtObject
            key={artObject.objectNumber}
            artObject={artObject}
            featured={artObject.featured}
          />
        ))}
      </section>
    );
  }
}

ArtObjectList.propTypes = {
  artObjects: PropTypes.arrayOf(types.artObject),
};

export default ArtObjectList;

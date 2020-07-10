import PropTypes from 'prop-types';

const artObject = PropTypes.shape({
  imgSrc: PropTypes.string,
  title: PropTypes.string.isRequired,
  objectNumber: PropTypes.string.isRequired,
  people: PropTypes.arrayOf(PropTypes.string).isRequired,
});

export default { artObject };

import PropTypes from 'prop-types';

const dogShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
});

export default { dogShape };

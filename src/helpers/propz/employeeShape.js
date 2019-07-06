import PropTypes from 'prop-types';

const employeeShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  dogsOwned: PropTypes.number.isRequired,
  imgUrl: PropTypes.string.isRequired,
});

export default { employeeShape };

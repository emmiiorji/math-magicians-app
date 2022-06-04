import PropTypes from 'prop-types';
import React from 'react';

const Display = (
  {
    id, total, operation, next,
  },
) => (
  <div id={id}>
    {`${total} ${operation} ${next}`}
  </div>
);

Display.propTypes = {
  id: PropTypes.string.isRequired,
  total: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  operation: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
};

export default Display;

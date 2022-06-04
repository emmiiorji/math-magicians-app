import PropTypes from 'prop-types';
import React from 'react';

const Key = ({
  value, id, onClick, className,
}) => {
  const handleKeyClick = (e) => {
    onClick(e.target.innerText);
  };

  return (
    <button type="button" className={className} id={id} onClick={handleKeyClick}>
      {value}
    </button>
  );
};

// Key.defaultProps = {
//   className: 'key',
// };

Key.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Key;

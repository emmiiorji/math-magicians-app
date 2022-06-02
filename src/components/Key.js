import PropTypes from 'prop-types';
import React from 'react';

class Key extends React.Component {
  constructor(props) {
    super(props);
    [this.value, this.className, this.id] = [props.value, props.className, props.id];
  }

  render() {
    return (
      <button type="button" className={this.className} id={this.id}>
        {this.value}
      </button>
    );
  }
}

Key.defaultProps = {
  className: 'key',
  id: '',
};

Key.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default Key;

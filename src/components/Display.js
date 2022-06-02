import PropTypes from 'prop-types';
import React from 'react';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.className = props.className;
    this.value = props.value;
  }

  render() {
    return <div className={this.className}>{this.value}</div>;
  }
}

Display.defaultProps = {
  className: 'display',
  value: 0,
};

Display.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
};

export default Display;

import PropTypes from 'prop-types';
import React from 'react';

class Display extends React.Component {
  constructor(props) {
    super(props);
    [this.id, this.value] = [props.id, props.value];
  }

  render() {
    return <div id={this.id}>{this.value}</div>;
  }
}

Display.defaultProps = {
  id: 'display',
  value: 0,
};

Display.propTypes = {
  id: PropTypes.string,
  value: PropTypes.number,
};

export default Display;

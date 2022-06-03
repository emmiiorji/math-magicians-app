import PropTypes from 'prop-types';
import React from 'react';

class Display extends React.Component {
  constructor(props) {
    super(props);
    [this.id, this.total] = [props.id, props.total];
  }

  render() {
    const { total, operation, next } = this.props;
    return (
      <div id={this.id}>
        {`${total}${operation}${next}`}
      </div>
    );
  }
}

Display.defaultProps = {
  id: 'display',
};

Display.propTypes = {
  id: PropTypes.string,
  total: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  operation: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
};

export default Display;

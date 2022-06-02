import React from 'react';
import PropTypes from 'prop-types';
import Display from './Display';
import Keypad from './Keypad';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id;
  }

  render() {
    return (
      <div id={this.id}>
        <Display />
        <Keypad />
      </div>
    );
  }
}

Calculator.defaultProps = {
  id: 'calculator',
};

Calculator.propTypes = {
  id: PropTypes.string,
};

export default Calculator;

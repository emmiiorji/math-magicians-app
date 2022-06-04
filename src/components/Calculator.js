import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Display from './Display';
import Keypad from './Keypad';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.handleKeyClick = this.handleKeyClick.bind(this);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  handleKeyClick(buttonName) {
    this.setState((state) => {
      const result = calculate(state, buttonName);
      return result;
    });
  }

  render() {
    const { next, operation } = this.state;
    let { total } = this.state;
    total = total === null && next ? '' : total;

    return (
      <div id={this.id}>
        <Display
          total={total === null ? 0 : total}
          next={next || ''}
          operation={operation || ''}
        />
        <Keypad handleKeyClick={this.handleKeyClick} id="keypad" />
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

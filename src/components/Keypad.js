import PropTypes from 'prop-types';
import React from 'react';
import Key from './Key';

class Keypad extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id;
  }

  render() {
    const { handleKeyClick } = this.props;
    const symbols = [
      { value: 'AC', id: 'AC' }, { value: '+/-', id: 'plus-minus' },
      { value: '%', id: 'percent' }, { value: '÷', id: 'divide', className: 'key orange' },
      { value: '7', id: 'seven' }, { value: '8', id: 'eight' },
      { value: '9', id: 'nine' }, { className: 'key orange', value: 'x', id: 'times' },
      { value: '4', id: 'four' }, { value: '5', id: 'five' },
      { value: '6', id: 'six' }, { className: 'key orange', value: '-', id: 'minus' },
      { value: '1', id: 'one' }, { value: '2', id: 'two' },
      { value: '3', id: 'three' }, { value: '+', id: 'plus', className: 'key orange' },
      { value: '0', id: 'zero' }, { value: '.', id: 'dot' }, { value: '=', id: 'equal', className: 'key orange' },
    ];
    return (
      <div id={this.id}>
        {symbols.map((symbol) => (
          symbol.className
            ? (
              <Key
                value={symbol.value}
                id={symbol.id}
                key={`${symbol.id}2`}
                className={symbol.className}
              />
            )
            : (
              <Key
                value={symbol.value}
                id={symbol.id}
                key={`${symbol.id}1`}
              />
            )
        ))}
      </div>
    );
  }
}

Keypad.defaultProps = {
  id: 'keypad',
};

Keypad.propTypes = {
  id: PropTypes.string,
  handleKeyClick: PropTypes.func.isRequired,
};

export default Keypad;

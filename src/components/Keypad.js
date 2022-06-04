import PropTypes from 'prop-types';
import React from 'react';

import Key from './Key';

const Keypad = ({ id, handleKeyClick }) => {
  const symbols = [
    { value: 'AC', id: 'AC', className: 'key' }, { value: '+/-', id: 'plus-minus', className: 'key' },
    { value: '%', id: 'percent', className: 'key' }, { value: '÷', id: 'divide', className: 'key orange' },
    { value: '7', id: 'seven', className: 'key' }, { value: '8', id: 'eight', className: 'key' },
    { value: '9', id: 'nine', className: 'key' }, { value: 'x', id: 'times', className: 'key orange' },
    { value: '4', id: 'four', className: 'key' }, { value: '5', id: 'five', className: 'key' },
    { value: '6', id: 'six', className: 'key' }, { value: '-', id: 'minus', className: 'key orange' },
    { value: '1', id: 'one', className: 'key' }, { value: '2', id: 'two', className: 'key' },
    { value: '3', id: 'three', className: 'key' }, { value: '+', id: 'plus', className: 'key orange' },
    { value: '0', id: 'zero', className: 'key' }, { value: '.', id: 'dot', className: 'key' },
    { value: '=', id: 'equal', className: 'key orange' },
  ];
  return (
    <div id={id}>
      {symbols.map((symbol) => (
        <Key
          value={symbol.value}
          id={symbol.id}
          key={`${symbol.id}2`}
          className={symbol.className}
          onClick={handleKeyClick}
        />
      ))}
    </div>
  );
};

Keypad.propTypes = {
  id: PropTypes.string.isRequired,
  handleKeyClick: PropTypes.func.isRequired,
};

export default Keypad;

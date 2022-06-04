import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Display from './Display';
import Keypad from './Keypad';
import calculate from '../logic/calculate';

const Calculator = ({ id }) => {
  const [calcObject, setCalcObject] = useState({ total: 0, next: null, operation: null });

  const handleKeyClick = (buttonName) => {
    setCalcObject((state) => {
      const result = calculate(state, buttonName);
      return result;
    });
  };

  const { next, operation } = calcObject;
  let { total } = calcObject;
  total = total === null && next !== null ? '' : total;

  return (
    <div id={id}>
      <Display
        total={total === null ? 0 : total}
        next={next || ''}
        operation={operation || ''}
      />
      <Keypad handleKeyClick={handleKeyClick} id="keypad" />
    </div>
  );
};

Calculator.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Calculator;

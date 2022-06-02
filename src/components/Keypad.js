import PropTypes from 'prop-types';
import React from 'react';
import Key from './Key';

class Keypad extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id;
  }

  render() {
    return (
      <div id={this.id}>
        <Key value="AC" />
        <Key value="+/-" />
        <Key value="%" />
        <Key className="key orange" value="÷" />

        <Key value="7" />
        <Key value="8" />
        <Key value="9" />
        <Key className="key orange" value="x" />

        <Key value="4" />
        <Key value="5" />
        <Key value="6" />
        <Key className="key orange" value="-" />

        <Key value="1" />
        <Key value="2" />
        <Key value="3" />
        <Key className="key orange" value="+" />

        <Key value="0" id="zero" />
        <Key value="." />
        <Key className="key orange" value="=" />
      </div>
    );
  }
}

Keypad.defaultProps = {
  id: 'keypad',
};

Keypad.propTypes = {
  id: PropTypes.string,
};

export default Keypad;

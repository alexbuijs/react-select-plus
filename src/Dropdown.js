import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';

const Dropdown = createClass({
  propTypes: {
    children: PropTypes.any,
  },
  render () {
    // This component adds no markup
    return this.props.children;
  }
});

module.exports = Dropdown;

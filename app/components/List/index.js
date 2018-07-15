/**
 *
 * List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class List extends React.PureComponent {
  render() {
    return (
      <ul>
        {this.props.strings.map(str => (
          <li key={str.get('_id')}>{str.get('text')}</li>
        ))}
      </ul>
    );
  }
}

List.propTypes = {
  strings: PropTypes.object,
};

export default List;

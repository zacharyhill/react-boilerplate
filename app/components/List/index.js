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
      <div>
        {this.props.strings.map(str => (
          <div key={str.get('_id')}>{str.get('text')}</div>
        ))}
      </div>
    );
  }
}

List.propTypes = {
  strings: PropTypes.object,
};

export default List;

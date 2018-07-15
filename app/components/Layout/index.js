/**
 *
 * Layout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class Layout extends React.PureComponent {
  render() {
    return (
      <div>
        <h3>Navigation Placeholder</h3>
        {this.props.children}
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;

/**
 *
 * Layout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Navigation from '../Navigation/Loadable';

/* eslint-disable react/prefer-stateless-function */
class Layout extends React.PureComponent {
  render() {
    return (
      <div>
        <Navigation location={this.props.location} />
        {this.props.children}
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
};

export default Layout;

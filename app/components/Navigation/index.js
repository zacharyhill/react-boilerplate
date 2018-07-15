/**
 *
 * Navigation
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavItem = styled.div`
  color: gray;
  display: inline-block;
  font-family: serif;
  padding: 10px 14px;
`;

/* eslint-disable react/prefer-stateless-function */
class Navigation extends React.PureComponent {
  render() {
    return (
      <div>
        <NavItem>
          <Link to="/" href="/">
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/list" href="/list">
            View
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/add" href="/add">
            Add
          </Link>
        </NavItem>
      </div>
    );
  }
}

Navigation.propTypes = {
  // location: PropTypes.object,
};

export default Navigation;

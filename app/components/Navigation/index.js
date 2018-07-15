/**
 *
 * Navigation
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationBar = styled.div`
  background-color: #add8e6;
  margin-bottom: 10px;
`;

const NavItem = styled.div`
  color: gray;
  display: inline-block;
  font-family: serif;
  padding: 10px 14px;
`;

/* eslint-disable react/prefer-stateless-function */
class Navigation extends React.PureComponent {
  render() {
    const HomeLink = NavItem.extend`
      color: ${this.props.location.pathname === '/' ? 'red' : 'black'};
    `;
    const ListLink = NavItem.extend`
      color: ${this.props.location.pathname === '/list' ? 'red' : 'black'};
    `;
    const AddStringLink = NavItem.extend`
      color: ${this.props.location.pathname === '/add' ? 'red' : 'black'};
    `;
    return (
      <NavigationBar>
        <Link to="/" href="/">
          <HomeLink>Home</HomeLink>
        </Link>
        <Link to="/list" href="/list">
          <ListLink>View</ListLink>
        </Link>
        <Link to="/add" href="/add">
          <AddStringLink>Add</AddStringLink>
        </Link>
      </NavigationBar>
    );
  }
}

Navigation.propTypes = {
  location: PropTypes.object,
};

export default Navigation;

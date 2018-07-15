/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Layout from '../../components/Layout/Loadable';

/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.PureComponent {
  render() {
    const { location } = this.props;
    return (
      <Layout location={location}>
        <FormattedMessage {...messages.header} />
      </Layout>
    );
  }
}

HomePage.propTypes = {
  location: PropTypes.object,
};

export default HomePage;

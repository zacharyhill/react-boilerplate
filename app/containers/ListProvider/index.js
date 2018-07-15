/**
 *
 * ListProvider
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectListProvider from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { FETCH } from './constants';
import Layout from '../../components/Layout/Loadable';
import List from '../../components/List/Loadable';

/* eslint-disable react/prefer-stateless-function */
export class ListProvider extends React.PureComponent {
  componentDidMount() {
    this.props.dispatch({
      type: FETCH,
    });
  }
  render() {
    const { strings, location } = this.props;
    return (
      <Layout location={location}>
        <Helmet>
          <title>List All</title>
          <meta name="List All Strings" content="List of Strings" />
        </Helmet>
        <FormattedMessage {...messages.header} />
        <List strings={strings} />
      </Layout>
    );
  }
}

ListProvider.propTypes = {
  dispatch: PropTypes.func.isRequired,
  strings: PropTypes.object,
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  strings: makeSelectListProvider(),
});

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'listProvider', reducer });
const withSaga = injectSaga({ key: 'listProvider', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ListProvider);

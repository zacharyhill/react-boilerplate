/**
 *
 * AddString
 *
 */

import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { API_URL } from '../../config';
import Layout from '../Layout/Loadable';

/* eslint-disable react/prefer-stateless-function */
class AddString extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
    this.handleChange = this.handleTextChange.bind(this);
    this.submit = this.submitText.bind(this);
    this.submitIfEnterKey = this.listenForSubmit.bind(this);
  }
  handleTextChange(event) {
    const text = event.target.value;
    this.setState({ text });
  }
  listenForSubmit(event) {
    if (event.key === 'Enter') {
      this.submit();
    }
  }
  submitText() {
    const { text } = this.state;
    axios.post(API_URL, { text, posted: Date.now() });
    this.setState({ text: '' });
  }
  render() {
    return (
      <Layout location={this.props.location}>
        <label htmlFor="text">
          Add:
          <input
            id="text"
            onChange={this.handleChange}
            onKeyPress={this.submitIfEnterKey}
            placeholder="text"
            type="text"
            value={this.state.text}
          />
          <button onClick={this.submit}>Submit</button>
        </label>
      </Layout>
    );
  }
}

AddString.propTypes = {
  location: PropTypes.object,
};

export default AddString;

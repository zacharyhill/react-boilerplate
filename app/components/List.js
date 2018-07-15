import React from 'react';

const list = props =>
  props.strings.map(str => <div key={str.get('_id')}>{str.get('text')}</div>);

export default list;

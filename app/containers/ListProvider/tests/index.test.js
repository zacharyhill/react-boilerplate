import React from 'react';
import { shallow } from 'enzyme';

import { FETCH } from '../constants';
import { ListProvider, mapDispatchToProps } from '../index';

describe('<ListProvider />', () => {
  it('Should dispatch FETCH action when mounted', () => {
    let calledFetch = false;
    const dispatchStub = action => {
      if (action.type === FETCH) {
        calledFetch = true;
      }
    };
    shallow(<ListProvider dispatch={dispatchStub} />);
    expect(calledFetch).toEqual(true);
  });
  it('Should map dispatch onto props', () => {
    const testObj = { msg: 'test' };
    const result = mapDispatchToProps(testObj);
    expect(result).toEqual({ dispatch: testObj });
  });
});

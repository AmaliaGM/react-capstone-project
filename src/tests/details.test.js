import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, renderMatches } from 'react-router-dom';
import store from '../Redux/ConfigureStore';
import Details from '../pages/Details';

describe('Render components', () => {
  test('render HomePage', () => {
    const tree = renderMatches
      .create(<Router><Provider store={store}><Details /></Provider></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

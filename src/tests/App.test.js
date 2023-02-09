import { renderMatches, Router } from 'react-router-dom';
import App from '../App';

describe('Render Components', () => {
  test('renders learn react link', () => {
    const tree = renderMatches
      .create(<Router><App /></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

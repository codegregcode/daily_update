import { render } from '@testing-library/react';
import App from '../components/App';

describe('App component', () => {
  it('matches the snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});

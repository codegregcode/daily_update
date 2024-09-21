import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../components/App';

describe('App component', () => {
  it('matches the snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

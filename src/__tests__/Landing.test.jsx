import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Landing from '../components/Landing';
import { expect } from 'vitest';

describe('Landing component', () => {
  it('renders h1', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Landing />
      </MemoryRouter>
    );

    const h1Element = getByText('daily_update');
    expect(h1Element).toBeInTheDocument();
  });

  it('renders login button', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Landing />
      </MemoryRouter>
    );

    const loginButton = getByText('Login/SignUp');
    expect(loginButton).toBeInTheDocument();
  });
});

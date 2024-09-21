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
    const loginButton = getByText('Login');

    expect(loginButton).toBeInTheDocument();
  });

  it('renders register button', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Landing />
      </MemoryRouter>
    );
    const registerButton = getByText('Register');

    expect(registerButton).toBeInTheDocument();
  });

  it('renders forgotten password button', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Landing />
      </MemoryRouter>
    );
    const forgottenPasswordButton = getByText('Forgotten Password?');

    expect(forgottenPasswordButton).toBeInTheDocument();
  });
});

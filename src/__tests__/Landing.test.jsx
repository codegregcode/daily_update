import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Landing from '../components/Landing';
import Login from '../components/Login';
import Register from '../components/Register';
import ForgotPW from '../components/ForgotPW';
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

  it('navigates to /login when the login button is clicked', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </MemoryRouter>
    );

    fireEvent.click(getByText('Login'));
    expect(getByText(/login/i)).toBeInTheDocument();
  });

  it('navigates to /register when the register button is clicked', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </MemoryRouter>
    );

    fireEvent.click(getByText('Register'));
    expect(getByText(/register/i)).toBeInTheDocument();
  });

  it('navigates to /forgot-password when the forgotten password button is clicked', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/forgot-password" element={<ForgotPW />} />
        </Routes>
      </MemoryRouter>
    );

    fireEvent.click(getByText('Forgotten Password?'));
    expect(getByText(/forgotPW/i)).toBeInTheDocument();
  });
});

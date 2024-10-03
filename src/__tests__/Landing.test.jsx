import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Landing from '../components/Landing';
import { expect, vi, beforeEach } from 'vitest';
import { useAuthState } from '../firebase';
import { useNavigate } from 'react-router-dom';

vi.mock('../firebase', () => ({
  signInWithGoogle: vi.fn(),
  auth: {},
  useAuthState: vi.fn(),
}));

vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

describe('Landing component', () => {
  const navigate = vi.fn();

  beforeEach(() => {
    useAuthState.mockReturnValue([null, false]);
    useNavigate.mockReturnValue(navigate);
  });

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

  it('navigates to /dashboard if user is logged in', async () => {
    useAuthState.mockReturnValue([{ uid: '123' }, false]); // Simulate user logged in

    render(
      <MemoryRouter>
        <Landing />
      </MemoryRouter>
    );

    expect(navigate).toHaveBeenCalledWith('/dashboard');
  });
});

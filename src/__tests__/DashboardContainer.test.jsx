import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import DashboardContainer from '../components/DashboardContainer';
import useFetchOnboardStatus from '../hooks/useFetchOnboardStatus';

vi.mock('../hooks/useFetchOnboardStatus');

describe('DashboardContainer component', () => {
  it('displays loading message when loading is true', () => {
    useFetchOnboardStatus.mockReturnValue({
      onboardStatus: null,
      loading: true,
      error: null,
    });

    render(<DashboardContainer />);

    const loadingElement = screen.getByText('Loading...');
    expect(loadingElement).toBeInTheDocument();
  });

  it('displays error message when there is an error', () => {
    useFetchOnboardStatus.mockReturnValue({
      onboardStatus: null,
      loading: false,
      error: 'Error fetching data',
    });

    render(<DashboardContainer />);

    const errorElement = screen.getByText('Error loading user data.');
    expect(errorElement).toBeInTheDocument();
  });

  it('displays Onboard component when onboardStatus is "start"', () => {
    useFetchOnboardStatus.mockReturnValue({
      onboardStatus: 'start',
      loading: false,
      error: null,
    });

    render(<DashboardContainer />);

    const dashboardHeading = screen.getByText('Dashboard');
    expect(dashboardHeading).toBeInTheDocument();

    const onboardComponent = screen.getByText('Please fill in the form below:');
    expect(onboardComponent).toBeInTheDocument();
  });

  it('displays InProgress component when onboardStatus is "progress"', () => {
    useFetchOnboardStatus.mockReturnValue({
      onboardStatus: 'progress',
      loading: false,
      error: null,
    });

    render(<DashboardContainer />);

    const dashboardHeading = screen.getByText('Dashboard');
    expect(dashboardHeading).toBeInTheDocument();

    const inProgressComponent = screen.getByText(
      'Please wait while your account gets activated/verified'
    );
    expect(inProgressComponent).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import InProgress from '../components/InProgress';

describe('InProgress Component', () => {
  it('renders component with correct text', () => {
    render(<InProgress />);

    const progressText = screen.getByText(
      'Please wait while your account gets activated/verified'
    );

    expect(progressText).toBeInTheDocument();
  });
});

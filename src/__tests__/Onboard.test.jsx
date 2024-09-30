import { render, screen, fireEvent } from '@testing-library/react';
import Onboard from '../components/Onboard';

describe('Onboard Component', () => {
  it('renders the form with role selection', () => {
    render(<Onboard />);

    const buyingRadio = screen.getByRole('radio', { name: 'Buying' });
    const customerCareRadio = screen.getByRole('radio', {
      name: 'Customer Care',
    });
    const customerServiceAdvisorRadio = screen.getByRole('radio', {
      name: 'Customer Service Advisor',
    });
    const teamLeaderRadio = screen.getByRole('radio', {
      name: 'Team Leader/Manager (Buying, CC, CS)',
    });

    expect(buyingRadio).toBeInTheDocument();
    expect(customerCareRadio).toBeInTheDocument();
    expect(customerServiceAdvisorRadio).toBeInTheDocument();
    expect(teamLeaderRadio).toBeInTheDocument();
  });

  it('selects the Buying role and displays the relevant teams', () => {
    render(<Onboard />);

    const buyingRadio = screen.getByRole('radio', { name: 'Buying' });
    fireEvent.click(buyingRadio);

    expect(buyingRadio.checked).toBe(true);
    expect(screen.getByLabelText(/Dark Horse/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Boom!/i)).toBeInTheDocument();
  });

  it('ensures selecting one role deselects others', () => {
    render(<Onboard />);

    const buyingRadio = screen.getByRole('radio', { name: 'Buying' });
    const customerCareRadio = screen.getByRole('radio', {
      name: 'Customer Care',
    });

    fireEvent.click(buyingRadio);
    expect(buyingRadio.checked).toBe(true);
    expect(customerCareRadio.checked).toBe(false);

    fireEvent.click(customerCareRadio);
    expect(buyingRadio.checked).toBe(false);
    expect(customerCareRadio.checked).toBe(true);
  });

  it('ensures selecting a role and team is reflected correctly', () => {
    render(<Onboard />);

    const buyingRadio = screen.getByRole('radio', { name: 'Buying' });
    fireEvent.click(buyingRadio);

    const darkHorseRadio = screen.getByLabelText(/Dark Horse/i);
    fireEvent.click(darkHorseRadio);

    expect(buyingRadio.checked).toBe(true);
    expect(darkHorseRadio.checked).toBe(true);
  });

  it('does not show teams if no role is selected', () => {
    render(<Onboard />);

    expect(screen.queryByLabelText(/Dark Horse/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/Boom!/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/Marvel/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/DC/i)).not.toBeInTheDocument();
  });
});

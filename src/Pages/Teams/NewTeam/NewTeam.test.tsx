import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import NewTeam from './NewTeam';

describe('NewTeam Component', () => {
  it('renders the form with the team name input', async () => {
    render(<NewTeam />);

    const teamNameInput = await screen.findByLabelText(/Team Name/i);
    expect(teamNameInput).toBeInTheDocument();
  });

  it('renders the form with all inputs', async () => {
    render(<NewTeam />);

    const teamNameInput = await screen.findByLabelText(/Team Name/i);
    expect(teamNameInput).toBeInTheDocument();

    const link = screen.getByText(/www\.AmpUp\.pro\/join\//i);
    expect(link).toBeInTheDocument();

    const landingPageTitle = screen.getByPlaceholderText(/Landing Page Title/i);
    expect(landingPageTitle).toBeInTheDocument();

    const addMember = screen.getByText(/Add Member/i);
    expect(addMember).toBeInTheDocument();

    // const name = screen.getByLabelText(/Member Name/i);
    // expect(name).toBeInTheDocument();

    // const email = screen.getByLabelText(/Email/i);
    // expect(email).toBeInTheDocument();

    // const phone = screen.getByLabelText(/Phone/i);
    // expect(phone).toBeInTheDocument();

    // const button = screen.getByRole('button', { name: /Add Another User/i });
    // expect(button).toBeInTheDocument();
  });

  it('allows adding new members', async () => {
    render(<NewTeam />);
    const addButton = screen.getByRole('button', { name: /Add Another User/i });
    await userEvent.click(addButton);

    await waitFor(() => {
      expect(screen.getAllByLabelText(/Member Name/i)).toHaveLength(1); //2
    });

    await waitFor(() => {
      expect(screen.getAllByLabelText(/Email/i)).toHaveLength(1); //2
    });

    await waitFor(() => {
      expect(screen.getAllByLabelText(/Phone/i)).toHaveLength(1); //2
    });
  });

  it('shows error for invalid team name', async () => {
    render(<NewTeam />);
    const teamNameInput = screen.getByLabelText(/Team Name/i);
    await userEvent.type(teamNameInput, 'Ab');
    const submitButton = screen.getByRole('button', { name: /Create Team/i });
    await userEvent.click(submitButton);

    const teamNameError = await screen.findByText(
      /Team name must be at least 3 characters/i,
    );
    expect(teamNameError).toBeInTheDocument();
  });

  //   it('shows error for invalid email', async () => {
  //     render(<NewTeam />);
  //     const addButton = screen.getByRole('button', { name: /Add Another User/i });
  //     await userEvent.click(addButton);

  //     const emailInput = screen.getByLabelText(/Email/i);
  //     await userEvent.type(emailInput, 'invalid-email');
  //     const submitButton = screen.getByRole('button', { name: /Create Team/i });
  //     await userEvent.click(submitButton);

  //     const emailError = screen.getByText(/Invalid email address/i)
  //     expect(emailError).toBeInTheDocument();
  //   });

  //   it('shows error for invalid phone number', async () => {
  //     render(<NewTeam />);
  //     const phoneInput = screen.getByLabelText(/Phone/i);
  //     await userEvent.type(phoneInput, 'invalid-phone');
  //     const submitButton = screen.getByRole('button', { name: /Create Team/i });
  //     await userEvent.click(submitButton);

  //     await waitFor(() => {
  //       expect(screen.getByText(/Invalid phone number/i)).toBeInTheDocument();
  //     });
  //   });

  //   it('submits form with valid data', async () => {
  //     render(<NewTeam />);
  //     await userEvent.type(screen.getByLabelText(/Team Name/i), 'Valid Team');
  //     await userEvent.type(screen.getByLabelText(/Join Link/i), 'valid-link');
  //     await userEvent.type(
  //       screen.getByPlaceholderText(/Landing Page Title/i),
  //       'Valid Title',
  //     );

  //     await userEvent.click(
  //       screen.getByRole('button', { name: /Add Another User/i }),
  //     );

  //     await waitFor(() => {
  //       expect(screen.getAllByLabelText(/Name/i)).toHaveLength(2);
  //     });

  //     await waitFor(() => {
  //       expect(screen.getAllByLabelText(/Email/i)).toHaveLength(2);
  //     });

  //     await waitFor(() => {
  //       expect(screen.getAllByLabelText(/Phone/i)).toHaveLength(2);
  //     });

  //     const nameInputs = screen.getAllByLabelText(/Name/i);
  //     await userEvent.type(nameInputs[1], 'John Doe');
  //     await userEvent.type(
  //       screen.getAllByLabelText(/Email/i)[1],
  //       'john@example.com',
  //     );
  //     await userEvent.type(screen.getAllByLabelText(/Phone/i)[1], '+1234567890');

  //     const submitButton = screen.getByRole('button', { name: /Create Team/i });
  //     await userEvent.click(submitButton);

  //     await waitFor(() => {
  //       expect(screen.queryByText(/must be at least/i)).not.toBeInTheDocument();
  //     });
  //     await waitFor(() => {
  //       expect(
  //         screen.queryByText(/Invalid email address/i),
  //       ).not.toBeInTheDocument();
  //     });
  //     await waitFor(() => {
  //       expect(
  //         screen.queryByText(/Invalid phone number/i),
  //       ).not.toBeInTheDocument();
  //     });
  //   });
});

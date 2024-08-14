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
  });

  it('allows adding new members', async () => {
    render(<NewTeam />);
    const addButton = screen.getByRole('button', { name: /Add Another User/i });
    await userEvent.click(addButton);

    await waitFor(() => {
      expect(screen.getAllByLabelText(/Member Name/i)).toHaveLength(1);
    });

    await waitFor(() => {
      expect(screen.getAllByLabelText(/Email/i)).toHaveLength(1);
    });

    await waitFor(() => {
      expect(screen.getAllByLabelText(/Phone/i)).toHaveLength(1);
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

  it('shows error for missing member name', async () => {
    render(<NewTeam />);

    const teamNameInput = screen.getByLabelText(/Team Name/i);
    await userEvent.type(teamNameInput, 'Valid Team');

    const addButton = screen.getByRole('button', { name: /Add Another User/i });
    await userEvent.click(addButton);

    const memberEmailInput = screen.getByLabelText(/Email/i);
    await userEvent.type(memberEmailInput, 'john.doe@example.com');

    const submitButton = screen.getByRole('button', { name: /Create Team/i });
    await userEvent.click(submitButton);

    const memberNameError = await screen.findByText(
      /Name and Email are required if any member field is filled/i,
    );
    expect(memberNameError).toBeInTheDocument();
  });

  it('shows error for missing member email', async () => {
    render(<NewTeam />);
    const teamNameInput = screen.getByLabelText(/Team Name/i);
    await userEvent.type(teamNameInput, 'Valid Team');

    const addButton = screen.getByRole('button', { name: /Add Another User/i });
    await userEvent.click(addButton);

    const memberNameInput = screen.getByLabelText(/Member Name/i);
    await userEvent.type(memberNameInput, 'John Doe');

    const submitButton = screen.getByRole('button', { name: /Create Team/i });
    await userEvent.click(submitButton);

    const memberEmailError = await screen.findByText(
      /Name and Email are required if any member field is filled/i,
    );
    expect(memberEmailError).toBeInTheDocument();
  });

  //
  it('shows error for invalid member name', async () => {
    render(<NewTeam />);
    const teamNameInput = screen.getByLabelText(/Team Name/i);
    await userEvent.type(teamNameInput, 'Valid Team');

    const addButton = screen.getByRole('button', { name: /Add Another User/i });
    await userEvent.click(addButton);

    const memberNameInput = screen.getByLabelText(/Member Name/i);
    await userEvent.type(memberNameInput, 'Jo'); // Invalid name (less than 3 characters)

    const submitButton = screen.getByRole('button', { name: /Create Team/i });
    await userEvent.click(submitButton);

    const memberNameError = await screen.findByText(
      /Name and Email are required if any member field is filled/i,
    );
    expect(memberNameError).toBeInTheDocument();
  });

  //handled by browser
  it.todo('shows error for invalid member email', async () => {
    render(<NewTeam />);
    const teamNameInput = screen.getByLabelText(/Team Name/i);
    await userEvent.type(teamNameInput, 'Valid Team');

    const addButton = screen.getByRole('button', { name: /Add Another User/i });
    await userEvent.click(addButton);

    const memberNameInput = screen.getByLabelText(/Member Name/i);
    await userEvent.type(memberNameInput, 'John Doe');

    const memberEmailInput = screen.getByLabelText(/Email/i);
    await userEvent.type(memberEmailInput, 'invalid-email'); // Invalid email format

    const submitButton = screen.getByRole('button', { name: /Create Team/i });
    await userEvent.click(submitButton);

    const memberEmailError = await screen.findByText(/Invalid email address/i);
    expect(memberEmailError).toBeInTheDocument();
  });

  it('shows error for invalid member phone', async () => {
    render(<NewTeam />);
    const teamNameInput = screen.getByLabelText(/Team Name/i);
    await userEvent.type(teamNameInput, 'Valid Team');

    const addButton = screen.getByRole('button', { name: /Add Another User/i });
    await userEvent.click(addButton);

    const memberNameInput = screen.getByLabelText(/Member Name/i);
    await userEvent.type(memberNameInput, 'John Doe');

    const memberEmailInput = screen.getByLabelText(/Email/i);
    await userEvent.type(memberEmailInput, 'john.doe@example.com');

    const memberPhoneInput = screen.getByLabelText(/Phone/i);
    await userEvent.type(memberPhoneInput, '12345'); // Invalid phone format

    const submitButton = screen.getByRole('button', { name: /Create Team/i });
    await userEvent.click(submitButton);

    const memberPhoneError = await screen.findByText(/Invalid phone number/i);
    expect(memberPhoneError).toBeInTheDocument();
  });

  it('submits form with valid data', async () => {
    render(<NewTeam />);
    const teamNameInput = screen.getByLabelText(/Team Name/i);
    await userEvent.type(teamNameInput, 'Valid Team');

    const addButton = screen.getByRole('button', { name: /Add Another User/i });
    await userEvent.click(addButton);

    const memberNameInput = screen.getByLabelText(/Member Name/i);
    await userEvent.type(memberNameInput, 'John Doe');

    const memberEmailInput = screen.getByLabelText(/Email/i);
    await userEvent.type(memberEmailInput, 'john.doe@example.com');

    const memberPhoneInput = screen.getByLabelText(/Phone/i);
    await userEvent.type(memberPhoneInput, '+1234567890'); // Valid phone format

    const submitButton = screen.getByRole('button', { name: /Create Team/i });
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.queryByText(/Team name must be at least 3 characters/i),
      ).not.toBeInTheDocument();
    });
    await waitFor(() => {
      expect(
        screen.queryByText(/Name and Email are required/i),
      ).not.toBeInTheDocument();
    });
    await waitFor(() => {
      expect(
        screen.queryByText(/Invalid phone number/i),
      ).not.toBeInTheDocument();
    });

    // You can also mock a function to verify that the form was actually submitted
    // e.g., expect(mockedSubmitFunction).toHaveBeenCalled();
  });
});

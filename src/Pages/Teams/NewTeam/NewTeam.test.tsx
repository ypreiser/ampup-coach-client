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

    await waitFor(() => {
      expect(screen.getByLabelText(/Team Name/i)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText(/www\.AmpUp\.pro\/join\//i)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(
        screen.getByPlaceholderText(/Landing Page Title/i),
      ).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText(/Add Member/i)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(
        screen.getByRole('button', { name: /Add Another User/i }),
      ).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(
        screen.getByRole('button', { name: /Create Team/i }),
      ).toBeInTheDocument();
    });
  });

  it('allows adding new members', async () => {
    render(<NewTeam />);
    const addButton = screen.getByRole('button', { name: /Add Another User/i });
    await userEvent.click(addButton);

    await waitFor(() => {
      expect(screen.getAllByLabelText(/Name/i)).toHaveLength(2);
    });

    await waitFor(() => {
      expect(screen.getAllByLabelText(/Email/i)).toHaveLength(2);
    });

    await waitFor(() => {
      expect(screen.getAllByLabelText(/Phone/i)).toHaveLength(2);
    });
  });

  it('shows error for invalid team name', async () => {
    render(<NewTeam />);
    const teamNameInput = screen.getByLabelText(/Team Name/i);
    await userEvent.type(teamNameInput, 'Ab');
    const submitButton = screen.getByRole('button', { name: /Create Team/i });
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText(/Team name must be at least 3 characters/i),
      ).toBeInTheDocument();
    });
  });

  it('shows error for invalid email', async () => {
    render(<NewTeam />);
    const emailInput = screen.getByLabelText(/Email/i);
    await userEvent.type(emailInput, 'invalid-email');
    const submitButton = screen.getByRole('button', { name: /Create Team/i });
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/Invalid email address/i)).toBeInTheDocument();
    });
  });

  it('shows error for invalid phone number', async () => {
    render(<NewTeam />);
    const phoneInput = screen.getByLabelText(/Phone/i);
    await userEvent.type(phoneInput, 'invalid-phone');
    const submitButton = screen.getByRole('button', { name: /Create Team/i });
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/Invalid phone number/i)).toBeInTheDocument();
    });
  });

  it('submits form with valid data', async () => {
    render(<NewTeam />);
    await userEvent.type(screen.getByLabelText(/Team Name/i), 'Valid Team');
    await userEvent.type(screen.getByLabelText(/Join Link/i), 'valid-link');
    await userEvent.type(
      screen.getByPlaceholderText(/Landing Page Title/i),
      'Valid Title',
    );

    await userEvent.click(
      screen.getByRole('button', { name: /Add Another User/i }),
    );

    await waitFor(() => {
      expect(screen.getAllByLabelText(/Name/i)).toHaveLength(2);
    });

    await waitFor(() => {
      expect(screen.getAllByLabelText(/Email/i)).toHaveLength(2);
    });

    await waitFor(() => {
      expect(screen.getAllByLabelText(/Phone/i)).toHaveLength(2);
    });

    const nameInputs = screen.getAllByLabelText(/Name/i);
    await userEvent.type(nameInputs[1], 'John Doe');
    await userEvent.type(
      screen.getAllByLabelText(/Email/i)[1],
      'john@example.com',
    );
    await userEvent.type(screen.getAllByLabelText(/Phone/i)[1], '+1234567890');

    const submitButton = screen.getByRole('button', { name: /Create Team/i });
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.queryByText(/must be at least/i)).not.toBeInTheDocument();
    });
    await waitFor(() => {
      expect(
        screen.queryByText(/Invalid email address/i),
      ).not.toBeInTheDocument();
    });
    await waitFor(() => {
      expect(
        screen.queryByText(/Invalid phone number/i),
      ).not.toBeInTheDocument();
    });
  });
});

import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import NewPrize from './NewPrize';

// Mock the usePopupStore hook
vi.mock('../../../store', () => ({
  usePopupStore: () => ({
    setPopUp: vi.fn(),
  }),
}));

describe('NewPrize Component', () => {
  it('renders the form with all inputs', () => {
    render(<NewPrize />);
    expect(screen.getByText(/Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Price/i)).toBeInTheDocument();
    expect(screen.getByText(/Amount Per Challenge/i)).toBeInTheDocument();
    expect(screen.getByText(/Days To Availability/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Personal Points To Availability/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Group Points To Availability/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/Link Text/i)).toBeInTheDocument();
    expect(screen.getByText(/Upload File/i)).toBeInTheDocument();
  });

  it('allows input in text fields', async () => {
    render(<NewPrize />);
    const nameInput = screen.getByLabelText(/Name/i);
    await userEvent.type(nameInput, 'Test Prize');
    expect(nameInput).toHaveValue('Test Prize');
  });

  it('allows input in number fields', async () => {
    render(<NewPrize />);
    const priceInput = screen.getByLabelText(/Price/i);
    await userEvent.type(priceInput, '99');
    expect(priceInput).toHaveValue(99);
  });

  it('shows error for invalid name input', async () => {
    render(<NewPrize />);
    const nameInput = screen.getByLabelText(/Name/i);
    await userEvent.type(nameInput, 'Ab');
    const submitButton = screen.getByRole('button', { name: /Create Card/i });
    await userEvent.click(submitButton);
    await waitFor(() => {
      expect(
        screen.getByText(/Name must be at least 3 characters/i),
      ).toBeInTheDocument();
    });
  });

  it('shows error for invalid price input', async () => {
    render(<NewPrize />);
    const priceInput = screen.getByLabelText(/Price/i) as HTMLInputElement;
    await userEvent.clear(priceInput);
    await userEvent.type(priceInput, '0');
    const submitButton = screen.getByRole('button', { name: /Create Card/i });
    await userEvent.click(submitButton);
    await waitFor(() => {
      expect(screen.getByText(/Price must be at least 1/i)).toBeInTheDocument();
    });
  });

  it('shows error for invalid URL in LinkText field', async () => {
    render(<NewPrize />);
    const linkInput = screen.getByLabelText(/Link Text/i);
    await userEvent.type(linkInput, 'not-a-valid-url');
    const submitButton = screen.getByRole('button', { name: /Create Card/i });
    await userEvent.click(submitButton);
    await waitFor(() => {
      expect(screen.getByText(/Must be a valid URL/i)).toBeInTheDocument();
    });
  });

  it('allows file upload', async () => {
    render(<NewPrize />);
    const file = new File(['dummy content'], 'test.png', { type: 'image/png' });
    const fileInput = screen.getByLabelText(/Upload File/i) as HTMLInputElement;
    await userEvent.upload(fileInput, file);
    expect(fileInput.files?.[0]).toBe(file);
    expect(fileInput.files?.item(0)).toBe(file);
  });

  it('shows error for large file upload', async () => {
    render(<NewPrize />);
    const largeFile = new File(['dummy content'.repeat(1000000)], 'large.png', {
      type: 'image/png',
    });
    Object.defineProperty(largeFile, 'size', { value: 6 * 1024 * 1024 * 1024 }); // 6GB
    const fileInput = screen.getByLabelText(/Upload File/i) as HTMLInputElement;
    await userEvent.upload(fileInput, largeFile);
    await waitFor(() => {
      expect(
        screen.getByText(/File size must be less than 5GB/i),
      ).toBeInTheDocument();
    });
  });

  it('submits form with valid data', async () => {
    render(<NewPrize />);
    await userEvent.type(screen.getByLabelText(/Name/i), 'Valid Prize');
    await userEvent.type(screen.getByLabelText(/Price/i), '50');
    await userEvent.type(screen.getByLabelText(/Amount Per Challenge/i), '5');
    await userEvent.type(screen.getByLabelText(/Days To Availability/i), '7');
    await userEvent.type(
      screen.getByLabelText(/Personal Points To Availability/i),
      '100',
    );
    await userEvent.type(
      screen.getByLabelText(/Group Points To Availability/i),
      '500',
    );
    await userEvent.type(
      screen.getByLabelText(/Link Text/i),
      'https://example.com',
    );

    const submitButton = screen.getByRole('button', { name: /Create Card/i });
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.queryByText(/must be at least/i)).not.toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.queryByText(/must be positive/i)).not.toBeInTheDocument();
    });
    await waitFor(() => {
      expect(
        screen.queryByText(/Must be a valid URL/i),
      ).not.toBeInTheDocument();
    });
  });
});

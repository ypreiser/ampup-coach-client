import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import PopUp from './PopUp';
import { usePopupStore } from '../../store';

// Mocking the store and the icon
vi.mock('../../store', () => ({
  usePopupStore: vi.fn(),
}));

vi.mock('../Icons/Icons', () => ({
  XIcon: ({ fill }) => (
    <div data-testid="xicon" style={{ color: fill }}>
      X
    </div>
  ),
}));

describe('PopUp component', () => {
  let mockSetPopUp;

  beforeEach(() => {
    mockSetPopUp = vi.fn();
    usePopupStore.mockReturnValue({
      PopUp: {
        title: 'Test Title',
        component: <div>Test Component</div>,
      },
      setPopUp: mockSetPopUp,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders the PopUp with title and component', () => {
    render(<PopUp />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Component')).toBeInTheDocument();
    expect(screen.getByTestId('xicon')).toBeInTheDocument();
  });

  it('closes the PopUp when the close icon is clicked', async () => {
    render(<PopUp />);

    const closeIcon = screen.getByTestId('xicon');
    await userEvent.click(closeIcon);

    expect(mockSetPopUp).toHaveBeenCalledWith(null);
  });

  it('closes the PopUp when the outside area is clicked', async () => {
    render(<PopUp />);

    const container = screen.getByTestId('popup-container');
    await userEvent.click(container);

    expect(mockSetPopUp).toHaveBeenCalledWith(null);
  });

  it('does not close the PopUp when the popup content is clicked', async () => {
    render(<PopUp />);

    const popupContent = screen.getByTestId('popup-content');
    await userEvent.click(popupContent);

    expect(mockSetPopUp).not.toHaveBeenCalled();
  });
});

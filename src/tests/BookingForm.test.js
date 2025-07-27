import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from '../components/BookingForm';

describe('BookingForm component', () => {
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  const defaultProps = {
    availableTimes: ["17:00", "18:00", "19:00"],
    dispatch: mockDispatch,
    submitForm: mockSubmitForm,
  };

  beforeEach(() => {
    mockDispatch.mockClear();
    mockSubmitForm.mockClear();
  });

  test('renders the form labels and inputs', () => {
    render(<BookingForm {...defaultProps} />);
    expect(screen.getByText("Choose date")).toBeInTheDocument();
  });

  test('renders time options based on availableTimes prop', () => {
    render(<BookingForm {...defaultProps} />);
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect.children.length).toBe(defaultProps.availableTimes.length + 1);
    defaultProps.availableTimes.forEach(time => {
      expect(screen.getByRole('option', { name: time })).toBeInTheDocument();
    });
  });


  test('calls submitForm on valid submit', () => {
    render(<BookingForm {...defaultProps} />);

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: '2025-07-30' },
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: '17:00' },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: '4' },
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: 'Birthday' },
    });

    const button = screen.getByRole('button', { name: /reserve a table/i });
    expect(button).toBeEnabled();

    fireEvent.click(button);
    expect(mockSubmitForm).toHaveBeenCalled();
  });


  test('submit button is disabled by default', () => {
    render(<BookingForm {...defaultProps} />);
    expect(screen.getByRole('button', { name: /reserve a table/i })).toBeDisabled();
  });

  test('submit button enables when form is valid', () => {
    render(<BookingForm {...defaultProps} />);

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: '2025-07-30' },
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: '17:00' },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: '4' },
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: 'Birthday' },
    });

    expect(screen.getByRole('button', { name: /reserve a table/i })).toBeEnabled();
  });

  test('submit button disabled if guest count is out of bounds', () => {
    render(<BookingForm {...defaultProps} />);

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: '2025-07-30' },
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: '17:00' },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: '0' }, // invalid guest count
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: 'Anniversary' },
    });

    expect(screen.getByRole('button', { name: /reserve a table/i })).toBeDisabled();
    expect(screen.getByText(/must be between 1 and 10/i)).toBeInTheDocument();
  });



});

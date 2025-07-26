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
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '17:00' } });
    fireEvent.click(screen.getByRole('button', { name: /reserve a table/i }));
    expect(mockSubmitForm).toHaveBeenCalled();
  });
});

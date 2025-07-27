import React, { useEffect, useState } from 'react';
import { getTodayDate, initializeTimes } from './helpers/timeReducers';

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [bookDate, setBookDate] = useState(getTodayDate());
  const [bookTime, setBookTime] = useState('');
  const [bookNumberOfGuests, setBookNumberOfGuests] = useState(1);
  const [bookOccasion, setBookOccasion] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!bookDate) newErrors.bookDate = 'Please choose a date.';
    if (!bookTime) newErrors.bookTime = 'Please choose a time.';
    if (bookNumberOfGuests < 1 || bookNumberOfGuests > 10) {
      newErrors.bookNumberOfGuests = 'Guests must be between 1 and 10.';
    }
    if (!bookOccasion) newErrors.bookOccasion = 'Please choose an occasion.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;
    submitForm();
  };

  useEffect(() => {
    validate();
  }, [bookDate, bookTime, bookNumberOfGuests, bookOccasion]);

  useEffect(() => {
    setIsSubmitEnabled(Object.keys(errors).length === 0);
  }, [errors]);

  useEffect(() => {
    const fetchTimes = async () => {
      const newTimes = await initializeTimes(bookDate);
      dispatch({ type: 'UPDATE_TIMES', payload: newTimes });
    };
    fetchTimes();
  }, [bookDate]);

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="res-date"
        value={bookDate}
        onChange={(e) => setBookDate(e.target.value)}
      />
      {errors.bookDate && <div className="error">{errors.bookDate}</div>}

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="res-time"
        value={bookTime}
        onChange={(e) => setBookTime(e.target.value)}
      >
        <option value="">Select a time ...</option>
        {availableTimes.map((time) => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>
      {errors.bookTime && <div className="error">{errors.bookTime}</div>}

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        min="1"
        max="10"
        value={bookNumberOfGuests}
        onChange={(e) => setBookNumberOfGuests(Number(e.target.value))}
      />
      {errors.bookNumberOfGuests && (
        <div className="error">{errors.bookNumberOfGuests}</div>
      )}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={bookOccasion}
        onChange={(e) => setBookOccasion(e.target.value)}
      >
        <option value="">Select an occasion . . . </option>
        {["Just Hungry", "Birthday", "Anniversary", "First Date"].map((occasion) => (
          <option key={occasion} value={occasion}>{occasion}</option>
        ))}
      </select>
      {errors.bookOccasion && <div className="error">{errors.bookOccasion}</div>}

      <input type="submit" value="Reserve a Table" disabled={!isSubmitEnabled} />
    </form>
  );
};

export default BookingForm;

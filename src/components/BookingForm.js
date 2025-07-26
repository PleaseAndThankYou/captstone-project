import React, { useEffect } from 'react';
import { useState } from 'react';
import { getTodayDate, initializeTimes } from './helpers/timeReducers';

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
    const [bookDate, setBookDate] = useState(getTodayDate());
    const [bookTime, setBookTime] = useState('');
    const [bookNumberOfGuests, setBookNumberOfGuests] = useState(1);
    const [bookOccasion, setBookOccasion] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!bookDate || !bookTime) {
            alert('Please select a date and time.');

        return;
        }
        submitForm();
    };



    const occasions = ["Just Hungry", "Birthday", "Anniversary", "First Date"];

    useEffect(() => {
      const fetchTimes = async () => {
        const newTimes = await initializeTimes(bookDate);
        dispatch({ type: 'UPDATE_TIMES', payload: newTimes });
      };
      fetchTimes();
    }, [bookDate]);


    const handleDateChange = (newDate) => {
        setBookDate(newDate); // Just update state here
      };


  return (
    <>
    <form  className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="res-date"
        value={bookDate}
        onChange={(e) => handleDateChange(e.target.value)}/>

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="res-time"
        value={bookTime}
        onChange={(e) => setBookTime(e.target.value)}>
        <option value="">Select a time ...</option>
        {availableTimes.map((time) => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        placeholder="1"
        min="1"
        max="10"
        value={bookNumberOfGuests}
        onChange={(e) => setBookNumberOfGuests(Number(e.target.value))}/>

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={bookOccasion}
        onChange={(e) => setBookOccasion(e.target.value)}>
        <option value="">Select an occasion . . . </option>
        {occasions.map((occasion) => (
          <option key={occasion} value={occasion}>{occasion}</option>
        ))}

      </select>

      <input type="submit" value="Reserve a Table" />
    </form>

    </>
  );
};

export default BookingForm;

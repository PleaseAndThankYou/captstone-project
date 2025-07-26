import React, { useEffect, useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import { getTodayDate, updateTimes, initializeTimes} from './helpers/timeReducers';
import ConfirmedBooking from './ConfirmedBooking';
import { submitAPI } from '../APIs';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, []);
    const navigate = useNavigate();

    useEffect(() => {
      const loadTimes = async () => {
        try {
          const times = await initializeTimes(getTodayDate());
          dispatch({ type: 'UPDATE_TIMES', payload: times });
        } catch (err) {
          console.error(err);
        }
      };
      loadTimes();
    }, []);

    const submitForm = async (formData) => {
        const success = await submitAPI(formData);
        if (success) {
          navigate('/confirmed-booking');
        } else {
          alert('Booking failed. Please try again.');
        }
      };

    return (
      <main className="main">
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/booking" element={
                    <BookingPage
                        availableTimes={availableTimes}
                        dispatch={dispatch}
                        submitForm={submitForm}
                        />}>
                </Route>
                <Route path="/confirmed-booking" element={
                    <ConfirmedBooking
                        />}>
                </Route>
            </Routes>
      </main>
    );
  };
  
  export default Main;
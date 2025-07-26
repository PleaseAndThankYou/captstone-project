import React, { useState } from 'react';
import Specials from './Specials';
import BookingForm from './BookingForm';
import ConfirmedBooking from './ConfirmedBooking';

const BookingPage = ({ availableTimes, dispatch, submitForm }) => {
  const [confirmationData, setConfirmationData] = useState(null);

  // Pass a callback to BookingForm to set confirmation data on successful submit
  const handleBookingConfirmed = (data) => {
    setConfirmationData(data);
  };

  // Close popup handler
  const closeConfirmation = () => {
    setConfirmationData(null);
  };

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>
              <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Specials />
            </td>
          </tr>
        </tbody>
      </table>

      {confirmationData && (
        <ConfirmedBooking
          date={confirmationData.date}
          time={confirmationData.time}
          guests={confirmationData.guests}
          occasion={confirmationData.occasion}
          onClose={closeConfirmation}
        />
      )}
    </>
  );
};

export default BookingPage;

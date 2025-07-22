import React from 'react';
import Specials from './Specials';

const BookingPage = () => {
    return (
        <>
        <table >
          <thead>
            <tr>
              <th>
                This is where you can book stuff
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Specials />
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  };

export default BookingPage;
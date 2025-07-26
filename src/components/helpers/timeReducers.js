import { fetchAPI } from '../../APIs';

export const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  export const updateTimes = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return action.payload; // array of times from API
      default:
        return state;
    }
  };

  export const initializeTimes = async (date) => {
    if (!date) date = getTodayDate();
    const dateObj = new Date(date);
    if (typeof fetchAPI !== 'function') {
      throw new Error('fetchAPI is not available on window');
    }
    const availableTimes = await fetchAPI(dateObj);
    return availableTimes;
  };

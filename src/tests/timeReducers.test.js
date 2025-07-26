import { initializeTimes, updateTimes } from '../components/helpers/timeReducers.js';
import { fetchAPI } from '../APIs';

jest.mock('../APIs', () => ({
  fetchAPI: jest.fn(),
}));

test('initializeTimes returns times from fetchAPI', async () => {
  const mockTimes = ['17:00', '18:00'];
  fetchAPI.mockResolvedValue(mockTimes);
  const times = await initializeTimes();
  expect(times).toEqual(mockTimes);
});

test('updateTimes handles actions', () => {
  const initialState = ['17:00'];
  // Unknown action returns same state
  expect(updateTimes(initialState, { type: 'UNKNOWN' })).toBe(initialState);
  // UPDATE_TIMES replaces state
  const newTimes = ['19:00'];
  expect(updateTimes(initialState, { type: 'UPDATE_TIMES', payload: newTimes })).toEqual(newTimes);
});

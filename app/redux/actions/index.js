import axios from 'axios';
import {
  FETCH_SOURATES_REQUEST,
  FETCH_SOURATES_SUCCESS,
  FETCH_SOURATES_FAILURE,
  FETCH_VERSES_REQUEST,
  FETCH_VERSES_SUCCESS,
  FETCH_VERSES_FAILURE,
} from './types';

const API_BASE_URL = 'https://api.alquran.cloud/v1';

export const fetchSourates = () => async (dispatch) => {
  dispatch({ type: FETCH_SOURATES_REQUEST });
  try {
    const response = await axios.get(`${API_BASE_URL}/surah`);
    dispatch({ type: FETCH_SOURATES_SUCCESS, payload: response.data.data });
  } catch (error) {
    console.error('Error fetching sourates ...', error);
    try {
      const fallbackResponse = await axios.get('../../data/sourates.json');
      dispatch({ type: FETCH_SOURATES_SUCCESS, payload: fallbackResponse.data.data })
    } catch (fallbackError) {
      console.error('Error fetching sourates from fallback json ... ', fallbackError);
      dispatch({ type: FETCH_SOURATES_FAILURE, error });
    }
  }
};

export const fetchVerses = (sourateNumber) => async (dispatch) => {
  dispatch({ type: FETCH_VERSES_REQUEST });
  try {
    const response = await axios.get(`${API_BASE_URL}/surah/${sourateNumber}`);
    dispatch({ type: FETCH_VERSES_SUCCESS, payload: response.data.data.ayahs });
  } catch (error) {
    console.error('Error fetching ayahs ...', error);
    try {
      const fallbackResponse = await axios.get('../../data/sourates.json');
      dispatch({ type: FETCH_SOURATES_SUCCESS, payload: fallbackResponse.data.data.find(s => Number(s.number) === sourateNumber)?.ayahs })
    } catch (fallbackError) {
      console.error('Error fetching ayahs from fallback json ... ', fallbackError);
      dispatch({ type: FETCH_VERSES_SUCCESS, error });
    }
  }
};

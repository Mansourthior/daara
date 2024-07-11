import axios from 'axios';

const API_BASE_URL = 'https://api.alquran.cloud/v1';

export const getSourates = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/surah`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching sourates:', error);
    throw error;
  }
};

export const getVerses = async (sourateNumber) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/surah/${sourateNumber}`);
    return response.data.data.ayahs;
  } catch (error) {
    console.error(`Error fetching verses for sourate ${sourateNumber}:`, error);
    throw error;
  }
};

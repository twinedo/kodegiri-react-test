import axios from 'axios';
import { API_KEY1 } from 'services/constants/api_key';
import BASE_URL from 'services/constants/base_url';

export const getPhotos = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/photos?client_id=${API_KEY1}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getSearchPhotos = async (text: string, page: number) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/photos?client_id=${API_KEY1}&query=${text}&page=${page}`,
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

import axios, {AxiosError} from 'axios';
import {setupCache} from 'axios-cache-interceptor';
// import {MMKV} from 'react-native-mmkv';
import {API_KEY1, API_KEY2} from '../constants/api_key';
import BASE_URL from '../constants/base_url';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    client_id: API_KEY1,
  },
});

axiosInstance.interceptors.response.use(
  response => response,
  async (error: AxiosError) => {
    if (!error.isAxiosError) {
      return Promise.reject(error);
    }
    if (
      error.response?.status === 401 &&
      error.config.params.client_id === API_KEY1
    ) {
      return await axios.request({
        ...error.config,
        params: {
          client_id: API_KEY2,
        },
      });
    }
    return Promise.reject(error);
  },
);

// const storage = new MMKV();

const apiClient = setupCache(axiosInstance, {
  ttl: 60 * 60 * 24, // 24 hours
  // storage: {
  //   get: key => {
  //     return Promise.resolve(
  //       JSON.parse(storage.getString(key) ?? ''),
  //     ) as unknown as StorageValue;
  //   },
  //   set: (key, value) => {
  //     storage.set(key, JSON.stringify(value));
  //     return Promise.resolve();
  //   },
  //   remove: key => {
  //     storage.delete(key);
  //     return Promise.resolve();
  //   },
  // },
});

export default apiClient;

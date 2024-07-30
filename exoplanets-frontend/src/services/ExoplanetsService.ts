import { axios } from './axios';

export const getExoplanets = async (): Promise<unknown> => {
  const { data } = await axios.get('/exoplanets');
  return data;
};

import defaultAxios from 'axios';

const axios = defaultAxios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

const errorHandler = (error: {
  response: { status: number; data: unknown };
}) => {
  if (error.response.status === 401) {
    return new Promise(() => {});
  }
  return Promise.reject(error.response.data);
};

axios.interceptors.response.use(
  (response) => response,
  (error) => errorHandler(error),
);

export { axios };

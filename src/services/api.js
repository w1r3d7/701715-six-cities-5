import axios from 'axios';

const BASE_URL = `https://5.react.pages.academy/six-cities`;

const TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401
};

const createApi = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();
      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export {createApi};

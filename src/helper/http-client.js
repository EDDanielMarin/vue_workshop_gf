import axios from 'axios';
import env from '../environment/environment'

/**
 * Axios basic configuration
 * Some general configuration can be added like timeout, headers, params etc. More details can be found on https://github.com/axios/axios
 * */
const config = {
  baseURL: env.apiBaseUrl,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}
};

const httpClient = axios.create(config);


const loggerInterceptor = config => {
  /** Add logging here */

  return config;
};

/** Adding the request interceptors */
httpClient.interceptors.request.use(loggerInterceptor);

/** Adding the response interceptors */
httpClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    /** Do something with response error */
    return Promise.reject(error);
  }
);

export default httpClient

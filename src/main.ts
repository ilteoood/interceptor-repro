import axios from 'axios';
import { buildMemoryStorage, setupCache } from 'axios-cache-interceptor';

const requestInterceptor = async (config: axios.InternalAxiosRequestConfig) => {
    if (!axiosInstance.defaults.headers.Authorization) {
      console.log("Missing auth")
    }
    return config;
  };

const plainAxiosInstance = axios.create();
const axiosInstance = setupCache(plainAxiosInstance, {
    storage: buildMemoryStorage(false, 60, false),
    headerInterpreter: () => 60,
  });

axiosInstance.interceptors.request.use(requestInterceptor);
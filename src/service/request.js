import axios from "axios";

const baseURL = "http://localhost:53000";

const request = axios.create({
  baseURL,
  timeout: 5000,
});

// 拦截器
request.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
      console.error(err);
  }
);

export default request;

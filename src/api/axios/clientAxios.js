import axios from "axios";
const clientAxios = axios.create({
  baseURL: `${process.env.REACT_APP_API_HOST_NAME}`,
});
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log(config);
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default clientAxios;

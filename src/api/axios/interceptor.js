import {removeLoader, setLoader} from "../../store/slice/loaderSclice";
import clientAxios from "./clientAxios";

const setUpInterceptor = (store) => {
  const {dispatch} = store;
  const handleError = async (error) => {
    dispatch(removeLoader());
    return Promise.reject(error);
  };

  clientAxios.interceptors.request.use(async (config) => {
    /* your logic here */
    dispatch(setLoader());
    config.params = {
      ...config.params,
      apikey: `${process.env.REACT_APP_API_KEY}`,
    };

    return config;
  });

  clientAxios.interceptors.response.use((response) => {
    dispatch(removeLoader());

    return response;
  }, handleError);
};

export default setUpInterceptor;

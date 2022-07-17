import axios from "axios";

const clientAxios = axios.create({
  baseURL: `${process.env.REACT_APP_API_HOST_NAME}`,
});

export default clientAxios;

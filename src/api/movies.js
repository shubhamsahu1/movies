import clientAxios from "./axios/clientAxios";

export const getMovies = async (options = {}) => {
  const {page, searchinput = "DEFAULT"} = options;
  const apikey = `${process.env.REACT_APP_API_KEY}`;

  /** build url */
  const url = `/`;

  /** build query */
  const params = {apikey, page, s: searchinput};

  /** http call */
  return await clientAxios.get(url, {params});
};

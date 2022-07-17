import clientAxios from "./axios/clientAxios";

export const getMovies = async (options = {}) => {
  const {page, searchinput = "DEFAULT"} = options;

  /** build url */
  const url = `/`;

  /** build query */
  const params = {page, s: searchinput};

  /** http call */

  return await clientAxios.get(url, {params});
};

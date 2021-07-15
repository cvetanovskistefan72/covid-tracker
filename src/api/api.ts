import axios from "axios";
import { getCountriesAPI } from "../config/config";

export const getCountries = async () => {
  const resp = await axios.get(getCountriesAPI);

  return resp.data;
};

export const getCountry = async (id: number) => {
  const resp = await axios.get(`${getCountriesAPI}/${id}`);
  return resp.data.location;
};

const url = "https://jobify-prod.herokuapp.com/api/v1/toolkit";
import axios from "axios";
export const customFetch = axios.create({
  baseURL: url,
});

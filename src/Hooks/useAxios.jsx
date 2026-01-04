import axios from "axios";
import React from "react";

const productionUrl = "https://server-problrm-checking.vercel.app/";
const developmentUrl = "http://localhost:3000";

const baseURL =
  window.location.hostname === "localhost" ? developmentUrl : productionUrl;

const axiosInstance = axios.create({
  baseURL: baseURL,
  withCredentials: false,
});

const useAxios = () => {
  return axiosInstance;
};

export default useAxios;

import axios from "axios";

const customAxios = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 10000,
});

//request Response & Error Handlers
const requestHandler = (request) => {
  request.headers.Authorization = "RequestToken";
  return request;
};

//responseHandler
const responseHandler = (response) => {
  if (response.status === 401) {
    window.location = "/login";
  }
  return response;
};

//error handler
const errorHandler = (error) => {
  return Promise.reject(error);
};

//Making Use Of Axios
customAxios.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

customAxios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default customAxios;

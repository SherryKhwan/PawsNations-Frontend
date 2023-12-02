import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { notifyError } from "./toast";

const instance = axios.create({
  //   baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
  timeout: 500000,
  headers: {
    // Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
instance.interceptors.request.use((config) => {
  // Do something before request is sent
  let token;

  if (Cookies.get("token")) {
    token = Cookies.get("token") as string;
    // console.log(token);

    config.headers.Authorization = token ? `Bearer ${token}` : null;
  } else {
    //notifyError("please login again");
    // location.href = "/login";
  }

  // config.headers.Authorization =
  //   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjE5ZTBkZDFiNzdhMmU4N2U5NzI4YSIsImlhdCI6MTY4NTA4MTcyMSwiZXhwIjoxNjg1MDk5NzIxfQ.pUT4_L38JQ4VPiFfgALUXcHe0D9mu8XWKjIgx6UqY_I";
  return config;
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      localStorage.removeItem("user");
      notifyError("please login again");
    }
    return Promise.reject(error);
  }
);

type ResponseBody<T> = {
  data: T;
  success: boolean;
};

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) =>
    instance.get<ResponseBody<T>>(url).then(responseBody),

  post: <T>(url: string, body: {}, option?: any) =>
    instance.post<ResponseBody<T>>(url, body, option).then(responseBody),

  put: <T>(url: string, body: {}) =>
    instance.put<ResponseBody<T>>(url, body).then(responseBody),

  patch: <T>(url: string, body: {}) =>
    instance.patch<ResponseBody<T>>(url, body).then(responseBody),

  delete: <T>(url: string) =>
    instance.delete<ResponseBody<T>>(url).then(responseBody),
};

export default requests;

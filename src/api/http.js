import customAxios from "./axiosInterceptor";

export async function loginHttp({ email, password }) {
  const request = await customAxios.post("/auth/login", {
    email,
    password,
  });
  return request;
}

export const registerHttp = ({ name, email, contact, post, password }) => {
  customAxios
    .post("/auth/login", { name, email, contact, post, password })
    .then((Response) => {
      console.log(Response);
      return Response.data;
    })
    .catch((Error) => {
      console.log(Error);
      return Error;
    });
};

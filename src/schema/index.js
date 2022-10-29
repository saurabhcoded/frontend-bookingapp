import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const loginSchema = yup.object().shape({
  email: yup.string().email("please enter a valid email").required("required"),
  password: yup
    .string()
    .min(10)
    .matches(passwordRules, { message: "Please Enter a Strong Password" })
    .required("Required"),
});
export const registerSchema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().email("please enter a valid email").required("required"),
  contact: yup
    .number()
    .min(999999999, "invalid Contact Number")
    .max(9999999999, "invalid Contact Number")
    .required("Required"),
  post: yup
    .string()
    .matches(["user", "svcprovider"], { message: "Please select a valid role" })
    .required("required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please Enter a Strong Password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password not match")
    .required("Required"),
});

import React from "react";
import { useFormik } from "formik";
import { loginSchema } from "../../schema";
import { loginHttp } from "../../api/http";
import toast from "react-hot-toast";
import { useState } from "react";

const LoginComp = () => {
  const [user, setUser] = useState(null);
  const onSubmit = async (values, actions) => {
    console.log(values);
    try {
      const fetchuser = await loginHttp(values);
      console.log("fetchUser", fetchuser);
      setUser(fetchuser.data.user);
      console.log(user);
      toast.success("Welcome " + fetchuser.data.user.name);
    } catch (error) {
      console.log(error);
      toast.dismiss();
      toast.error(error.response.data.message);
    }
    actions.resetForm();
  };
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  return (
    <div className="container" style={{ maxWidth: "710px" }}>
      {user ? user.name : ""}
      <form
        action=""
        onSubmit={handleSubmit}
        className="text-start"
        autoComplete="off"
      >
        <div className="row gy-4">
          <div className="col-12">
            <label htmlFor="emailaddress" className="form-label">
              Email Address
            </label>
            <input
              id="email"
              value={values.email}
              onChange={handleChange}
              type="email"
              className={
                errors.email && touched.email
                  ? "border-danger form-control form-control-lg"
                  : "form-control form-control-lg"
              }
            />
            {errors.email && touched.email ? (
              <p className="text-danger mt-1">*{errors.email}</p>
            ) : (
              ""
            )}
          </div>
          <div className="col-12">
            <label htmlFor="emailaddress" className="form-label">
              Password
            </label>
            <input
              id="password"
              value={values.password}
              onChange={handleChange}
              type="password"
              className={
                errors.password && touched.password
                  ? "form-control form-control-lg border-danger"
                  : "form-control form-control-lg"
              }
            />
            {errors.password && touched.password ? (
              <p className="text-danger mt-1">*{errors.password}</p>
            ) : (
              ""
            )}
          </div>
          <div className="col-12 ">
            <button
              className="btn btn-primary"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting" : "Login"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginComp;

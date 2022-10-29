import { useFormik } from "formik";
import React from "react";
import { useState } from "react";
import { registerSchema } from "../../schema";
const RegisterComp = () => {
  const [user, setUser] = useState(null);
  const onSubmit = async (values, actions) => {
    console.log(values);
  };
  const { values, errors, touched, isSubmitting, handleSubmit, handleChange } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        contact: "",
        post: "user",
        password: "",
        confirmPassword: "",
      },
      validationSchema: registerSchema,
      onSubmit,
    });
  console.log(errors);
  return (
    <div className="container p-4" style={{ maxWidth: "600px" }}>
      <form onSubmit={handleSubmit}>
        <div className="row gy-4">
          <div className="col-12">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              id="name"
              value={values.name}
              onChange={handleChange}
              type="text"
              className={
                errors.name && touched.name
                  ? "form-control form-control-lg border-danger"
                  : "form-control form-control-lg"
              }
            />
            {errors.name && touched.name ? (
              <p className="text-danger">*{errors.name}</p>
            ) : (
              ""
            )}
          </div>
          <div className="col-12">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              id="email"
              value={values.email}
              onChange={handleChange}
              type="email"
              className={
                errors.email && touched.email
                  ? "form-control form-control-lg border-danger"
                  : "form-control form-control-lg"
              }
            />
            {errors.email && touched.email ? (
              <p className="text-danger">*{errors.email}</p>
            ) : (
              ""
            )}
          </div>
          <div className="col-12">
            <label htmlFor="name" className="form-label">
              Contact Number
            </label>
            <input
              id="contact"
              value={values.contact}
              onChange={handleChange}
              type="phone"
              className={
                errors.contact && touched.contact
                  ? "form-control form-control-lg border-danger"
                  : "form-control form-control-lg"
              }
            />
            {errors.contact && touched.contact ? (
              <p className="text-danger">*{errors.contact}</p>
            ) : (
              ""
            )}
          </div>
          <div className="col-12">
            <label htmlFor="pst" className="form-label">
              post
            </label>
            <select
              value={values.post}
              onChange={handleChange}
              name="post"
              id="post"
              className={
                errors.post && touched.post
                  ? "form-select form-select-lg border-danger"
                  : "form-select form-select-lg "
              }
            >
              <option value="user">user</option>
              <option value="svcprovider">service provider</option>
            </select>
            {errors.post && touched.post ? (
              <p className="text-danger">*{errors.post}</p>
            ) : (
              ""
            )}
          </div>
          <div className="col-12">
            <label htmlFor="name" className="form-label">
              Password
            </label>
            <input
              id="password"
              value={values.password}
              onChange={handleChange}
              type="text"
              className={
                errors.passowrd && touched.password
                  ? "form-control form-control-lg border-danger"
                  : "form-control form-control-lg"
              }
            />
            {errors.password && touched.password ? (
              <p className="text-danger">*{errors.password}</p>
            ) : (
              ""
            )}
          </div>
          <div className="col-12">
            <label htmlFor="name" className="form-label">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              type="text"
              className={
                errors.confirmPassword && touched.confirmPassword
                  ? "form-control form-control-lg border-danger"
                  : "form-control form-control-lg"
              }
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <p className="text-danger">*{errors.confirmPassword}</p>
            ) : (
              ""
            )}
          </div>
          <div className="col-12">
            <button className="btn btn-primary">
              {isSubmitting ? "Submitting" : "Submit"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterComp;

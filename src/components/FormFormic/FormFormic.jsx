import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const FormikForm = ({ onFormSubmit, closeForm }) => {
  return (
    <Formik
      initialValues={{ name: '', email: '' }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),

        email: Yup.string().email('Invalid email address').required('Required'),
      })}
      onSubmit={values => {
        onFormSubmit(values);
        closeForm();
      }}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit}>
          <label>
            name:
            <input
              onChange={formik.handleChange}
              value={formik.values.name}
              type="text"
              name="name"
            />
          </label>
          <label>
            email:
            <input
              onChange={formik.handleChange}
              value={formik.values.email}
              type="email"
              name="email"
            />
          </label>
          <button type="submit">Save</button>
        </form>
      )}
    </Formik>
  );
};

export default FormikForm;

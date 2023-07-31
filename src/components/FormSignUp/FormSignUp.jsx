import { ErrorMessage, Field, Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

const FormSignUp = ({ onFormSubmit }) => {
  return (
    <Formik
      initialValues={{ firstName: '', email: '' }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .min(3, 'Must be 3 characters or more')
          .max(20, 'Must be 20 characters or less')
          .required('Required'),

        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
          .min(8, 'Must be 8 characters or more')
          .required('Required')
          .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
          .matches(/[0-9]/, 'Must contain at least one digit'),
      })}
      onSubmit={values => onFormSubmit(values)}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">Name:</label>
          <Field name="firstName" type="text" />
          <ErrorMessage name="firstName" component="div" />
          <label htmlFor="email">Email:</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" />
          <label htmlFor="password">Password:</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit">Registration</button>
          <Link to="/login">Login</Link>
        </form>
      )}
    </Formik>
  );
};

export default FormSignUp;

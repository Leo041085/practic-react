import { ErrorMessage, Field, Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

const FormLogin = ({ onFormSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', email: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
          .required('Required')
      })}
      onSubmit={values => onFormSubmit(values)}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email:</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" />
          <label htmlFor="password">Password:</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit">Log in</button>
          <Link to="/registration">Registration</Link>
        </form>
      )}
    </Formik>
  );
};

export default FormLogin;

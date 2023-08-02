import { Button, CardContent, Stack, TextField } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

const FormLogin = ({ onFormSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', email: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Required'),
      })}
      onSubmit={values => onFormSubmit(values)}
    >
      {formik => (
        <Stack sx={{ margin: '0 auto', width: '400px' }}>
          <Form>
            <Stack spacing={6}>
              <TextField
                label="Email:"
                name="email"
                type="email"
                onChange={formik.handleChange}
                error={formik.errors.email}
                helperText={
                  formik.errors.email && 'Please enter a valid email address'
                }
              />
              <TextField
                label="Password:"
                name="password"
                type="password"
                onChange={formik.handleChange}
                error={formik.errors.password}
                helperText={
                  formik.errors.password && 'Please enter your password'
                }
              />
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              mt={4}
            >
              <Button
                variant="contained"
                type="submit"
                size="large"
                disabled={!formik.isValid}
              >
                Log in
              </Button>
              <Link to="/registration">Registration</Link>
            </Stack>
          </Form>
        </Stack>
      )}
    </Formik>
  );
};

export default FormLogin;

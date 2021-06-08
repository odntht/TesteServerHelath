import { Button, TextField } from '@material-ui/core';
import { Form, Formik } from 'formik';
import { useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();

  const initialValues = {
    email: '',
    senha: '',
  };

  const onSubmit = (values) => {
    console.log(values);
    history.push('/dashboard');
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          onSubmit(values);
        }}
      >
        {({ values, handleChange }) => (
          <Form
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100vh',
              maxWidth: '600px',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '0 auto',
            }}
          >
            <TextField
              placeholder="E-mail"
              name="email"
              value={values.email}
              onChange={handleChange}
              variant="outlined"
              margin="dense"
              required
              type="email"
              autoFocus={true}
            />
            <TextField
              placeholder="Senha"
              name="senha"
              value={values.senha}
              onChange={handleChange}
              variant="outlined"
              margin="dense"
              type="password"
              required
            />
            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Login;

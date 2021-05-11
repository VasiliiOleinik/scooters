import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Row,
  Label
} from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FormInput } from 'src/components';
import loginActions from './store/actions';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Введите корректный Email')
    .required('Обязательно к заполнению'),
  password: Yup.string()
    .min(6, 'Пароль слишком короткий')
    .max(50, 'Пароль слишком длинный')
    .required('Обязательно к заполнению')
});

const Login = ({ error, isLoading, handleLogin }) => {
  const handleSubmit = values => {
    const { email, password } = values;
    handleLogin(email, password);
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center login-page">
      <Container>
        <Row className="justify-content-center align-items-center">
          <CardGroup className="login-box">
            <Card className="p-4">
              <CardBody>
                <Formik
                  validationSchema={LoginSchema}
                  initialValues={{ email: '', password: '' }}
                  onSubmit={handleSubmit}
                >
                  {({
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    errors,
                    touched
                  }) => (
                    <Form onSubmit={handleSubmit} className="login-box">
                      <div className="login-logo mb-4">
                        <h1>Авторизация</h1>
                      </div>
                      <Card>
                        <Label for="loginform-email" className="control-label">E-mail</Label>
                        <FormInput
                          id="loginform-email"
                          fieldKey="email"
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          values={values}
                          errors={errors}
                          touched={touched}
                          isLoading={isLoading}
                          type="text"
                          autoComplete="email"
                          addRowClass="mb-2"
                        />
                        <div className="auth-devider mb-2"></div>
                        <Label for="loginform-password" className="control-label">Пароль</Label>
                        <FormInput
                          id="loginform-password"
                          fieldKey="password"
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          values={values}
                          errors={errors}
                          touched={touched}
                          isLoading={isLoading}
                          type="password"
                          autoComplete="new-password"
                        />
                      </Card>
                      {error && (
                        <Row>
                          <Col xs="12">
                            <div className="alert alert-danger" role="alert">
                              {error}
                            </div>
                          </Col>
                        </Row>
                      )}

                      <Row className="mt-3">
                        <Col xs="6">
                          <Button
                            type="submit"
                            color="primary"
                            className="px-4"
                            disabled={
                              isLoading || !!(errors.email || errors.password)
                            }
                          >
                            Логин
                            </Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Link to="/forgot-password">
                            <Button color="link" className="px-0">
                              Забыли пароль?
                              </Button>
                          </Link>
                        </Col>
                      </Row>
                    </Form>
                  )}
                </Formik>
              </CardBody>
            </Card>
          </CardGroup>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = state => {
  const { auth } = state,
    { LoginReducer } = auth,
    { request } = LoginReducer,
    { isLoading, errorMessage } = request;

  return {
    isLoading,
    error: errorMessage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleLogin: (email, password) =>
      dispatch(loginActions.login({ email, password }))
  };
};

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  error: PropTypes.string
};

Login.defaultProps = {
  isLoading: false,
  error: ''
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

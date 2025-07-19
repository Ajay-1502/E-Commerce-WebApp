import { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from './store/auth-context';
import { Form, Button, Row, Col, Container, Card } from 'react-bootstrap';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const navigate = useNavigate();

  const authCtx = useContext(AuthContext);

  const authHandler = async (api, email, password) => {
    try {
      const response = await fetch(api, {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();

      if (!response.ok) {
        const errorMsg = data.error.message || 'Authentication failed';
        throw new Error(errorMsg);
      }
      authCtx.login(data.idToken);
      navigate('/store');
      console.log(data);
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    const api = isLogin
      ? 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAdo_pvxrbfVn-OD609CTGYcUZzCXLIq1w'
      : 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAdo_pvxrbfVn-OD609CTGYcUZzCXLIq1w';
    await authHandler(api, email, password);
  };

  const switchAuthModeHandler = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col lg={5} md={7}>
          <Card className="p-4 shadow-lg border-0 rounded-4">
            <h2 className="text-center mb-4">{isLogin ? 'Login' : 'Signup'}</h2>
            <Form onSubmit={formSubmitHandler}>
              <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label className="fw-semibold">Username</Form.Label>
                <Form.Control
                  type="email"
                  className="fw-semibold"
                  placeholder="Enter Username"
                  ref={emailInputRef}
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formPassword">
                <Form.Label className="fw-semibold">Password</Form.Label>
                <Form.Control
                  type="password"
                  className="fw-semibold"
                  placeholder="Enter Password"
                  ref={passwordInputRef}
                />
              </Form.Group>

              <div className="text-center mb-2">
                <Button variant="primary" type="submit">
                  {isLogin ? 'Login' : 'Signup'}
                </Button>
              </div>

              <div className="text-center mt-2">
                <Button
                  variant="secondary"
                  type="button"
                  onClick={switchAuthModeHandler}
                >
                  {isLogin
                    ? 'Create new account'
                    : 'Login with existing account'}
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default AuthForm;

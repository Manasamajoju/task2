import React, { useEffect, useState } from 'react';
import './header.css';
import { Modal, Button, Form } from 'react-bootstrap';
function Header() {

//   const mytoken = useSelector((user) => user.userToken);

//   useEffect(() => {
    // console.log('mytoken', mytoken);
//   }, [mytoken]);

  const [toggleLoginModel, settoggleLoginModel] = useState(false);
  const [toggleSignupModel, settoggleSignupModel] = useState(false);
  const [toggleForgotPassword, setForgotPassword] = useState(false);

  const loginModelOpen = () => settoggleLoginModel(true);
  const loginModelClose = () => settoggleLoginModel(false);

  const signupModelOpen = () => settoggleSignupModel(true);
  const signupModelClose = () => settoggleSignupModel(false);

  const forgotPasswordModelOpen = () => {
    setForgotPassword(true);
    settoggleLoginModel(false);
  };
  const forgotPasswordModelClose = () => setForgotPassword(false);

  return (
    <div className="headerOuter">
      <div className="headerLeft">MSTK</div>
      <div className="headerRight">
        <p className="loginSignup">
          <a onClick={loginModelOpen}>Login</a> <span>|</span>
          <a onClick={signupModelOpen}>SignUp</a>
        </p>
      </div>

      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={toggleLoginModel}
        onHide={loginModelClose}
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
              <div className="forgotPassword">
                <a onClick={forgotPasswordModelOpen}>Forgot Password?</a>
              </div>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      {/* <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={toggleSignupModel}
        onHide={signupModelClose}
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title>SignUp</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              SignUp
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={toggleForgotPassword}
        onHide={forgotPasswordModelClose}
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title>Forgot Password</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal> */}
    </div>
  );
}

export default Header;

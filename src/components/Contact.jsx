import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const submitButtonHandler = async (event) => {
    event.preventDefault();

    if (name.trim().length > 0 && phoneNumber.trim().length > 0) {
      const userObj = {
        name: name,
        emailId: emailId,
        phoneNumber: phoneNumber,
      };
      console.log(userObj);

      try {
        const response = await fetch(
          'https://react-applications-2fc42-default-rtdb.firebaseio.com//user.json',
          {
            method: 'POST',
            body: JSON.stringify(userObj),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        const data = await response.json();
        console.log(data);

        setName('');
        setEmailId('');
        setPhoneNumber('');
      } catch (err) {
        console.log(err);
      }
    } else {
      alert('Provide valid input');
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="p-4 shadow">
            <h2 className="text-center mb-4">Contact Us</h2>
            <Form onSubmit={submitButtonHandler}>
              <Form.Group className="mb-3 fw-bold" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  className="fw-semibold"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3 fw-bold" controlId="email">
                <Form.Label>Email ID</Form.Label>
                <Form.Control
                  type="email"
                  className="fw-semibold"
                  placeholder="Enter your email"
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3 fw-bold" controlId="phoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  className="fw-semibold"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </Form.Group>

              <div className="text-center">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;

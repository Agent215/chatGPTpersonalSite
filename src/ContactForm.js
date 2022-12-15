import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus({ submitted: false, submitting: true, info: { error: false, msg: null } });
    axios({
      method: 'POST',
      url: 'https://example.com/send-email',
      data: { name, email, message }
    }).then(() => {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: 'Email sent successfully!' }
      });
      resetForm();
    })
      .catch(() => {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: true, msg: 'Error submitting the form. Please try again.' }
        });
      });
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label htmlFor="name">Name</Form.Label>
        <Form.Control id="name" type="text" value={name} onChange={e => setName(e.target.value)} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="message">Message</Form.Label>
        <Form.Control id="message" as="textarea" rows="3" value={message} onChange={e => setMessage(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={status.submitting}>
        {!status.submitting
          ? !status.submitted
            ? 'Submit'
            : 'Submitted'
          : 'Submitting...'}
      </Button>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && (
        <div className="success">{status.info.msg}</div>
      )}
    </Form>
  );
};

export default ContactForm;

import React, { useState, useRef } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm, ValidationError } from '@formspree/react';


const ContactForm = () => {
    const [status, setStatus] = useState("Submit");
    const [state, handleSubmit] = useForm("mnqyaqgl");
    const [errorMessege, setErrorMessege] = useState(null);
    const formRef = useRef(null);

    if (state.succeeded) {
        return (
            <div style = {{padding: '30px'  , textAlign: 'center' , color:'white'}}>
                <h1 >Thank you for your interest. I will be in touch soon.</h1>
            </div>);
    }

    return (
        <div style={{ padding: '30px' }}>

            <Form
                onSubmit={handleSubmit}
                id="contactForm"
                className="form"
                ref={formRef}
            >
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label style={{color:'white'}}>Name</Form.Label>
                    <Form.Control type="string" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label   style={{color:'white'}} htmlFor="email">Email address📧</Form.Label>
                    <Form.Control  id="email"
                        type="email"
                        name="email" placeholder="Enter email" />
                        <Form.Control type="hidden" id="email" name="_replyto" ></Form.Control>
                    <Form.Text   style={{color:'white'}} className="text-muted">
                        We'll never share your email with anyone else 😉
                    </Form.Text>
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="messege">
                    <Form.Label  style={{color:'white'}}>Message 📝</Form.Label>
                    <Form.Control id="message"
                        name="message" as="textarea" rows={3} />
                        <Form.Control type="hidden" name="_subject" id="email-subject" value="Brahms web site"></Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                    {status}
                </Button>
            </Form>
            {errorMessege == null ? <p></p> :
                <p style={{ paddingTop: "10px" }}>
                    <b style={{ color: "red" }}>
                        {errorMessege}
                    </b>
                </p>
            }
        </div>

    );
};

export default ContactForm;
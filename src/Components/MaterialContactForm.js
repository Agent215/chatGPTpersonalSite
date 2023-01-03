import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@material-ui/core/Button';
import { useForm, ValidationError } from '@formspree/react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Input from '@mui/material/Input';
import { green } from '@mui/material/colors';

const InputTextField = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    marginTop: '.3rem',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: `green`,
    },
  },
}));


const MaterialContactForm = () => {
  const [state, handleSubmit] = useForm("mnqyaqgl");

  if (state.succeeded) {
    return (
      <div style={{ padding: '7rem', textAlign: 'center', color: 'white' }}>
        <h1 >Thank you for your interest. I will be in touch soon.</h1>
      </div>);
  }

  return (
    <Box
      noValidate={false}
      autoComplete="off"
      onSubmit={handleSubmit}
      id="contactForm"
      component="form"
      sx={{
        display: 'grid',
        gridTemplateColumns: { sm: '1fr 1fr' },
        gap: 2,
        justifyContent: 'center'
      }}
    >
      <div >
        <FormGroup >
          <FormControl name="name" id="name" >
            <Input
              required
              label="Name"
              type="string"
              variant="filled"
              name="name"
              placeholder="Your name here"
              
            />
          </FormControl>
        </FormGroup>

        <FormGroup >
          <FormControl name="_replyto" id="email"  >
            <Input
              required
              label="email"
              type="email"
              name="email"
              placeholder="Your email here"
            />
          </FormControl>
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </FormGroup>
        <FormControl type="hidden" name="_subject" id="email-subject" value="Brahms web site">
        </FormControl>
        <FormGroup >
          <FormControl name="message" id="message" >
            <Input
              required
              id="message"
              label="message"
              type="message"
              multiline
              rows={4}
              name="message"
              placeholder="Your messege here"
            />
          </FormControl>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </FormGroup>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </div>
    </Box>
  );
}

export default MaterialContactForm;

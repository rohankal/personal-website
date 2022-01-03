import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, Button} from 'semantic-ui-react';
import Swal from 'sweetalert2';


import './ContactMe.css';

const SERVICE_ID = "service_ifvr4bc";
const TEMPLATE_ID = "template_bd72ena";
const USER_ID = "user_mmO0m0dOeNDBcqeMcocCs";

const ContactMe = () => {

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Oops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };

  return (
    <div className="ContactMe" id="contact"> 

      <Form onSubmit={handleOnSubmit}>
        <h1>let's get in touch!</h1>
        <Form.Field
          control={Input}
          label='your email'
          name='user_email'
          placeholder='email…'
          required
          type="text"
        />
        <Form.Field
          control={Input}
          label='your name'
          name='user_name'
          placeholder='name…'
          required
          type='text'
        />
        <Form.Field
          control={Input}
          label='your message'
          name='user_message'
          placeholder='message…'
          required
          type='text'
        />
        <Button type='submit'>submit</Button>
      </Form>
    </div>
  );
}
export default ContactMe;
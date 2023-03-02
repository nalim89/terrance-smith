import './FormStyles.css'
import { useState } from 'react';
import { send } from 'emailjs-com';

import React from 'react'

const Form = () => {

  const [toSend, setToSend] = useState({
    first_name: '',
    last_name: '',
    message: '',
    reply_to: '',
  })

  const onSubmit = (e) => {
    // e.preventDefault();
    send(
      'service_k3wslit',
      'template_ytamwjq',
      toSend,
      'gh6esOuwTTIK5prGu'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      })
  }

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name] : e.target.value })
  }

  return (
    <div className='form'>
        <form onSubmit={onSubmit}>
          <label> First Name </label>
          <input
            type='text'
            name='first_name'
            placeholder='John'
            value={toSend.first_name}
            onChange={handleChange}
            />
          <label> Last Name </label>
          <input
            type='text'
            name='last_name'
            placeholder='Smith'
            value={toSend.last_name}
            onChange={handleChange}
            />
          <label> Message </label>
          <textarea rows='4'
            type='text'
            name='message'
            placeholder='Write message here.'
            value={toSend.message}
            onChange={handleChange}
          />
          <label> Email </label>
          <input
            type='text'
            name='reply_to'
            placeholder='engineer@email.com'
            value={toSend.reply_to}
            onChange={handleChange}
          />
          <button type ='submit' className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Form
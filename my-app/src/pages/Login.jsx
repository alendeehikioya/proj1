import React from 'react';
import './login.css';


export default function Login() {
  return (
    <session className='form'>
        <div className='form-container'>
            <label htmlFor="eamil">Email</label>
            <input type="email" className="" placeholder='Enter Email' />
        </div>
        <div className='form-container'>
            <label htmlFor="eamil">Email</label>
            <input type="email" className="" placeholder='Enter Email' />
        </div>
        <button type="submit">Login</button>
        <div>
            <button type="button">Register</button>
        </div>
    </session>
  );
}

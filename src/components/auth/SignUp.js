import React, { useState } from 'react';

const SignOut = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    console.log(firstName);
    console.log(lastName);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={event => setEmail(event.target.value)}/>
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={event => setPassword(event.target.value)}/>
        </div>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" onChange={event => setFirstName(event.target.value)}/>
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" onChange={event => setLastName(event.target.value)}/>
        </div>
        <div className="input-field">
          <button className="btn light-blue lighten-1 z-depth-0">Login</button>
        </div>
      </form>
    </div>
  );
};

export default SignOut;
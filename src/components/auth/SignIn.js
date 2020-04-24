import React, { useState } from 'react';
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";

const SignIn = (props) => {
  const [state, setState] = useState({email: '', password: ''});
  const {authError} = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    props.signIn(state);
  };

  const handleChange = (e) => {
    setState({...state, [e.target.id]: e.target.value})
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleChange}/>
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handleChange}/>
        </div>
        <div className="input-field">
          <button className="btn light-blue lighten-1 z-depth-0">Login</button>
          <div className="red-text center">
            {authError ? <p>{authError}</p> : null}
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials))
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
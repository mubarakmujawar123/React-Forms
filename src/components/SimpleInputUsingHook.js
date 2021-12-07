import React, { useState, useEffect } from 'react';
import useInput from '../hooks/use-input.js';
const SimpleInputUsingHook = (props) => {
  const {
    value: userName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    resetValueHandelr: resetNameValueHandelr,
  } = useInput((value) => value.trim() !== '');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  /*const [formIsValid, setFormIsvalid] = useState(false);*/

  const isEnteredEmailValid =
    enteredEmail.trim() != '' && enteredEmail.includes('@');

  const emailInputIsInvalid = !isEnteredEmailValid && enteredEmailTouched;
  let formIsValid = false;
  if (enteredNameIsValid && isEnteredEmailValid) {
    formIsValid = true;
  }

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailBlurHandler = () => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredEmailTouched(true);
    if (userName.trim() == '' || enteredEmail.trim() == '') {
      return;
    }
    resetNameValueHandelr();
    setEnteredEmail('');
    setEnteredEmailTouched(false);
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div>
        <label htmlFor="name">Your Name</label>
        <input
          name="name"
          type="text"
          id="name"
          onBlur={nameBlurHandler}
          onChange={nameChangeHandler}
          value={userName}
        />
        {nameInputHasError && <div>Your Name must not be empty.</div>}
        <br />
        <br />
        <label htmlFor="email">Email Id</label>
        <input
          id="email"
          type="text"
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && <div>Please entered valid input.</div>}
        <br />
        <br />
        <br />
      </div>
      <div>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInputUsingHook;

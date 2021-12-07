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

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    resetValueHandelr: resetemailValueHandelr,
  } = useInput((value) => value.trim() !== '' && value.includes('@'));

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (userName.trim() == '' || enteredEmail.trim() == '') {
      return;
    }
    resetNameValueHandelr();
    resetNameValueHandelr();
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
        {emailInputHasError && <div>Please entered valid input.</div>}
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

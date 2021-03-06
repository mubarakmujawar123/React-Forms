import React, { useState, useEffect } from 'react';
const SimpleInput = (props) => {
  const [userName, setUserName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailIsCorrect, setEnteredEmailIsCorrect] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  /*const [formIsValid, setFormIsvalid] = useState(false);*/
  const isInputValid = userName.trim() != '';
  const isEnteredEmailValid =
    enteredEmail.trim() != '' && enteredEmail.includes('@');
  const namedInputIsInvalid = !isInputValid && enteredNameTouched;
  const emailInputIsInvalid = !isEnteredEmailValid && enteredEmailTouched;
  let formIsValid = false;
  if (isInputValid && isEnteredEmailValid) {
    formIsValid = true;
  }
  /*useEffect(() => {
    if (isInputValid) {
      setFormIsvalid(true);
    } else {
      setFormIsvalid(false);
    }
  }, [isInputValid]);*/
  const nameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const nameBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailBlurHandler = () => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    if (userName.trim() == '' || enteredEmail.trim() == '') {
      return;
    }
    setUserName('');
    setEnteredEmail('');
    setEnteredNameTouched(false);
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
        {namedInputIsInvalid && <div>Your Name must not be empty.</div>}
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

export default SimpleInput;

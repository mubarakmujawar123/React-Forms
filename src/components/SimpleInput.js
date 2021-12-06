import React, { useState, useRef } from 'react';
const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [userName, setUserName] = useState('');
  const [isInputValid, setIsInputValid] = useState(false);

  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameChangeHandler = (event) => {
    setEnteredNameTouched(true);
    setUserName(event.target.value);
    if (event.target.value.trim() !== '') {
      setIsInputValid(true);
    }
  };

  const onBlurHandler = () => {
    setEnteredNameTouched(true);
    if (userName.trim() == '') {
      setIsInputValid(true);
    }
  };
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    if (userName.trim() == '') {
      setIsInputValid(false);
      return;
    }
    setIsInputValid(true);
    console.log(nameInputRef.current.value);
    console.log(userName);
  };

  const namedInputIsInvalid = !isInputValid && enteredNameTouched;
  return (
    <form onSubmit={formSubmissionHandler}>
      <div>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          name="name"
          type="text"
          id="name"
          onBlur={onBlurHandler}
          onChange={nameChangeHandler}
          value={userName}
        />
        {namedInputIsInvalid && <p>Your Name must not be empty.</p>}
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

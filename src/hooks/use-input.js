import { useState, useReducer } from 'react';
//using useReducer
const initialInputState = {
  value: '',
  isTouched: false,
};
const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === 'BLUR') {
    return { value: state.value, isTouched: true };
  }
  if (action.type === 'RESET') {
    return { value: '', isTouched: false };
  }
  return initialInputState;
};
const useInput = (validateValue) => {
  ///using useState//
  /*const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState('');

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueBlurHandler = () => {
    setIsTouched(true);
  };
  const resetValueHandelr = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    resetValueHandelr,
  };*/

  ////using useReducer
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: 'INPUT', value: event.target.value });
  };

  const valueBlurHandler = () => {
    dispatch({ type: 'BLUR' });
  };
  const resetValueHandelr = () => {
    dispatch({ type: 'RESET' });
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    resetValueHandelr,
  };
};

export default useInput;

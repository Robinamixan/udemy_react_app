import React, {useState} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import AuthContext from '../../store/auth-context';

const USER_INPUT_ACTION = 'USER_INPUT';
const INPUT_BLUR_ACTION = 'INPUT_BLUR';

const emailReducer = (state, action) => {
  if (action.type === USER_INPUT_ACTION) {
    return {
      value: action.value,
      isValid: action.value.includes('@'),
    };
  }

  if (action.type === INPUT_BLUR_ACTION) {
    return {
      value: state.value,
      isValid: state.value.includes('@'),
    };
  }

  return {
    value: '',
    isValid: false,
  };
};

const passwordReducer = (state, action) => {
  if (action.type === USER_INPUT_ACTION) {
    return {
      value: action.value,
      isValid: action.value.trim().length > 6,
    };
  }

  if (action.type === INPUT_BLUR_ACTION) {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6,
    };
  }

  return {
    value: '',
    isValid: false,
  };
};

const Login = () => {
  const context = React.useContext(AuthContext);

  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = React.useReducer(
      emailReducer,
      {value: '', isValid: null},
  );
  const [passwordState, dispatchPassword] = React.useReducer(
      passwordReducer,
      {value: '', isValid: null},
  );

  const {isValid: isValidEmail} = emailState;
  const {isValid: isValidPassword} = passwordState;

  const emailInputRef = React.useRef();
  const passwordInputRef = React.useRef();

  // executes only after 500ms when user finished typing
  React.useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
          isValidEmail && isValidPassword,
      );
    }, 500);

    // cleanup function runs first and then timeout
    return () => {
      clearTimeout(identifier);
    };
  }, [isValidEmail, isValidPassword]);

  const emailChangeHandler = (event) => {
    dispatchEmail({type: USER_INPUT_ACTION, value: event.target.value});
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: USER_INPUT_ACTION, value: event.target.value});
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: INPUT_BLUR_ACTION});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: INPUT_BLUR_ACTION});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      context.onLogin(emailState.value, passwordState.value);
    } else if (!isValidEmail) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
      <Card className={classes.login}>
        <form onSubmit={submitHandler}>
          <Input
              id={'email'}
              ref={emailInputRef}
              type={'email'}
              label={'E-Mail'}
              isValid={emailState.isValid}
              value={emailState.value}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
          />
          <Input
              id={'password'}
              ref={passwordInputRef}
              type={'password'}
              label={'Password'}
              isValid={passwordState.isValid}
              value={passwordState.value}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
          />
          <div className={classes.actions}>
            <Button
                type="submit"
                className={classes.btn}
            >
              Login
            </Button>
          </div>
        </form>
      </Card>
  );
};

export default Login;

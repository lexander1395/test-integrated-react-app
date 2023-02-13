import { useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import styles from './login.module.scss';
import { TextField, Button } from '@material-ui/core';
import { useNavigate } from "react-router-dom";

/* eslint-disable-next-line */
export interface LoginProps {}

const Styles = makeStyles(() => ({
  form: {
    textAlign: 'center',
    width: '300px'
  },
  formGroup: {
    margin: '10px 0',
  },
  formControl: {
    width: '100%',
  },
  errorText: {
    color: 'red',
    marginTop: '5px',
  },
  submitButton: {
    marginTop: '10px',
  },
}));

export const LoginPage = (props: LoginProps) => {
  const navigate = useNavigate();
  const styles = Styles();
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const onChangeEmailTxtInput = (event: any) => {
    onChangeEmail(event.target.value);
    setEmailError(false);
  };

  const onChangePasswordTxtInput = (event: any) => {
    onChangePassword(event.target.value);
    setPasswordError(false);
  };

  const onClickLogin = useCallback(() => {
    let invalid = false;
    navigate('/user/')
  }, [email, password]);

  return (
    <form className={styles.form} onSubmit={onClickLogin}>
      <div className={styles.formGroup}>
        <TextField
          className={styles.formControl}
          label="Email"
          value={email}
          onChange={onChangeEmailTxtInput}
          error={emailError}
        />
        {emailError && (
          <div className={styles.errorText}>
            Must be a valid email!
          </div>
        )}
      </div>
      <div className={styles.formGroup}>
        <TextField
          className={styles.formControl}
          label="Password"
          type="password"
          value={password}
          onChange={onChangePasswordTxtInput}
          error={passwordError}
        />
        {passwordError && (
          <div className={styles.errorText}>
            Password Error!
          </div>
        )}
      </div>
      <Button
        type="submit"
        color="primary"
        variant="contained"
        className={styles.submitButton}
      >
        Sign In
      </Button>
    </form>
  );
}

export default LoginPage;

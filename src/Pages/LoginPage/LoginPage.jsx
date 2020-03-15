import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login, signup } from  '../../Redux/actions';
import styles from './LoginPage.module.css';


function LoginPage(props) {

  const { error, loading, login, signup } = props;
  const [password, setPassword] = useState('');
  const [userName, serUserName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  console.log('error', error)

  return (
    <div className={styles.formWrapper}>
      <h3 className={styles.formHeading}>Please Log in or Sign up to continue</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            Email
          </label>
            <input onChange={e => serUserName(e.target.value)} type="userName" name="userName"/>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            Password
          </label>
            <input type="password" onChange={e => setPassword(e.target.value)} name="password"/>
        </div>
        {
          error && (
          <div className={styles.error}>
            {error.message}
          </div>
        )}
        <div className={styles.buttonGroup}>
          <button 
            disabled={loading} 
            className={styles.btn}
            onClick={(e) => login(userName, password)} 
            >
              Sign in
            </button>
          <button 
            onClick={() => signup(userName, password)} 
            className={styles.btn}
            >
              Sign Up
            </button>
        </div>
      </form>
    </div>
  );
}

const maspStateToProps = (state) => ({
  laoding: state.user.loading,
  error: state.user.error,
});

const mapDispatch = {
  login, signup
};

export default connect(maspStateToProps, mapDispatch)(LoginPage);

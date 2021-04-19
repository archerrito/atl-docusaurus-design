import React, { useState } from "react";
import classes from 'clsx';
import styles from './styles.module.css';
import EmailSubmitIcon from '@site/static/img/icon-email-submit-dark.svg';


const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const EmailBox = () => {
  const [isValid, setValid] = useState(false);
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  }
  const handleInput = (event) => {
    const val = event.target.value;
    setValue(val);
    setValid(validateEmail(val));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes(styles.emailBox, {
        [styles.emailBoxValid]: isValid
      })} >
        <input
          placeholder="Enter your email"
          className={styles.emailBoxInput}
          type="email"
          value={value}
          onChange={handleInput}
        />
        <button type="submit" className={styles.emailBoxIcon}>
          <EmailSubmitIcon />
        </button>
      </div>
    </form>
  );
};

export default EmailBox;

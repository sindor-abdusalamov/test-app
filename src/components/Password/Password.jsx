import React from 'react';
import style from './Password.module.scss';

const PasswordForm = () => {
  return (
    <div className={style.PasswordBlock}>
      <div className={style.Password}>
        <p className={style.PasswordText}>Пароль</p>
        <div>
          <input className={style.PasswordField} type="text" />
          <span className={style.PasswordRequire}>
            Ваш новый пароль должен содержать не менее 5 символов.
          </span>
        </div>
      </div>
      <div className={style.PasswordRetry}>
        <p className={style.PasswordRetryText}>Пароль ещё раз</p>
        <div>
          <input className={style.PasswordRetryField} type="text" />
          <span className={style.PasswordRetryRequire}>
            Повторите пароль, пожалуйста, это обезопасит вас с нами на случай
            ошибки.
          </span>
        </div>
      </div>
      <div className={style.Line}></div>
    </div>
  );
};

export default PasswordForm;

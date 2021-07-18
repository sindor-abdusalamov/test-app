import React from 'react';
import style from './EmailForm.module.scss';

const EmailForm = () => {
  return (
    <div>
      <div className={style.Email}>
        <p className={style.EmailText}>Электронная почта</p>
        <input className={style.EmailField} type="text" />
        <span className={style.EmailRequire}>
          Можно изменить адрес, указанный при регистрации.
        </span>
      </div>
      <div className={style.Agreement}>
        <p className={style.AgreementText}>Я согласен</p>
        <input className={style.AgreementCheking} type="checkbox" />
        <span className={style.AgreementCondition}>
          принимать актуальную информацию на емейл
        </span>
      </div>
    </div>
  );
};

export default EmailForm;

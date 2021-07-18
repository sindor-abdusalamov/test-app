import React from 'react';
import style from './Button.module.scss';

const Button = () => {
  return (
    <div>
      <button className={style.Btn} type="button">
        Изменить
      </button>
      <span className={style.BtnComment}>
        последние изменения 15 мая 2012 в 14:55:17
      </span>
    </div>
  );
};

export default Button;

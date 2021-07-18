import React from 'react';
import style from './Greetings.module.scss';

const Greetings = () => {
  return (
    <div className={style.Greetings}>
      <h1 className={style.heading}>
        <span className={style.Hello}>Здравствуйте,</span> Человек №3596941
      </h1>
      <div className={style.Status}>
        <a className={style.StatusLink} href="#">
          Сменить статус
        </a>
      </div>
    </div>
  );
};

export default Greetings;

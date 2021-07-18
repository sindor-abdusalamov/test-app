import React from 'react';
import Greetings from '../Greetings/Greetings';
// import ChangeStat from '../ChngStat/Chngstat';
import CountriesList from '../Countries/Countries';
import PasswordForm from '../Password/Password';
import EmailForm from '../EmailForm/EmailForm';
import Button from '../Button/Button';
import style from './Container.module.scss';

const Container = () => {
  return (
    <div className={style.Container}>
      <Greetings />
      {/* <ChangeStat /> */}
      <CountriesList />
      <PasswordForm />
      <EmailForm />
      <Button />
    </div>
  );
};

export default Container;

import React from 'react';
import SignUp from '../../../presentation/screens/signup';
import {makeRemoteAddAccount} from '../usecases';
import {makeSignUpValidation} from '../validation';

export const MakeSignUp: React.FC = () => {
  return (
    <SignUp
      addAccount={makeRemoteAddAccount()}
      validation={makeSignUpValidation()}
    />
  );
};

import {View} from 'react-native';
import React from 'react';
import {AddAccount} from '../../../domain/usecases';
import {Validation} from '../../protocols';

type Props = {
  validation: Validation;
  addAccount: AddAccount;
};

const SignUp: React.FC<Props> = ({validation, addAccount}: Props) => {
  console.log(validation.validate('abcde', {}));
  console.log(addAccount);
  return <View />;
};

export default SignUp;

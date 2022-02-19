import {AddAccount} from '../../src/domain/usecases';
import {mockAccountModel} from './mock-account';

export const mockAddAccountParams = (): AddAccount.Params => {
  const password = '123123123';
  return {
    name: 'A name',
    email: 'email@gmail.com',
    password,
    passwordConfirmation: password,
  };
};

export const mockAddAccountModel = (): AddAccount.Model => mockAccountModel();

export class AddAccountSpy implements AddAccount {
  account = mockAddAccountModel();
  params: AddAccount.Params | undefined;
  callsCount = 0;

  async add(params: AddAccount.Params): Promise<AddAccount.Model> {
    this.params = params;
    this.callsCount++;
    return this.account;
  }
}

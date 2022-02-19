import faker from 'faker';
import {RemoteAddAccount} from '../../../src/data/usecases';
import {mockAddAccountParams} from '../../domain/mock-add-account';
import {HttpClientSpy} from '../mocks/mock-http';

type SutTypes = {
  sut: RemoteAddAccount;
  httpClientSpy: HttpClientSpy<RemoteAddAccount.Model>;
};

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<RemoteAddAccount.Model>();
  const sut = new RemoteAddAccount(url, httpClientSpy);
  return {
    sut,
    httpClientSpy,
  };
};

describe('RemoteAddAccount', () => {
  test('Should call HttpClient with correct values', async () => {
    const url = faker.internet.url();
    const {sut, httpClientSpy} = makeSut(url);
    const addAccountParams = mockAddAccountParams();

    await sut.add(addAccountParams);

    expect(httpClientSpy.url).toBe(url);
    expect(httpClientSpy.method).toBe('post');
    expect(httpClientSpy.body).toEqual(addAccountParams);
  });
});

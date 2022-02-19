import axios from 'axios';
import {AxiosHttpClient} from '../../../src/infrastructure';
import {mockHttpRequest} from '../../data/mocks';
import {mockAxios} from '../mocks/mock-axios';

jest.mock('axios');

type SutTypes = {
  sut: AxiosHttpClient;
  mockedAxios: jest.Mocked<typeof axios>;
};

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient();
  const mockedAxios = mockAxios();
  return {
    sut,
    mockedAxios,
  };
};

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const request = mockHttpRequest();
    const {sut, mockedAxios} = makeSut();

    await sut.request(request);

    expect(mockedAxios.request).toHaveBeenCalledWith({
      url: request.url,
      body: request.body,
      headers: request.headers,
      method: request.method,
    });
  });

  test('Should return correct response', async () => {
    const {sut, mockedAxios} = makeSut();

    const httpResponse = await sut.request(mockHttpRequest());
    const axiosResponse = await mockedAxios.request.mock.results[0].value;

    expect(httpResponse).toEqual({
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    });
  });
});

import axios from 'axios';
import faker from 'faker';

export const mockHttpResponse = (): any => ({
  data: faker.random.objectElement(),
  status: faker.random.arrayElement([200, 204, 400, 401, 403, 404, 500]),
});

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  mockedAxios.request.mockClear().mockResolvedValue(mockHttpResponse());
  return mockedAxios;
};

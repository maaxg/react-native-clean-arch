import {RemoteAddAccount} from '../../../data/usecases';
import {AddAccount} from '../../../domain/usecases';
import {makeApiUrl} from '../http';
import {makeAxiosHttpClient} from '../http/axios-http-client-factory';

export const makeRemoteAddAccount = (): AddAccount =>
  new RemoteAddAccount(makeApiUrl('/signup'), makeAxiosHttpClient());

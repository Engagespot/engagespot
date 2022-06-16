import '../../../../config/mocks/matchMedia.mock';
import '@testing-library/jest-dom';
import 'whatwg-fetch';
import { setupServer } from 'msw/node';
import { handlers } from './handlers';
import { beforeAll, afterAll, afterEach } from 'vitest';

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

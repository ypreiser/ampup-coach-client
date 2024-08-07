// src/api/apiRequest.test.ts

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { apiRequest } from './apiRequest';

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  clear: vi.fn(),
};
Object.defineProperty(global, 'localStorage', { value: localStorageMock });

describe('apiRequest', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
    localStorageMock.getItem.mockReturnValue('mock-token');
  });

  afterEach(() => {
    mock.restore();
    localStorageMock.clear();
    vi.resetAllMocks();
  });

  it('should make a GET request and return data', async () => {
    const mockData = { message: 'success' };
    mock.onGet('http://localhost:3030/test-path').reply(200, mockData);

    const response = await apiRequest({
      method: 'GET',
      path: '/test-path',
    });

    expect(response).toEqual(mockData);
  });

  it('should make a POST request with body and return data', async () => {
    const mockData = { message: 'created' };
    const requestBody = { name: 'test' };
    mock.onPost('http://localhost:3030/test-path').reply(201, mockData);

    const response = await apiRequest({
      method: 'POST',
      path: '/test-path',
      body: requestBody,
    });

    expect(response).toEqual(mockData);
  });

  it('should throw an error if the request fails', async () => {
    mock.onGet('http://localhost:3030/test-path').reply(500);

    await expect(
      apiRequest({
        method: 'GET',
        path: '/test-path',
      }),
    ).rejects.toThrow('Request failed with status code 500');
  });

  it('should include the Authorization header with the token from localStorage', async () => {
    const mockData = { message: 'success' };
    const mockToken = 'mock-token';

    localStorageMock.getItem.mockReturnValue(mockToken);

    mock.onGet('http://localhost:3030/test-path').reply((config) => {
      expect(config.headers?.Authorization).toBe(`Bearer ${mockToken}`);
      return [200, mockData];
    });

    const response = await apiRequest({
      method: 'GET',
      path: '/test-path',
    });

    expect(response).toEqual(mockData);
  });
  //todo: test before production!

  // it('should use the production URL if isProduction is true', async () => {
  //   // Temporarily set isProduction to true
  //   const originalIsProduction = isProduction;
  //   (global as any).isProduction = true;

  //   const mockData = { message: 'success' };
  //   mock.onGet('https://ampup.pro/api/test-path').reply(200, mockData);

  //   const consoleLogSpy = vi.spyOn(console, 'log');

  //   const response = await apiRequest({
  //     method: 'GET',
  //     path: '/test-path',
  //   });

  //   const loggedUrl = consoleLogSpy.mock.calls.find(
  //     (call) => call[0] === 'URL used:'
  //   );
  //   expect(loggedUrl?.[1]).toBe('https://ampup.pro/api/test-path');
  //   expect(response).toEqual(mockData);

  //   consoleLogSpy.mockRestore();
  //   // Reset isProduction
  //   (global as any).isProduction = originalIsProduction;
  // });
});

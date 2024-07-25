import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { apiRequest } from './apiRequest';

// Mock localStorage
const localStorageMock = (() => {
  let store: { [key: string]: string } = {};

  return {
    getItem(key: string) {
      return store[key] || null;
    },
    setItem(key: string, value: string) {
      store[key] = value.toString();
    },
    removeItem(key: string) {
      delete store[key];
    },
    clear() {
      store = {};
    },
  };
})();

Object.defineProperty(global, 'localStorage', { value: localStorageMock });

describe('apiRequest', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
    localStorage.setItem('token', 'mock-token');
  });

  afterEach(() => {
    mock.restore();
    localStorage.clear();
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

    try {
      await apiRequest({
        method: 'GET',
        path: '/test-path',
      });
    } catch (error) {
      expect((error as Error).message).toBe(
        'Request failed with status code 500',
      );
    }
  });

  it('should use the production URL if isProduction is true', async () => {
    // Temporarily set the production environment variable
    const originalEnv = import.meta.env.VITE_PRODUCTION;
    import.meta.env.VITE_PRODUCTION = 'true';

    const mockData = { message: 'success' };
    mock.onGet('https://ampup.pro/api/test-path').reply(200, mockData);

    // Add a spy on console.log
    const consoleLogSpy = vi.spyOn(console, 'log');

    try {
      const response = await apiRequest({
        method: 'GET',
        path: '/test-path',
      });

      // Check what URL was actually used
      const loggedUrl = consoleLogSpy.mock.calls.find(
        (call) => call[0] === 'URL used:',
      );
      console.log('URL logged:', loggedUrl ? loggedUrl[1] : 'No URL logged');

      expect(response).toEqual(mockData);
    } finally {
      // Restore the original environment variable
      import.meta.env.VITE_PRODUCTION = originalEnv;
      consoleLogSpy.mockRestore();
    }
  });

  it('should include the Authorization header with the token from localStorage', async () => {
    const mockData = { message: 'success' };
    const mockToken = 'mock-token';

    // Set the token in the mock localStorage
    localStorage.setItem('token', mockToken);

    mock.onGet('http://localhost:3030/test-path').reply((config) => {
      // Check if the Authorization header is set correctly
      expect(config.headers?.Authorization).toBe(`Bearer ${mockToken}`);
      return [200, mockData];
    });

    const response = await apiRequest({
      method: 'GET',
      path: '/test-path',
    });

    expect(response).toEqual(mockData);
  });
});

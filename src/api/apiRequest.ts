// src/api/apiRequest.ts

import axios, { AxiosRequestConfig } from 'axios';

// Export these so we can override them in tests
export const isProduction = import.meta.env.VITE_PRODUCTION === 'true';
export const prodUrl = 'https://ampup.pro/api/';
export const devUrl = 'http://localhost:3030/';

interface ApiRequestOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  body?: any;
  options?: AxiosRequestConfig;
}

export const apiRequest = async ({
  method,
  path,
  body,
  options = {},
}: ApiRequestOptions): Promise<any> => {
  const finalPath = path.startsWith('/') ? path.slice(1) : path;
  const baseUrl = isProduction ? prodUrl : devUrl;
  const url = `${baseUrl}${finalPath}`;

  console.log('URL used:', url);

  const response = await axios({
    method,
    url,
    data: body,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
    },
    ...options,
  });

  console.log('response', response.data);
  return response.data;
};

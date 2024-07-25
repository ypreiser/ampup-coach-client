import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const isProduction: string = import.meta.env.VITE_PRODUCTION;
// todo: fix prodUrl
const prodUrl = 'https://ampup.pro/api/';
const devUrl = 'http://localhost:3030/';

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
  // console.log('apiCall \n', { method, path, body });

  try {
    const finalPath = path.startsWith('/') ? path.slice(1) : path;
    const baseUrl = isProduction === 'true' ? prodUrl : devUrl;
    const url = `${baseUrl}${finalPath}`;

    const response: AxiosResponse<any> = await axios({
      method,
      url,
      data: body,
      headers: {
        Authorization: `Bearer ${localStorage.token || ''}`,
      },
      ...options,
    });

    console.log('response', response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', (error as Error).message);
    throw error;
  }
};

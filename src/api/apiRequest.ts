import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const isProduction = import.meta.env.VITE_PRODUCTION === 'true';
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
  try {
    const finalPath = path.startsWith('/') ? path.slice(1) : path;
    const baseUrl = isProduction ? prodUrl : devUrl;
    const url = `${baseUrl}${finalPath}`;

    console.log('URL used:', url); // Add this line

    const response: AxiosResponse<any> = await axios({
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
  } catch (error) {
    console.error('Error:', (error as Error).message);
    throw error;
  }
};

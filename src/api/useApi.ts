// src/api/useApi.ts

import { useQuery, useMutation, UseQueryOptions } from '@tanstack/react-query';
import { apiRequest } from './apiRequest';
import { AxiosRequestConfig } from 'axios';

interface UseApiOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  body?: any;
  options?: AxiosRequestConfig;
}

export const useApi = <T>(
  { method, path, body, options }: UseApiOptions,
  queryOptions?: UseQueryOptions<T>,
) => {
  const queryKey = [path, method, body];

  const query = useQuery<T>({
    queryKey,
    queryFn: () => apiRequest({ method, path, body, options }),
    ...queryOptions,
    enabled: method === 'GET' && queryOptions?.enabled !== false,
  });

  const mutation = useMutation<T, Error, void>({
    mutationFn: () => apiRequest({ method, path, body, options }),
  });

  return method === 'GET' ? query : mutation;
};

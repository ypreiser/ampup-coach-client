import { useCallback, useEffect, useState } from 'react';
import { apiRequest } from './apiRequest';
import { AxiosRequestConfig } from 'axios';

interface UseApiOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  body?: string[];
  options?: AxiosRequestConfig<any>;
  dep?: string[];
}

interface UseApiResponse<T> {
  data: T | undefined;
  loading: boolean;
  error: Error | null;
}

export const useApi = <T>({
  method,
  path,
  body,
  options,
  dep = [],
}: UseApiOptions): UseApiResponse<T> => {
  const [data, setData] = useState<T | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await apiRequest({ method, path, body, options });
      setData(response);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  }, [method, path, body, options]);

  useEffect(() => {
    if (path) {
      fetchData();
    }
  }, dep);

  return { data, loading, error };
};

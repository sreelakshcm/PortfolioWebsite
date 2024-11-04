import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { AnyObject } from 'types/api';

const servicePort = 8000;

const getAPIUrl = (): string => {
  const { protocol, hostname } = window.location;

  if (hostname.includes('localhost')) {
    return `${protocol}//${hostname}:${servicePort}/api`;
  }
  
  const prodURL = hostname || 'https://portfolio-sree-service.vercel.app';
  return '${protocol}//${prodURL}:${servicePort}/api';
};

const baseURL = getAPIUrl();

const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const apiRequest = async <T>(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  url: string,
  data?: AnyObject,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  try {
    const response = await apiClient.request<T>({
      method,
      url,
      data,
      ...config,
    });
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('API request error:', error);
    throw error;
  }
};

export const apiGet = async <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  return apiRequest<T>('GET', url, undefined, config);
};

export const apiPost = async <T>(url: string, data: AnyObject, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  return apiRequest<T>('POST', url, data, config);
};

export const apiPut = async <T>(url: string, data: AnyObject, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  return apiRequest<T>('PUT', url, data, config);
};

export const apiDelete = async <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  return apiRequest<T>('DELETE', url, undefined, config);
};

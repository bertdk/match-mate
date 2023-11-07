import { server$ } from '@builder.io/qwik-city';
import axios, { AxiosRequestConfig } from 'axios';

export const get = server$(function (url: string, config?: AxiosRequestConfig) {
  const baseURL = this.env.get('PUBLIC_API_URL');
  const api = axios.create({ baseURL });
  return api.get(url, config);
});

export const post = server$(function (
  url: string,
  data,
  config?: AxiosRequestConfig,
) {
  const baseURL = this.env.get('PUBLIC_API_URL');
  const api = axios.create({ baseURL });
  return api.post(url, data, config);
});

export const patch = server$(function (
  url: string,
  data,
  config?: AxiosRequestConfig,
) {
  const baseURL = this.env.get('PUBLIC_API_URL');
  const api = axios.create({ baseURL });
  return api.patch(url, data, config);
});

import axios, { AxiosError } from 'axios';

import { API_ENDPOINT } from '@/lib/constants';
import { Country } from '@/lib/types';

export async function fetchCountryList(): Promise<Country[]> {
  try {
    const { data } = await axios.get<Country[]>(API_ENDPOINT);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
}

import axios, { AxiosError } from 'axios';

import {
  API_ALL_COUNTRIES_ENDPOINT,
  BASE_URL,
  COUNTRY_NAME_URL,
} from '@/lib/constants';
import { Country, CountryDetails } from '@/lib/types';

export async function fetchCountryList(): Promise<Country[]> {
  try {
    const { data } = await axios.get<Country[]>(API_ALL_COUNTRIES_ENDPOINT);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
}

export async function fetchCountryDetails(name: string | undefined) {
  try {
    const { data } = await axios.get<CountryDetails[]>(
      `${COUNTRY_NAME_URL}${name}?fullText=true&fields=name,flags,population,region,subregion,capital,languages,currencies,tld,borders`
    );
    const borderCodes = data[0]?.borders || [];

    if (borderCodes.length > 0) {
      const { data: bordersData } = await axios(
        `${BASE_URL}/alpha?codes=${borderCodes.join(',')}`
      );

      const borderNames = bordersData.map(
        (country: { name: { common: string } }) => country.name.common
      );

      return { ...data[0], borders: borderNames };
    }

    return data[0];
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
}

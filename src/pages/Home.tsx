import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';

import CategoryFilter from '../components/CategoryFilter';
import CountryList from '../components/CountryList';
import Loading from '../components/Loading';
import SearchInput from '../components/SearchInput';
import { Country } from '../types';

const URL =
  'https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital&';

async function fetchCountryList() {
  try {
    const { data } = await axios.get<Country[]>(URL);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
}

export default function Home() {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ['countries'],
    queryFn: fetchCountryList,
  });

  return (
    <>
      <div>
        <SearchInput />
        <CategoryFilter />
      </div>

      {isLoading ? (
        <Loading />
      ) : isError ? (
        <h1>Error: {error.message}</h1>
      ) : (
        <CountryList countries={data ?? []} />
      )}
    </>
  );
}

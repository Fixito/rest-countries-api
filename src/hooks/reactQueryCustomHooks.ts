import { useQuery } from '@tanstack/react-query';

import {
  fetchCountryDetails,
  fetchCountryList,
} from '@/services/countryService';

export function useFetchCountries() {
  const { data, isError, isPending, error } = useQuery({
    queryKey: ['countries'],
    queryFn: fetchCountryList,
  });

  return { data, isError, isPending, error };
}

export function useFetchCountryDetails(countryName: string) {
  const { data, isError, isPending, error } = useQuery({
    queryKey: ['country', countryName],
    queryFn: () => fetchCountryDetails(countryName),
  });

  return { data, isError, isPending, error };
}

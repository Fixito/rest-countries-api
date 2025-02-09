import { useEffect, useRef, useState } from 'react';

import { sortBy } from 'lodash';

import CategoryFilter from '@/components/CategoryFilter';
import CountryList from '@/components/CountryList';
import Loading from '@/components/Loading';
import SearchInput from '@/components/SearchInput';
import { useFetchCountries } from '@/hooks/reactQueryCustomHooks';
import { useDebounce } from '@/hooks/useDebounce';
import { paginate } from '@/lib/utils';

export default function Home() {
  const { data, isError, isPending, error } = useFetchCountries();
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [region, setRegion] = useState('');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const flagRef = useRef<boolean>(true);
  const debouncedSearchTerm = useDebounce({ value: searchTerm });

  const regions = sortBy([...new Set(data?.map((country) => country.region))]);

  const filteredCountries =
    data?.filter((country) => {
      if (region && country.region !== region) return false;
      if (
        debouncedSearchTerm &&
        !country.name.common
          .toLowerCase()
          .includes(debouncedSearchTerm.toLowerCase())
      )
        return false;
      return true;
    }) || [];

  const countries = paginate(filteredCountries);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setPage(0);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRegion(e.target.value);
  };

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver((entries) => {
      if (flagRef.current) {
        flagRef.current = false;
        return;
      }

      if (entries[0] && entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    });

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <>
      <div>
        <SearchInput
          searchTerm={searchTerm}
          onInputChange={handleInputChange}
        />
        <CategoryFilter
          value={region}
          options={regions}
          onSelect={handleSelectChange}
        />
      </div>

      {isError && error && <h1>Error: {error.message}</h1>}

      {searchTerm && countries.length === 0 ? (
        <h1>No countries found for your search</h1>
      ) : (
        countries
          .slice(0, page + 1)
          .map((countryPage, index) => (
            <CountryList key={index} countries={countryPage} />
          ))
      )}

      {isPending && <Loading />}

      <div ref={loadMoreRef} />
    </>
  );
}

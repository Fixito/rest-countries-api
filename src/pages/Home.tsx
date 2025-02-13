import { useEffect, useRef, useState } from 'react';

import { sortBy } from 'lodash';

import CountryList from '@/components/CountryList';
import Loading from '@/components/Loading';
import SearchAndFilter from '@/components/SearchAndFilter';
import { useFetchCountries } from '@/hooks/reactQueryCustomHooks';
import { useDebounce } from '@/hooks/useDebounce';
import { Country } from '@/lib/types';
import { paginate } from '@/lib/utils';

export default function Home() {
  const { data, isError, isPending, error } = useFetchCountries();
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [region, setRegion] = useState('');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const debouncedSearchTerm = useDebounce({ value: searchTerm });

  const regions: string[] = [
    'All',
    ...sortBy([...new Set(data?.map((country: Country) => country.region))]),
  ];

  const sortedCountries = sortBy(data, 'name.common');

  const filteredCountries =
    sortedCountries?.filter((country) => {
      if (region !== 'All' && region && country.region !== region) return false;

      if (
        debouncedSearchTerm &&
        !country.name.common
          .toLowerCase()
          .includes(debouncedSearchTerm.toLowerCase())
      ) {
        return false;
      }

      return true;
    }) || [];

  const countries = paginate(filteredCountries);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setPage(0);
  };

  const handleSelectChange = (value: string) => {
    setRegion(value);
  };

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver((entries) => {
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
    <div className='mx-auto max-w-7xl px-4 py-6 xl:px-0'>
      <SearchAndFilter
        searchTerm={searchTerm}
        onInputChange={handleInputChange}
        region={region}
        regions={regions}
        onSelect={handleSelectChange}
      />

      {isError && error && (
        <div>
          <h1 className='mt-6 text-3xl leading-none font-extrabold'>
            Error: {error.message}
          </h1>
        </div>
      )}

      {searchTerm && countries.length === 0 ? (
        <h1 className='mt-16 text-3xl leading-none font-extrabold'>
          No countries found for your search
        </h1>
      ) : (
        <section className='mt-8 grid justify-center gap-10 md:grid-cols-2 md:justify-items-center md:gap-[4.6875rem] lg:mt-12 lg:grid-cols-3 xl:grid-cols-4'>
          {countries.slice(0, page + 1).map((countryPage, index) => (
            <CountryList key={index} countries={countryPage} />
          ))}
        </section>
      )}

      {isPending && (
        <div className='flex justify-center'>
          <Loading />
        </div>
      )}

      <div ref={loadMoreRef} />
    </div>
  );
}

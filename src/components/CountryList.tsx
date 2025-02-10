import { Country } from '@/lib/types';

import CountryCard from './CountryCard';

type CountryListProps = {
  countries: Country[];
};

export default function CountryList({ countries }: CountryListProps) {
  return (
    <section className='mt-8'>
      {countries.map((country) => (
        <CountryCard key={country.name.official} {...country} />
      ))}
    </section>
  );
}

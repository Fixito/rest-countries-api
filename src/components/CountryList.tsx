import { Country } from '../types';
import CountryCard from './CountryCard';

type CountryListProps = {
  countries: Country[];
};

export default function CountryList({ countries }: CountryListProps) {
  return (
    <section>
      {countries.map((country) => (
        <CountryCard key={country.name.common} {...country} />
      ))}
    </section>
  );
}

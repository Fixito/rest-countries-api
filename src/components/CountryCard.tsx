import { Link } from 'react-router';

import { Country } from '@/lib/types';

export default function CountryCard({
  name,
  flags: { svg, alt },
  population,
  region,
  capital,
}: Country) {
  return (
    <Link to={`countries/${name.common}`}>
      <article>
        <img src={svg} alt={alt} />
        <h2>{name.common}</h2>
        <ul>
          <li>
            <strong>Population:</strong> {population.toLocaleString()}
          </li>
          <li>
            <strong>Region:</strong> {region}
          </li>
          <li>
            <strong>Capital:</strong> {capital[0]}
          </li>
        </ul>
      </article>
    </Link>
  );
}

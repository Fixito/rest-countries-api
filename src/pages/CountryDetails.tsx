import { Link, useParams } from 'react-router';

import Loading from '@/components/Loading';
import { useFetchCountryDetails } from '@/hooks/reactQueryCustomHooks';
import { type CountryDetails } from '@/lib/types';

export default function CountryDetails() {
  const { countryName = '' } = useParams();

  const { data, isError, isPending, error } =
    useFetchCountryDetails(countryName);

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return (
      <>
        <h1>Error: {error?.message}</h1>
        <Link to='/'>Back</Link>
      </>
    );
  }

  const {
    borders,
    capital,
    currencies,
    flags: { svg, alt },
    languages,
    name: { common, nativeName },
    population,
    region,
    subregion,
    tld,
  } = data as CountryDetails;

  const newNativeName = nativeName
    ? Object.values(nativeName).at(-1)?.common
    : '';
  const currencyList = Object.values(currencies).map(
    (currency) => currency.name
  );
  const languageList = Object.values(languages);
  const formattedPopulation = new Intl.NumberFormat('en-US').format(population);

  return (
    <>
      <div>
        <Link to='/'>Back</Link>
      </div>
      <section>
        <img src={svg} alt={alt} />
        <h1>{common}</h1>
        <div>
          <div>
            <p>
              <strong>Native Name:</strong> {newNativeName}
            </p>
            <p>
              <strong>Population:</strong> {formattedPopulation}
            </p>
            <p>
              <strong>Region:</strong> {region}
            </p>
            <p>
              <strong>Sub Region:</strong> {subregion}
            </p>
            <p>
              <strong>Capital:</strong> {capital}
            </p>
          </div>

          <div>
            <p>
              <strong>Top Level Domain</strong> {tld[0]}
            </p>
            <p>
              <strong>Currencies:</strong> {currencyList.join(', ')}
            </p>
            <p>
              <strong>Languages:</strong> {languageList.join(', ')}
            </p>
          </div>
        </div>

        {borders.length > 0 && (
          <div>
            <strong>Border Countries:</strong>
            <div>
              {borders.map((border: string) => (
                <Link to={`/countries/${border}`} key={border}>
                  {border}
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}

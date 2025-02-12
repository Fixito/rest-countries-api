import { ArrowLeft } from 'lucide-react';

import { Link, useParams } from 'react-router';

import Loading from '@/components/Loading';
import { Button } from '@/components/ui/button';
import { useFetchCountryDetails } from '@/hooks/reactQueryCustomHooks';
import { type CountryDetails } from '@/lib/types';

export default function CountryDetails() {
  const { countryName = '' } = useParams();

  const { data, isError, isPending, error } =
    useFetchCountryDetails(countryName);

  if (isPending) {
    return (
      <div className='grid h-[calc(100dvh_-_80px)] place-items-center'>
        <Loading />
      </div>
    );
  }

  if (isError) {
    return (
      <div className='mx-auto max-w-7xl px-6 pt-10 pb-[10rem] md:pt-20 xl:px-0'>
        <Button
          asChild
          className='text-neutral shadow-button w-[6.5rem] rounded-xs bg-white px-6 py-1.5 text-sm/5 font-light hover:bg-white/1'
        >
          <Link to='/'>
            <ArrowLeft /> Back
          </Link>
        </Button>
        <h1 className='mt-16 text-3xl leading-none font-extrabold'>
          Error: {error?.message}
        </h1>
      </div>
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
    <div className='mx-auto max-w-7xl px-6 pt-10 pb-[10rem] md:pt-20 xl:px-0'>
      <div>
        <Button
          asChild
          className='text-neutral shadow-button w-[6.5rem] rounded-xs bg-white px-6 py-1.5 text-sm/5 font-light hover:bg-white/1'
        >
          <Link to='/'>
            <ArrowLeft /> Back
          </Link>
        </Button>
      </div>
      <section className='mt-16 items-center gap-36 md:mt-20 lg:grid lg:grid-cols-2'>
        <div>
          <img
            src={svg}
            alt={alt}
            className='block w-full rounded-md object-cover'
          />
        </div>
        <div className='flex-1'>
          <h1 className='mt-11 text-3xl leading-none font-extrabold'>
            {common}
          </h1>
          <div className='mt-4 space-y-8 lg:mt-6 lg:flex lg:justify-between'>
            <div>
              <p className='text-sm/8 font-light lg:text-base'>
                <strong className='font-semibold'>Native Name:</strong>{' '}
                {newNativeName}
              </p>
              <p className='text-sm/8 font-light lg:text-base'>
                <strong className='font-semibold'>Population:</strong>{' '}
                {formattedPopulation}
              </p>
              <p className='text-sm/8 font-light lg:text-base'>
                <strong className='font-semibold'>Region:</strong> {region}
              </p>
              <p className='text-sm/8 font-light lg:text-base'>
                <strong className='font-semibold'>Sub Region:</strong>{' '}
                {subregion}
              </p>
              <p className='text-sm/8 font-light lg:text-base'>
                <strong className='font-semibold'>Capital:</strong> {capital}
              </p>
            </div>
            <div>
              <p className='text-sm/8 font-light lg:text-base'>
                <strong className='font-semibold'>Top Level Domain</strong>{' '}
                {tld[0]}
              </p>
              <p className='text-sm/8 font-light lg:text-base'>
                <strong className='font-semibold'>Currencies:</strong>{' '}
                {currencyList.join(', ')}
              </p>
              <p className='text-sm/8 font-light lg:text-base'>
                <strong className='font-semibold'>Languages:</strong>{' '}
                {languageList.join(', ')}
              </p>
            </div>
          </div>
          {borders.length > 0 && <BorderCountries borders={borders} />}
        </div>
      </section>
    </div>
  );
}

function BorderCountries({ borders }: { borders: string[] }) {
  return (
    <div className='mt-[2.125rem] lg:flex lg:items-center lg:gap-2.5'>
      <strong className='text-base/6 font-semibold'>Border Countries:</strong>
      <div className='mt-4 flex flex-1 flex-wrap gap-2.5 lg:mt-0'>
        {borders.map((border: string) => (
          <Button
            key={border}
            asChild
            className='text-neutral shadow-border-countries w-[6.5rem] rounded-xs bg-white px-6 py-1.5 text-xs/5 leading-4 font-light hover:bg-white/1'
          >
            <Link to={`/countries/${border}`}>{border}</Link>
          </Button>
        ))}
      </div>
    </div>
  );
}

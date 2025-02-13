import { Link } from 'react-router';

import { Country } from '@/lib/types';

import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export default function CountryCard({
  name,
  flags: { svg, alt },
  population,
  region,
  capital,
}: Country) {
  return (
    <Link to={`countries/${name.common}`} className='group'>
      <Card className='bg-card shadow-card w-[16.5rem] overflow-hidden rounded-sm border-none'>
        <CardHeader className='p-0'>
          <img
            src={svg}
            alt={alt}
            className='h-40 object-cover group-hover:opacity-75 group-focus:opacity-75'
          />
        </CardHeader>
        <CardContent className='p-6 pb-[2.875rem]'>
          <CardTitle className='text-lg/6.5 font-extrabold'>
            {name.common}
          </CardTitle>
          <div className='mt-4 space-y-2'>
            <p className='text-sm/4 font-light'>
              <strong className='font-semibold'>Population:</strong>{' '}
              {population.toLocaleString('en-US')}
            </p>
            <p className='text-sm/4 font-light'>
              <strong className='font-semibold'>Region:</strong> {region}
            </p>
            <p className='text-sm/4 font-light'>
              <strong className='font-semibold'>Capital:</strong> {capital[0]}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

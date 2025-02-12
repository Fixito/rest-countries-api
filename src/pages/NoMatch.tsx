import { Link } from 'react-router';

import { Button } from '@/components/ui/button';

export default function NoMatch() {
  return (
    <main className='grid min-h-dvh place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8'>
      <div className='text-center'>
        <p className='text-neutral text-base font-semibold'>404</p>
        <h1 className='mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl'>
          Page not found
        </h1>
        <p className='mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8'>
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <Button
            asChild
            className='text-neutral shadow-button rounded-xs bg-white px-6 py-1.5 text-sm/5 font-semibold hover:bg-slate-50'
          >
            <Link to='/'>Go back home</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

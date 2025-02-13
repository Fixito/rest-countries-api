import { Link } from 'react-router';

import { Button } from '@/components/ui/button';

export default function NoMatch() {
  return (
    <main className='bg-muted grid min-h-dvh place-items-center px-6 py-24 sm:py-32 lg:px-8'>
      <div className='text-center'>
        <p className='text-base font-semibold'>404</p>
        <h1 className='mt-4 text-2xl font-semibold tracking-tight text-balance sm:text-3xl'>
          Page not found
        </h1>
        <p className='text-muted-foreground/80 mt-6 text-lg font-medium text-pretty sm:text-2xl/8'>
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className='mt-10 flex items-center justify-center'>
          <Button
            asChild
            className='text-primary-foreground shadow-button bg-primary hover:bg-primary/20 dark:hover:bg-primary/90 cursor-pointer rounded-xs px-6 py-1.5 text-sm/5 leading-4 font-semibold'
          >
            <Link to='/'>Go back home</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

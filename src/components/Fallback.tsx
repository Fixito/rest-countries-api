import { Button } from './ui/button';

export default function Fallback({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) {
  return (
    <main className='grid min-h-dvh place-items-center'>
      <div role='alert' className='text-center'>
        <h1 className='text-2xl font-semibold sm:text-3xl'>
          Something went wrong
        </h1>
        <p className='text-destructive mt-6 text-lg font-medium sm:text-2xl/8'>
          {error.message}
        </p>
        <div className='mt-10 flex items-center justify-center'>
          <Button
            className='text-primary-foreground shadow-border-countries bg-primary hover:bg-primary/20 dark:hover:bg-primary/90 w-[6.5rem] cursor-pointer rounded-xs px-6 py-1.5 text-sm/5 leading-4 font-semibold'
            onClick={resetErrorBoundary}
          >
            Reset
          </Button>
        </div>
      </div>
    </main>
  );
}

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
        <h1 className='text-neutral text-2xl font-semibold sm:text-3xl'>
          Something went wrong
        </h1>
        <pre className='mt-6 text-lg font-medium text-red-500 sm:text-2xl/8'>
          {error.message}
        </pre>
        <div className='mt-10 flex items-center justify-center'>
          <Button
            className='cursor-pointer rounded-xs px-6 py-1.5 text-sm/5 font-semibold'
            onClick={resetErrorBoundary}
          >
            Reset
          </Button>
        </div>
      </div>
    </main>
  );
}

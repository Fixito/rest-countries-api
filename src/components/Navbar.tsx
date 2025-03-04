import ModeToggle from './ModeToggle';

export default function Navbar() {
  return (
    <nav className='bg-background shadow-nav relative'>
      <div className='mx-auto max-w-7xl px-4 xl:px-0'>
        <div className='flex h-20 items-center justify-between'>
          <h1 className='text-sm/5 font-extrabold md:text-2xl/8'>
            Where in the world?
          </h1>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

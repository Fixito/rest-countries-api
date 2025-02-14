import ModeToggle from './ModeToggle';

export default function Navbar() {
  return (
    <nav className='bg-background shadow-nav relative'>
      <div className='mx-auto max-w-7xl px-4 xl:px-0'>
        <div className='flex h-20 items-center justify-between'>
          <span className='text-sm/5 font-extrabold md:text-2xl/6'>
            Where in the world?
          </span>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

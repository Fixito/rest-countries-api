import { Outlet } from 'react-router';

import Navbar from '@/components/Navbar';

export default function ShellLayout() {
  return (
    <>
      <Navbar />
      <main className='bg-neutral h-[calc(100dvh_-_80px)]'>
        <Outlet />
      </main>
    </>
  );
}

import { Outlet } from 'react-router';

import Navbar from '../components/Navbar';

export default function ShellLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

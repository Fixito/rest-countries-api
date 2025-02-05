import { Route, Routes } from 'react-router';

import ShellLayout from './layouts/ShellLayout';
import { CountryDetails, Home, NoMatch } from './pages';

export default function App() {
  return (
    <Routes>
      <Route element={<ShellLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='countries/:coutryId' element={<CountryDetails />} />
      </Route>
      <Route path='*' element={<NoMatch />} />
    </Routes>
  );
}

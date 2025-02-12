import { Search } from 'lucide-react';

import { Input } from './ui/input';
import { Label } from './ui/label';

type SeachInputProps = {
  searchTerm: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchInput({
  searchTerm,
  onInputChange,
}: SeachInputProps) {
  return (
    <>
      <Label htmlFor='search' className='sr-only'>
        Search four a country
      </Label>
      <div className='shadow-input has-[input:focus-within]:outline-input flex w-full max-w-[30rem] items-center rounded-sm bg-white py-1.5 pl-8 outline-hidden -outline-offset-1 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 sm:py-2.5'>
        <Search className='text-subtle size-4 shrink-0 select-none sm:size-[1.125rem]' />
        <Input
          type='search'
          name='search'
          id='search'
          placeholder='Search for a country...'
          className='placeholder:text-muted min-w-0 grow border-none py-0 pl-6 text-xs placeholder:text-xs focus:outline-none focus-visible:ring-0 focus-visible:outline-none sm:text-sm/6 placeholder:sm:text-sm/6'
          value={searchTerm}
          onChange={onInputChange}
        />
      </div>
    </>
  );
}

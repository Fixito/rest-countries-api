import React from 'react';

import CategoryFilter from '@/components/CategoryFilter';
import SearchInput from '@/components/SearchInput';

interface SearchAndFilterProps {
  searchTerm: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  region: string;
  regions: string[];
  onSelect: (value: string) => void;
}

export default function SearchAndFilter({
  searchTerm,
  onInputChange,
  region,
  regions,
  onSelect,
}: SearchAndFilterProps) {
  return (
    <div className='flex flex-col gap-10 md:flex-row md:items-center md:justify-between'>
      <SearchInput searchTerm={searchTerm} onInputChange={onInputChange} />
      <CategoryFilter value={region} options={regions} onSelect={onSelect} />
    </div>
  );
}

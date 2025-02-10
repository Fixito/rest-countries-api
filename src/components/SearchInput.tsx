type SeachInputProps = {
  searchTerm: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchInput({
  searchTerm,
  onInputChange,
}: SeachInputProps) {
  return (
    <div>
      <label htmlFor='search' className='sr-only'>
        Search four a country
      </label>
      <input
        type='text'
        name='search'
        id='search'
        placeholder='Search for a country...'
        value={searchTerm}
        onChange={onInputChange}
      />
    </div>
  );
}

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
      <label htmlFor='search'>Search four a country</label>
      <input
        type='search'
        name='search'
        id='search'
        placeholder='Search for a country...'
        value={searchTerm}
        onChange={onInputChange}
      />
    </div>
  );
}

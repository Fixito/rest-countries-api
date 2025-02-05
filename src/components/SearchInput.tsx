export default function SearchInput() {
  return (
    <div>
      <label htmlFor='search'>Search four a country</label>
      <input
        type='search'
        name='search'
        id='search'
        placeholder='search for a country...'
      />
    </div>
  );
}

type CategoryFilterProps = {
  value: string;
  options: string[];
  onSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function CategoryFilter({
  value,
  options,
  onSelect,
}: CategoryFilterProps) {
  return (
    <select name='category' id='category' value={value} onChange={onSelect}>
      <option value=''>Filter by Region</option>
      {options.map((option) => {
        return (
          <option key={option} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
}

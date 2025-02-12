import { SelectGroup } from '@radix-ui/react-select';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

type CategoryFilterProps = {
  value: string;
  options: string[];
  onSelect: (value: string) => void;
};

export default function CategoryFilter({
  value,
  options,
  onSelect,
}: CategoryFilterProps) {
  return (
    <>
      <Select name='category' value={value} onValueChange={onSelect}>
        <SelectTrigger className='shadow-input text-neutral h-12 w-[12.5rem] rounded-sm border-none bg-white px-6 py-3.5 text-xs/5 sm:h-14 sm:py-[1.125rem] sm:text-sm/5'>
          <SelectValue placeholder='Filter By Region' />
        </SelectTrigger>
        <SelectContent className='shadow-input rounded-sm border-none'>
          <SelectGroup className='px-2 py-3.5'>
            {options.map((option) => {
              return (
                <SelectItem
                  key={option}
                  value={option}
                  className='text-neutral cursor-pointer text-xs/5 sm:text-sm/5'
                >
                  {option}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}

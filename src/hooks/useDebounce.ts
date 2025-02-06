import { useEffect, useState } from 'react';

interface UseDebounceProps<T> {
  value: T;
  timer?: number;
}

export function useDebounce<T>({ value, timer = 500 }: UseDebounceProps<T>): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedValue(value);
    }, timer);

    return () => {
      clearTimeout(id);
    };
  }, [value, timer]);

  return debouncedValue;
}

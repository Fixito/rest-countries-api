import { Moon, Sun } from 'lucide-react';

import { useTheme } from '@/contexts/ThemeProvider';

import { Button } from './ui/button';

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant='outline'
      className='cursor-pointer border-none text-xs leading-none font-semibold md:text-base'
      onClick={
        theme === 'light' ? () => setTheme('dark') : () => setTheme('light')
      }
    >
      {theme === 'light' ? (
        <Moon className='stroke-foreground h-[1rem] w-[1rem] scale-100 rotate-0 transition-all md:size-5 dark:scale-0 dark:rotate-90' />
      ) : (
        <Sun className='stroke-foreground h-[1rem] w-[1rem] scale-0 -rotate-90 transition-all md:size-5 dark:scale-100 dark:rotate-0' />
      )}
      <span>{theme === 'light' ? 'Dark' : 'Light'} Mode</span>
    </Button>
  );
}

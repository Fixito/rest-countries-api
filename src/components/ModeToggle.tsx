import { Moon, Sun } from 'lucide-react';

import { useTheme } from '@/contexts/ThemeProvider';

import { Button } from './ui/button';

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant='outline'
      className='cursor-pointer text-xs leading-none font-semibold md:text-sm'
      onClick={
        theme === 'light' ? () => setTheme('dark') : () => setTheme('light')
      }
    >
      {theme === 'light' ? (
        <Moon className='stroke-foreground h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-90' />
      ) : (
        <Sun className='stroke-foreground h-[1.2rem] w-[1.2rem] scale-0 -rotate-90 transition-all dark:scale-100 dark:rotate-0' />
      )}
      <span>{theme === 'light' ? 'Dark' : 'Light'} Mode</span>
    </Button>
  );
}

import { useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T): [T, (v: T) => void]  {
  const [value, setValue] = useState(() => {
    try {
      const data = window.localStorage.getItem(key);

      return data ? JSON.parse(data) : initialValue;
    } catch {
      localStorage.removeItem(key);
      return initialValue;
    }
  });

  const save = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, save];
}
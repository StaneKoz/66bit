import React, { createContext, useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '../router/router';
import { Themes } from '../types/Themes';


const StorageKey = 'color-theme';

type ThemeContextValue = {
  theme: Themes
  setTheme: (currentTheme: Themes) => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

const getTheme = (): Themes => {
  let theme = localStorage.getItem(StorageKey);
  if (!theme) {
    localStorage.setItem(StorageKey, Themes.light)
    theme = Themes.light;
  }

  return theme as Themes;
}

function App() {
  const [theme, setTheme] = useState<Themes>(getTheme());

  useEffect(() => {
    localStorage.setItem(StorageKey, theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{
      theme,
      setTheme
    }}>
      <RouterProvider router={router}/>
    </ThemeContext.Provider>
  );
}

export default App;

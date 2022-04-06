import { useLayoutEffect, useState } from 'react';

function useTheme(key = 'theme-dark-enable', initialValue = false) {
  const [theme, setTheme] = useState(
    // window.localStorage.getItem(key)
    //   ? JSON.parse(window.localStorage.getItem(key))
    //   : initialValue
    () => {
      if (typeof window === 'undefined') {
        return initialValue;
      }
      try {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        // If error also return initialValue
        console.log(error.message);
        return initialValue;
      }
    }
  );
  const handleTheme = () => {
    try {
      const newValueTheme = !theme;
      // set state
      setTheme(newValueTheme);
      // Save to local storage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(newValueTheme));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useLayoutEffect(
    () => {
      const className = 'dark';
      const element = document.documentElement;
      if (theme) {
        element.classList.add(className);
      } else {
        element.classList.remove(className);
      }
    },
    [theme] // Only call again if theme object reference changes
  );

  return [theme, handleTheme];
}

export default useTheme;

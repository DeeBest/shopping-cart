/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';

const DarkMode = ({ isDarkMode, setIsDarkMode, handleToggleDarkMode }) => {
  const darkModeInput = useRef(null);

  useEffect(() => {
    updateTheme();
    const inputElement = darkModeInput.current;
    inputElement.addEventListener('input', handleThemeChange);

    return () => {
      inputElement.removeEventListener('input', handleThemeChange);
    };
  }, [isDarkMode]);

  const updateTheme = () => {
    handleToggleDarkMode(isDarkMode);
    const root = document.querySelector('#root');

    if (root) {
      if (isDarkMode) {
        root.style.backgroundColor = '#1b1918';
        root.style.color = '#e7e5e4';
      } else {
        root.style.backgroundColor = '#e7e5e4';
        root.style.color = '#1b1918';
      }
    }
  };

  const handleThemeChange = () => {
    const isChecked = darkModeInput.current.checked;
    setIsDarkMode(isChecked);
    localStorage.setItem('themeMode', JSON.stringify(isChecked));
  };

  return (
    <section
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <input
        type="checkbox"
        name="dark-mode"
        id="dark-mode-input"
        ref={darkModeInput}
        defaultChecked={isDarkMode}
      />
      <label htmlFor="dark-mode-input" id="dark-mode-label">
        <div id="circle"></div>
      </label>
    </section>
  );
};

export default DarkMode;

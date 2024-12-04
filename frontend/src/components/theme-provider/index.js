import { jsx as _jsx } from "react/jsx-runtime";
import React, { useState } from 'react';
export const ThemeContext = React.createContext({
    theme: 'dark',
    toggleTheme: () => null
});
export const ThemeProvider = ({ children }) => {
    const storedTheme = localStorage.getItem('theme');
    const currentTheme = storedTheme ? storedTheme : 'dark';
    const [theme, setTheme] = useState(currentTheme);
    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            return newTheme;
        });
    };
    return (_jsx(ThemeContext.Provider, { value: { theme, toggleTheme }, children: _jsx("main", { className: `${theme} text-foreground bg-background`, children: children }) }));
};

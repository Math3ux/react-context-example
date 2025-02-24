import React from 'react';

type Theme = 'light' | 'dark';

export const ThemeContext = React.createContext<Theme>('light');
export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

export default ThemeContext;

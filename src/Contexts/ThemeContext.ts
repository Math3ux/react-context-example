import React from 'react';

export const ThemeContext = React.createContext('light');
export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

export default ThemeContext;

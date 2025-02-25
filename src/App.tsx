import { MainPage } from "./Pages/MainPage"
import { ThemeProvider } from "./Contexts/ThemeContext"
import { useState } from "react"
import type { Theme } from "./Contexts/ThemeContext"

function App() {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <MainPage />
    </ThemeProvider>
  )
}

export default App;
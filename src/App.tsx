import { MainPage } from "./Pages/MainPage"
import {  ThemeProvider, ThemeContext } from "./Contexts/ThemeContext"

function App() {

  const themeValue: React.ContextType<typeof ThemeContext> = "light";

  return (
    <ThemeProvider value={themeValue}>
      <MainPage />
    </ThemeProvider>
  )
}

export default App

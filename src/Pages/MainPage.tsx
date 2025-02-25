import { useContext } from "react"
import { ThemeContext } from "../Contexts/ThemeContext"

export const MainPage = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <div style={{ 
            background: theme === 'light' ? 'white' : 'black', 
            color: theme === 'light' ? 'black' : 'white' 
        }}>
            <h3>Tema: {theme}</h3>
            <button onClick={toggleTheme}>Alterar</button>
        </div>
    )
}
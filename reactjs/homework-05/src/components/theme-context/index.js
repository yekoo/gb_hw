import { useCallback, useState , createContext} from 'react';
import { ThemeProvider } from "@material-ui/core"

export const ThemeContext = createContext();

export const DefaultThemeProvider = ({children, themes, initialTheme})=>{
    const [theme, setTheme] = useState({
        theme: themes[initialTheme],
        name: "dark"
    })
    const changeTheme = useCallback((name)=>{

        if(themes[name]){
            setTheme({ name, theme:themes[name]})
        }
        console.log(themes);
    }, [themes])
    return (
            <ThemeContext.Provider value={{ theme, changeTheme }}>
        <ThemeProvider theme={theme.theme}>
                {children}
        </ThemeProvider>
            </ThemeContext.Provider>
    )
}
import { dark_theme, light_theme } from "@/styles/themes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

const theme_context = createContext({theme: dark_theme, toggle_theme: (is_dark: boolean) => {}});

const use_theme = () => useContext(theme_context);


const ThemeProvider = ({children}: any) => {
    const [theme, set_theme] = useState(dark_theme);

    const toggle_theme = (is_dark: boolean) => {
        set_theme((is_dark) ? light_theme : dark_theme); 

        console.log("Toggled theme to the " + ((is_dark) ? "dark" : "light" )+ " theme.");
    }

    const setup_theme = async () => {
        const accessed: string | null = await AsyncStorage.getItem("theme");

        if (accessed != "null"){
            console.log("On setup, toggled theme to the " + accessed + " theme.");
            
            toggle_theme(accessed == "dark");

            return;
        }

        console.log("Non-existent theme, toggled theme to the light theme.");

        AsyncStorage.setItem("theme", "light");

        toggle_theme(false);
    }

    useEffect(() => {
        setup_theme();
    }, [])

    return (
        <theme_context.Provider value={{theme, toggle_theme}}>
            {children}
        </theme_context.Provider>
    )
}

export {ThemeProvider, use_theme}
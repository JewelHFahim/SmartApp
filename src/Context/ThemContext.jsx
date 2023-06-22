import { createContext, useState } from "react";

export const ThemeCont = createContext();

const ThemContext = ({ children }) => {

    const [theme, setTheme] = useState(false);

    const handleThemeChange = () => {
        setTheme(!theme);
    };

    const authInfo = { theme, handleThemeChange };

    return (
        <div>
            <ThemeCont.Provider value={authInfo}>{children}</ThemeCont.Provider>
        </div>
    );
};

export default ThemContext
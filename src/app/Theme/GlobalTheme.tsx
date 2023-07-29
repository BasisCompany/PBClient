import { FC, ReactNode, useMemo } from "react";
import {
    CssBaseline,
    ThemeProvider,
    createTheme,
    useMediaQuery,
} from "@mui/material";
import { useLocalStorageState } from "../../storage/hooks/useLocalStorageState";
import { ThemeModeContext } from "./ThemeContext/ThemeModeContext";
import { EThemeMode } from "./enums/themeMode.enum";
import { getGlobalStyles } from "./globalStyles";

interface IGlobalThemeProps {
    children: ReactNode;
}

export const GlobalTheme: FC<IGlobalThemeProps> = ({ children }) => {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const [mode, setMode] = useLocalStorageState<EThemeMode>(
        prefersDarkMode ? EThemeMode.dark : EThemeMode.light,
        "theme"
    );

    const setupThemeMode = useMemo(
        () => ({
            toggleThemeMode: () => {
                setMode(
                    mode === EThemeMode.light
                        ? EThemeMode.dark
                        : EThemeMode.light
                );
            },
            mode: mode,
        }),
        [mode, setMode]
    );

    const theme = useMemo(() => createTheme(getGlobalStyles(mode)), [mode]);

    return (
        <ThemeModeContext.Provider value={setupThemeMode}>
            <CssBaseline />
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeModeContext.Provider>
    );
};

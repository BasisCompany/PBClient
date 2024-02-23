import { FC, ReactNode, useMemo } from "react";
import {
    CssBaseline,
    ThemeProvider as MuiThemeProvider,
    createTheme,
    useMediaQuery,
} from "@mui/material";
import { useLocalStorageState } from "../../../shared/lib/storage/hooks/useLocalStorageState";
import { ThemeModeContext } from "./ThemeContext/ThemeModeContext";
import { EThemeMode } from "./enums/themeMode.enum";
import { getGlobalStyles } from "./globalStyles";

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const [mode, setMode] = useLocalStorageState<EThemeMode>(
        prefersDarkMode ? EThemeMode.dark : EThemeMode.light,
        "theme"
    );

    const setupThemeMode = useMemo(
        () => ({
            toggleThemeMode: () => {
                setMode((prev) =>
                    prev === EThemeMode.light
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
            <MuiThemeProvider theme={theme}>
                <CssBaseline enableColorScheme />
                {children}
            </MuiThemeProvider>
        </ThemeModeContext.Provider>
    );
};

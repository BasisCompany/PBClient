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
        EThemeMode.system,
        "theme"
    );

    const setupThemeMode = useMemo(
        () => ({
            toggleThemeMode: (mode: EThemeMode) => setMode(mode),
            mode: mode,
        }),
        [mode, setMode]
    );

    const theme = useMemo(
        () =>
            createTheme(
                getGlobalStyles(
                    mode === EThemeMode.system
                        ? prefersDarkMode
                            ? EThemeMode.dark
                            : EThemeMode.light
                        : mode
                )
            ),
        [mode, prefersDarkMode]
    );

    return (
        <ThemeModeContext.Provider value={setupThemeMode}>
            <CssBaseline />
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeModeContext.Provider>
    );
};

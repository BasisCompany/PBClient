import { Dispatch, createContext } from "react";
import { EThemeMode } from "../enums/themeMode.enum";

interface IThemeModeContext {
    mode: EThemeMode;
    toggleThemeMode: Dispatch<EThemeMode>;
}

export const ThemeModeContext = createContext<IThemeModeContext | null>(null);

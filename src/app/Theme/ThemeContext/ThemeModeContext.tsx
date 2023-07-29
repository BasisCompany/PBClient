import { DispatchWithoutAction, createContext } from "react";
import { EThemeMode } from "../enums/themeMode.enum";

export interface IThemeModeContext {
    mode: EThemeMode;
    toggleThemeMode: DispatchWithoutAction;
}

export const ThemeModeContext = createContext<IThemeModeContext | null>(null);

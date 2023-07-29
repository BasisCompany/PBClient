import { useContext } from "react";
import { IThemeModeContext, ThemeModeContext } from "./ThemeModeContext";

export const useThemeMode = () => {
    return useContext(ThemeModeContext) as IThemeModeContext;
};

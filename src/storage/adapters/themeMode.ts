import { EThemeMode } from "../../app/Theme/enums/themeMode.enum";
import { setItem, getItem, removeItem } from "../storage";

const ThemeModeStorageName = "theme";

const setThemeMode = (mode: EThemeMode): void => {
    setItem(ThemeModeStorageName, mode);
};

const getThemeMode = (): EThemeMode | null => {
    const themeMode = getItem(ThemeModeStorageName);
    return themeMode as EThemeMode;
};

const removeThemeMode = (): void => {
    removeItem(ThemeModeStorageName);
};

export { setThemeMode, getThemeMode, removeThemeMode };

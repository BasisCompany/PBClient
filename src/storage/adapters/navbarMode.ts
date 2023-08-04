import { setItem, getItem, removeItem } from "../storage";

const NavbarModeStorageName = "navbar";

const setNavbarMode = (mode: boolean): void => {
    setItem(NavbarModeStorageName, JSON.stringify(mode));
};

const getNavbarMode = (): boolean | null => {
    const navbarMode = getItem(NavbarModeStorageName);
    return navbarMode ? (JSON.parse(navbarMode) as boolean) : null;
};

const removeNavbarMode = (): void => {
    removeItem(NavbarModeStorageName);
};

export { setNavbarMode, getNavbarMode, removeNavbarMode };

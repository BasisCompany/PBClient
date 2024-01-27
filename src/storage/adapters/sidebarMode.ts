import { setItem, getItem, removeItem } from "../storage";

const NavbarModeStorageName = "navbar";

const setSidebarMode = (mode: boolean): void => {
    setItem(NavbarModeStorageName, JSON.stringify(mode));
};

const getSidebarMode = (): boolean | null => {
    const navbarMode = getItem(NavbarModeStorageName);
    return navbarMode ? (JSON.parse(navbarMode) as boolean) : null;
};

const removeSidebarMode = (): void => {
    removeItem(NavbarModeStorageName);
};

export { setSidebarMode, getSidebarMode, removeSidebarMode };

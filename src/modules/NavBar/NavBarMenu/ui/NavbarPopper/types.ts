export interface NavBarPopperState {
    current: NavBarPopperType | null;
    anchor: HTMLElement | null;
}

export type NavBarPopperType =
    | "account"
    | "notifications"
    | "basket"
    | "favorites";

import { useCallback, useState } from "react";

export enum NavBarPoppers {
    Account,
    Notifications,
    Basket,
}

interface NavBarPopperState {
    current: NavBarPoppers | null;
    anchor: HTMLElement | null;
}

export const useNavbarPoppers = () => {
    const [popper, setPopper] = useState<NavBarPopperState>({
        current: null,
        anchor: null,
    });

    const closePopper = useCallback(() => {
        setPopper({
            current: null,
            anchor: null,
        });
    }, []);

    const openPopper = useCallback(
        (popper: NavBarPoppers, payload: HTMLElement | null) => {
            setPopper({
                current: popper,
                anchor: payload,
            });
        },
        []
    );

    const isPopperOpen = useCallback(
        (navBarPopper: NavBarPoppers) => navBarPopper === popper.current,
        [popper]
    );

    return { popper, closePopper, openPopper, isPopperOpen };
};

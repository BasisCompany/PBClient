import {
    FC,
    MouseEvent,
    ReactElement,
    createContext,
    useCallback,
    useMemo,
    useState,
} from "react";
import { ClickAwayListener } from "@mui/material";
import { NavBarPopperState, NavBarPopperType } from "./types";

interface NavBarPopperMenuProps {
    children: ReactElement;
}

interface PopperContext {
    popper: NavBarPopperState;
    closePopper: () => void;
    togglePopper: (
        newPopper: NavBarPopperType
    ) => (event: MouseEvent<HTMLElement>) => void;
}

export const PopperContext = createContext<PopperContext | null>(null);

export const NavBarPopperProvider: FC<NavBarPopperMenuProps> = ({
    children,
}) => {
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

    const togglePopper = useCallback(
        (newPopper: NavBarPopperType) => (event: MouseEvent<HTMLElement>) => {
            setPopper((prevPopper) => ({
                current: prevPopper.current === newPopper ? null : newPopper,
                anchor: event.currentTarget,
            }));
        },
        []
    );

    const popperValue = useMemo(
        () => ({
            popper,
            closePopper,
            togglePopper,
        }),
        [closePopper, togglePopper, popper]
    );

    return (
        <PopperContext.Provider value={popperValue}>
            <ClickAwayListener
                onClickAway={closePopper}
                mouseEvent={popper !== null ? "onClick" : false}
            >
                {children}
            </ClickAwayListener>
        </PopperContext.Provider>
    );
};

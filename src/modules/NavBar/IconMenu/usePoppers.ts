import { useCallback, useReducer } from "react";

export enum NavPoppers {
    account,
    notifications,
    basket,
}

interface PopperReducer {
    currPopper: NavPoppers | null;
    anchorPopper: HTMLElement | null;
}

const popperInitialValue: PopperReducer = {
    currPopper: null,
    anchorPopper: null,
};

function popperReducer(
    state: PopperReducer,
    action: { type: string; payload: HTMLElement | null }
) {
    switch (action.type) {
        case "OPEN_ACCOUNT": {
            const newState = { ...state };
            newState.anchorPopper = action.payload;
            newState.currPopper = NavPoppers.account;
            return newState;
        }
        case "OPEN_NOTIFICATIONS": {
            const newState = { ...state };
            newState.anchorPopper = action.payload;
            newState.currPopper = NavPoppers.notifications;
            return newState;
        }
        case "OPEN_BASKET": {
            const newState = { ...state };
            newState.anchorPopper = action.payload;
            newState.currPopper = NavPoppers.basket;
            return newState;
        }
        case "CLOSE": {
            const newState = { ...state };
            newState.anchorPopper = null;
            newState.currPopper = null;
            return newState;
        }
        default: {
            return state;
        }
    }
}

export const closePopper = () => ({
    type: "CLOSE",
    payload: null,
});
export const openNotifications = (target: HTMLElement | null) => ({
    type: "OPEN_NOTIFICATIONS",
    payload: target,
});
export const openAccount = (target: HTMLElement | null) => ({
    type: "OPEN_ACCOUNT",
    payload: target,
});

export const usePoppers = () => {
    const [poppers, dispatchPopper] = useReducer(
        popperReducer,
        popperInitialValue
    );

    const isPopperOpen = useCallback(
        (popper: NavPoppers) => {
            return popper === poppers.currPopper;
        },
        [poppers]
    );

    return { poppers, dispatchPopper, isPopperOpen };
};

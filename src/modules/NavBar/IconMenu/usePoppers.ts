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
        case "TOGGLE_ACCOUNT": {
            if (state.currPopper === NavPoppers.account) {
                return disablePopper(state);
            }
            return {
                ...state,
                currPopper: NavPoppers.account,
                anchorPopper: action.payload,
            };
        }
        case "TOGGLE_NOTIFICATIONS": {
            if (state.currPopper === NavPoppers.notifications) {
                return disablePopper(state);
            }
            return {
                ...state,
                currPopper: NavPoppers.notifications,
                anchorPopper: action.payload,
            };
        }
        case "TOGGLE_BASKET": {
            if (state.currPopper === NavPoppers.basket) {
                return disablePopper(state);
            }
            return {
                ...state,
                currPopper: NavPoppers.basket,
                anchorPopper: action.payload,
            };
        }
        case "CLOSE": {
            return disablePopper(state);
        }
        default: {
            return state;
        }
    }

    function disablePopper(state: PopperReducer) {
        return {
            ...state,
            anchorPopper: null,
            currPopper: null,
        };
    }
}

export const closePopper = () => ({
    type: "CLOSE",
    payload: null,
});
export const openNotifications = (target: HTMLElement | null) => ({
    type: "TOGGLE_NOTIFICATIONS",
    payload: target,
});
export const openAccount = (target: HTMLElement | null) => ({
    type: "TOGGLE_ACCOUNT",
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

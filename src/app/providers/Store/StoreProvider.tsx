import { FC, ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../../appStore";

interface StoreProviderProps {
    children: ReactNode;
}

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
    return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

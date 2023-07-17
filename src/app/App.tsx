import { FC } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "../redux/store";
import { AppRoutes } from "./Routes/AppRoutes";
import { GlobalTheme } from "./Theme/GlobalTheme";

export const App: FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <GlobalTheme>
                    <AppRoutes />
                </GlobalTheme>
            </BrowserRouter>
        </Provider>
    );
};

import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./Routes/AppRoutes";
import { GlobalTheme } from "./Theme/GlobalTheme";

export const App: FC = () => {
    return (
        <BrowserRouter>
            <GlobalTheme>
                <AppRoutes />
            </GlobalTheme>
        </BrowserRouter>
    );
};

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "../redux/store";
import { AppRoutes } from "./Routes/AppRoutes";
import { GlobalTheme } from "./Theme/GlobalTheme";
import { AppSnackbar } from "../UI/Snackbar/AppSnackbar";

export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <GlobalTheme>
                    <AppSnackbar />
                    <AppRoutes />
                </GlobalTheme>
            </BrowserRouter>
        </Provider>
    );
};

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import { store } from "../redux/store";
import { AppRoutes } from "./Routes/AppRoutes";
import { GlobalTheme } from "./Theme/GlobalTheme";
import { AppSnackbar } from "../UI/Snackbar/AppSnackbar";
import { FallbackError } from "./Error/FallbackError";

export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <GlobalTheme>
                    <ErrorBoundary FallbackComponent={FallbackError}>
                        <AppSnackbar />
                        <AppRoutes />
                    </ErrorBoundary>
                </GlobalTheme>
            </BrowserRouter>
        </Provider>
    );
};

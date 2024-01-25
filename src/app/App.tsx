import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import { store } from "../redux/store";
import { FallbackError } from "../modules/Error/FallbackError";
import { ToastProvider } from "../modules/Toast";
import { AppRoutes } from "./Routes/AppRoutes";
import { GlobalTheme } from "./Theme/GlobalTheme";

export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <GlobalTheme>
                    <ErrorBoundary FallbackComponent={FallbackError}>
                        <ToastProvider />
                        <AppRoutes />
                    </ErrorBoundary>
                </GlobalTheme>
            </BrowserRouter>
        </Provider>
    );
};

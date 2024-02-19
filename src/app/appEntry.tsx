import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "./providers/Store";
import { ThemeProvider } from "./providers/Theme";
import { ErrorProvider } from "./providers/Error";
import { ToastProvider } from "./providers/Toast";
import { AppRouter } from "./AppRouter";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <StoreProvider>
            <BrowserRouter>
                <ThemeProvider>
                    <ErrorProvider>
                        <ToastProvider>
                            <AppRouter />
                        </ToastProvider>
                    </ErrorProvider>
                </ThemeProvider>
            </BrowserRouter>
        </StoreProvider>
    </StrictMode>
);

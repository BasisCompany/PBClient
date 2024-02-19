import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { StoreProvider } from "./providers/Store";
import { ThemeProvider } from "./providers/Theme";
import { ErrorProvider } from "./providers/Error";
import { ToastProvider } from "./providers/Toast";
import { AppRouter } from "./AppRouter";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <StoreProvider>
            <ThemeProvider>
                <ErrorProvider>
                    <ToastProvider>
                        <AppRouter />
                    </ToastProvider>
                </ErrorProvider>
            </ThemeProvider>
        </StoreProvider>
    </StrictMode>
);

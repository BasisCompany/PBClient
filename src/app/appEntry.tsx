import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { StoreProvider } from "./providers/Store";
import { ThemeProvider } from "./providers/Theme";
import { ErrorProvider } from "./providers/Error";
import { ToastProvider } from "./providers/Toast";
import { appRouter } from "./appRouter";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <StoreProvider>
            <ThemeProvider>
                <ErrorProvider>
                    <ToastProvider>
                        <RouterProvider router={appRouter} />
                    </ToastProvider>
                </ErrorProvider>
            </ThemeProvider>
        </StoreProvider>
    </StrictMode>
);

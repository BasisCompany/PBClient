import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/App";
import { GlobalTheme } from "./app/Theme/GlobalTheme";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <GlobalTheme>
            <App />
        </GlobalTheme>
    </React.StrictMode>
);

import { configureStore } from "@reduxjs/toolkit";

import navbarReducer from "../app/NavBar/store/navbarSlice";
import authReducer from "../pages/AuthPage/store/authSlice";
import { authApi, initAuthApi } from "../pages/AuthPage/store/authApi";
import snackbarReducer from "../UI/Snackbar/snackbarSlice";
import {
    navbarInitState,
    navbarlistenerMiddleware,
} from "./../app/NavBar/store/navbarMiddleware";

export const store = configureStore({
    preloadedState: {
        navbar: navbarInitState(),
    },
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [initAuthApi.reducerPath]: initAuthApi.reducer,
        auth: authReducer,
        navbar: navbarReducer,
        snackbar: snackbarReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            authApi.middleware,
            initAuthApi.middleware,
            navbarlistenerMiddleware.middleware,
        ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";

import navbarReducer from "../app/store/navbarSlice";
import authReducer from "../pages/AuthPage/store/authSlice";
import { authApi } from "../pages/AuthPage/store/authApi";

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        navbar: navbarReducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([authApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

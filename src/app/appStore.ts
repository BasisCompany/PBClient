import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { sidebarSlice } from "../entities/sidebar/model/sidebarSlice";

import { authApi, authSlice } from "@/entities/auth";
import { baseApi } from "@/shared/api";

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [baseApi.reducerPath]: baseApi.reducer,
        auth: authSlice.reducer,
        sidebar: sidebarSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([authApi.middleware, baseApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

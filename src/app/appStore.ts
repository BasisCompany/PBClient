import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import authReducer from "../pages/AuthPage/store/authSlice";
import { authApi, initAuthApi } from "../pages/AuthPage/store/authApi";
import { profileApi } from "../pages/ProfilePage/store/profileApi";
import { sidebarSlice } from "../modules/SideBar/store/sidebarSlice";
import {
    sidebarInitState,
    sidebarlistenerMiddleware,
} from "../modules/SideBar/store/sidebarMiddleware";
import { baseApi } from "@/shared/api";

export const store = configureStore({
    preloadedState: {
        sidebar: sidebarInitState(),
    },
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [initAuthApi.reducerPath]: initAuthApi.reducer,
        [baseApi.reducerPath]: baseApi.reducer,
        [profileApi.reducerPath]: profileApi.reducer,
        auth: authReducer,
        sidebar: sidebarSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            authApi.middleware,
            initAuthApi.middleware,
            baseApi.middleware,
            profileApi.middleware,
            sidebarlistenerMiddleware.middleware,
        ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "../api/authApi";
import { RootState } from "@/app/appStore";
import { userApi, UserDetails } from "@/entities/user";

export interface AuthState {
    isUserAuthenticated: boolean;
    token: string | null;
    deviceId: number | null;
    user: UserDetails | null;
}

const initialState: AuthState = {
    isUserAuthenticated: false,
    deviceId: null,
    token: null,
    user: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUserAuthenticated: (state, action: PayloadAction<boolean>) => {
            state.isUserAuthenticated = action.payload;
        },
        toggleIsUserAuthenticated: (state) => {
            state.isUserAuthenticated = !state.isUserAuthenticated;
        },
        setUserToken: (
            state,
            action: PayloadAction<{ token: string; deviceId: number }>
        ) => {
            state.token = action.payload.token;
            state.deviceId = action.payload.deviceId;
        },
        setInitialState: () => initialState,
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            authApi.endpoints.login.matchFulfilled,
            (state, { payload }) => {
                state.isUserAuthenticated = true;
                const { token, deviceId, ...user } = payload;
                state.token = token;
                state.deviceId = deviceId;
                state.user = user;
            }
        );
        builder.addMatcher(
            userApi.endpoints.user.matchFulfilled,
            (state, { payload }) => {
                state.isUserAuthenticated = true;
                state.user = payload;
            }
        );
    },
});

export const {
    setUserAuthenticated,
    setInitialState,
    toggleIsUserAuthenticated,
    setUserToken,
} = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;
export const selectUserId = (state: RootState) => state.auth.user?.id;

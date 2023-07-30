import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../redux/store";
import { authApi } from "./authApi";

export interface UserDetails {
    id: number;
    email: string;
    username: string;
}

export interface AuthState {
    isUserAuthenticated: boolean;
    token: string | null;
    user: UserDetails | null;
}

const initialState: AuthState = {
    isUserAuthenticated: false,
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
        setUserToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        setInitialState: () => initialState,
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            authApi.endpoints.login.matchFulfilled,
            (state, { payload }) => {
                state.isUserAuthenticated = true;
                state.token = payload.token;
                state.user = {
                    id: payload.id,
                    email: payload.email,
                    username: payload.username,
                } as UserDetails;
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

export default authSlice.reducer;

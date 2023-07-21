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
        setUserAuth: (state, action: PayloadAction<AuthState>) => {
            state.isUserAuthenticated = action.payload.isUserAuthenticated;
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        setUserAuthenticated: (state, action: PayloadAction<AuthState>) => {
            state.isUserAuthenticated = action.payload.isUserAuthenticated;
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

export const { setUserAuth, setUserAuthenticated, setInitialState } =
    authSlice.actions;

export const selectAuthIsUserAuthenticated = (state: RootState) =>
    state.auth.isUserAuthenticated;
export const selectAuthUserDetails = (state: RootState) => state.auth.user;
export const selectAuthToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;

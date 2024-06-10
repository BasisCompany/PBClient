import { lazy } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import { AppLayout } from "./layouts/AppLayout";
import { RequireLocalProfile } from "./layouts/RequireLocalProfile";
import { RequireNotAuth } from "./layouts/RequireNotAuth";

import {
    ProfilePage,
    ProfilePrompts,
    ProfileComments,
    ProfileNotifications,
    ProfileSettings,
} from "@/pages/ProfilePage";

import {
    AuthPage,
    ExpiredPage,
    VerifiedPage,
    ResetPasswordPage,
    ForgotPasswordPage,
} from "@/pages/AuthPage";

import { MarketplacePage } from "@/pages/MarketplacePage";
import { ShoppingCartPage } from "@/pages/ShoppingCartPage";
import { PromptPage } from "@/pages/PromptPage";
import { FavoritesPage } from "@/pages/FavoritesPage";

const TestPage = lazy(() => import("@/trash/TestPage"));

const SupportPage = lazy(() => import("@/pages/SupportPage"));
const SupportContentMainHelp = lazy(
    () =>
        import(
            "@/pages/SupportPage/SupportContent/SupportContentMain/SupportContentMainHelp"
        )
);
const SupportContentMainQuestions = lazy(
    () =>
        import(
            "@/pages/SupportPage/SupportContent/SupportContentMain/SupportContentMainQuestions"
        )
);

export const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<TestPage />} />
                {profileRoutes}
                <Route path="marketplace" element={<MarketplacePage />} />
                <Route path="prompt/:url" element={<PromptPage />} />
                {supportRoutes}

                <Route path="favorites" element={<FavoritesPage />} />
                <Route path="cart" element={<ShoppingCartPage />} />

                {/* AUTH */}
                <Route element={<RequireNotAuth />}>
                    <Route path="login" element={<AuthPage />} />
                    <Route path="expired" element={<ExpiredPage />} />
                    <Route path="verified" element={<VerifiedPage />} />
                    <Route
                        path="reset-password/:resetToken"
                        element={<ResetPasswordPage />}
                    />
                    <Route
                        path="forgot-password"
                        element={<ForgotPasswordPage />}
                    />
                </Route>
            </Route>
            <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
    </BrowserRouter>
);

const profileRoutes = (
    <Route path="user/:id/" element={<ProfilePage />}>
        <Route index element={<ProfilePrompts />} />
        <Route path="comments" element={<ProfileComments />} />
        <Route element={<RequireLocalProfile />}>
            <Route path="notifications" element={<ProfileNotifications />} />
            <Route path="payments" element={<h1>Платежи </h1>} />
            <Route path="settings/:block?" element={<ProfileSettings />} />
        </Route>
    </Route>
);

const supportRoutes = (
    <Route path="support/" element={<SupportPage />}>
        <Route index element={<SupportContentMainHelp />} />
        <Route
            path="questions/:category"
            element={<SupportContentMainQuestions />}
        />
        <Route path="feedback" element={<h1>Задать вопрос </h1>} />
    </Route>
);

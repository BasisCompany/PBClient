import { Route, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { AuthPage } from "../pages/AuthPage/Auth.page";
import { ExpiredPage } from "../pages/AuthPage/Expired.page";
import { ForgotPasswordPage } from "../pages/AuthPage/ForgotPassword.page";
import { ResetPasswordPage } from "../pages/AuthPage/ResetPassword.page";
import { VerifiedPage } from "../pages/AuthPage/Verified.page";
import { ProfilePage } from "../pages/ProfilePage/Profile.page";
import { ProfileComments } from "../pages/ProfilePage/ProfileTabs/ProfileComments/ProfileComments";
import { ProfileNotifications } from "../pages/ProfilePage/ProfileTabs/ProfileNotifications/ProfileNotifications";
import { ProfilePrompts } from "../pages/ProfilePage/ProfileTabs/ProfilePrompts/ProfilePrompts";
import { ProfileSettings } from "../pages/ProfilePage/ProfileTabs/ProfileSettings/ProfileSettings";
import { SupportPage } from "../pages/SupportPage/Support.page";
import { SupportContentMainHelp } from "../pages/SupportPage/SupportContent/SupportContentMain/SupportContentMainHelp/SupportContentMainHelp";
import { SupportContentMainQuestions } from "../pages/SupportPage/SupportContent/SupportContentMain/SupportContentMainQuestions/SupportContentMainQuestions";
import { TestPage } from "../trash/TestPage";
import { AppLayout } from "./layouts/AppLayout";
import { AuthLayout } from "./layouts/AuthLayout";
import { RequireLocal } from "./layouts/RequireLocalProfile";

export const appRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<TestPage />} />
                <Route path="user/:id/" element={<ProfilePage />}>
                    <Route index element={<ProfilePrompts />} />
                    <Route path="comments" element={<ProfileComments />} />
                    <Route
                        path="notifications"
                        element={
                            <RequireLocal>
                                <ProfileNotifications />
                            </RequireLocal>
                        }
                    />
                    <Route
                        path="settings"
                        element={
                            <RequireLocal>
                                <ProfileSettings />
                            </RequireLocal>
                        }
                    />
                    <Route
                        path="payments"
                        element={
                            <RequireLocal>
                                <h1>Платежи </h1>
                            </RequireLocal>
                        }
                    />
                </Route>
                <Route path="marketplace" element={<AuthPage />} />
                <Route path="support/" element={<SupportPage />}>
                    <Route index element={<SupportContentMainHelp />} />
                    <Route
                        path="questions/:category"
                        element={<SupportContentMainQuestions />}
                    />
                    <Route path="feedback" element={<h1>Задать вопрос </h1>} />
                </Route>
                <Route element={<AuthLayout />}>
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
        </Route>
    )
);

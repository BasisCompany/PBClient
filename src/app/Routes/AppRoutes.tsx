import { Route, Routes } from "react-router";
import { AppLayout } from "../Layouts/AppLayout";
import { AuthLayout } from "../Layouts/AuthLayout";
import { ProfilePage } from "../../pages/ProfilePage/Profile.page";
import { SupportPage } from "../../pages/SupportPage/Support.page";
import { AuthPage } from "../../pages/AuthPage/Auth.page";
import { ExpiredPage } from "../../pages/AuthPage/Expired.page";
import { VerifiedPage } from "../../pages/AuthPage/Verified.page";
import { ForgotPasswordPage } from "../../pages/AuthPage/ForgotPassword.page";
import { ResetPasswordPage } from "../../pages/AuthPage/ResetPassword.page";
import { ContentMainPrompts } from "../../pages/ProfilePage/ProfileContent/ContentMain/ProfilePrompts/ContentMainPrompts";
import { TestPage } from "../../trash/TestPage";
import { ContentMainNotifications } from "../../pages/ProfilePage/ProfileContent/ContentMain/ProfileNotifications/ProfileNotifications";
import { SupportContentMainHelp } from "../../pages/SupportPage/SupportContent/SupportContentMain/SupportContentMainHelp/SupportContentMainHelp";
import { SupportContentMainQuestions } from "../../pages/SupportPage/SupportContent/SupportContentMain/SupportContentMainQuestions/SupportContentMainQuestions";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<TestPage />} />
                <Route path="profile/*" element={<ProfilePage />}>
                    <Route index element={<ContentMainPrompts />} />
                    <Route path="comments" element={<h1>Комментарии </h1>} />
                    <Route
                        path="notifications"
                        element={<ContentMainNotifications />}
                    />
                    <Route path="settings" element={<h1>Настройки </h1>} />
                    <Route path="payments" element={<h1>Платежи </h1>} />
                </Route>
                <Route path="marketplace" element={<AuthPage />} />
                <Route path="support/*" element={<SupportPage />}>
                    <Route index element={<SupportContentMainHelp />} />
                    <Route
                        path="questions/*"
                        element={<SupportContentMainQuestions />}
                    >
                        <Route index element={<h1>Общие вопросы</h1>} />
                        <Route
                            path="security"
                            element={<h1>Безопасность</h1>}
                        />
                        <Route
                            path="monetization"
                            element={<h1>Монетизация</h1>}
                        />
                        <Route
                            path="profile"
                            element={<h1>Настройка профиля</h1>}
                        />
                        <Route
                            path="payments"
                            element={<h1>Платежи и переводы</h1>}
                        />
                        <Route
                            path="comments"
                            element={<h1>Комментарии </h1>}
                        />
                    </Route>
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
        </Routes>
    );
};

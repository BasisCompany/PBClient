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
import { TestPage } from "../../trash/TestPage";
import { SupportContentMainHelp } from "../../pages/SupportPage/SupportContent/SupportContentMain/SupportContentMainHelp/SupportContentMainHelp";
import { SupportContentMainQuestions } from "../../pages/SupportPage/SupportContent/SupportContentMain/SupportContentMainQuestions/SupportContentMainQuestions";
import { ProfileNotifications } from "../../pages/ProfilePage/ProfileTabs/ProfileNotifications/ProfileNotifications";
import { ProfileComments } from "../../pages/ProfilePage/ProfileTabs/ProfileComments/ProfileComments";
import { ProfilePrompts } from "../../pages/ProfilePage/ProfileTabs/ProfilePrompts/ProfilePrompts";
import { QuestionsSection } from "../../pages/SupportPage/SupportContent/SupportContentMain/SupportContentMainQuestions/QuestionsSection";
import { sectionListContent } from "../../pages/SupportPage/SupportContent/SupportContentMain/SupportContentMainQuestions/sectionListContent";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<TestPage />} />
                <Route path="profile/" element={<ProfilePage />}>
                    <Route index element={<ProfilePrompts />} />
                    <Route path="comments" element={<ProfileComments />} />
                    <Route
                        path="notifications"
                        element={<ProfileNotifications />}
                    />
                    <Route path="settings" element={<h1>Настройки </h1>} />
                    <Route path="payments" element={<h1>Платежи </h1>} />
                </Route>
                <Route path="marketplace" element={<AuthPage />} />
                <Route path="support/" element={<SupportPage />}>
                    <Route index element={<SupportContentMainHelp />} />
                    <Route
                        path="questions/"
                        element={<SupportContentMainQuestions />}
                    >
                        <Route
                            index
                            element={
                                <QuestionsSection
                                    questions={sectionListContent?.main}
                                />
                            }
                        />
                        <Route
                            path="security"
                            element={
                                <QuestionsSection
                                    questions={sectionListContent?.security}
                                />
                            }
                        />
                        <Route
                            path="monetization"
                            element={
                                <QuestionsSection
                                    questions={sectionListContent?.monetization}
                                />
                            }
                        />
                        <Route
                            path="profile"
                            element={
                                <QuestionsSection
                                    questions={sectionListContent?.profile}
                                />
                            }
                        />
                        <Route
                            path="payments"
                            element={
                                <QuestionsSection
                                    questions={sectionListContent?.payments}
                                />
                            }
                        />
                        <Route
                            path="comments"
                            element={
                                <QuestionsSection
                                    questions={sectionListContent?.comments}
                                />
                            }
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

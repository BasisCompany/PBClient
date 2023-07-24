import { FC } from "react";

import { Route, Routes } from "react-router";
import { AppLayout } from "../AppLayout";
import { TestPage } from "../../trash/TestPage";
import { ProfilePage } from "../../pages/Profile.page";
import { AuthPage } from "../../pages/AuthPage/Auth.page";
import { ExpiredPage } from "../../pages/Expired.page";
import { VerifiedPage } from "../../pages/Verified.page";

export const AppRoutes: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<TestPage />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="marketplace" element={<AuthPage />} />
                <Route path="login" element={<AuthPage />} />
                <Route path="expired" element={<ExpiredPage />} />
                <Route path="verified" element={<VerifiedPage />} />
            </Route>
            <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
    );
};

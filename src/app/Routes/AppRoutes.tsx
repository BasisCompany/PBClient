import { FC } from "react";

import { Route, Routes } from "react-router";
import { AppLayout } from "../AppLayout";
import { TestPage } from "../../trash/TestPage";
import { ProfilePage } from "../../pages/Profile.page";
import { AuthPage } from "../../pages/AuthPage/Auth.page";

export const AppRoutes: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<TestPage />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="marketplace" element={<AuthPage />} />
            </Route>
            <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
    );
};

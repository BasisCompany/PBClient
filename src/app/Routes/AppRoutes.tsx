import { FC } from "react";

import { Route, Routes } from "react-router";
import { AppLayout } from "../AppLayout";
import { TestPage } from "../../trash/TestPage";

export const AppRoutes: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<TestPage />} />
                <Route path="profile" element={<h1>profile</h1>} />
            </Route>
            <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
    );
};

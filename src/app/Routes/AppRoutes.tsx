import { Route, Routes } from "react-router";
import { AppLayout } from "./AppLayout";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<h1>HomePage</h1>} />
                <Route path="profile" element={<h1>profile</h1>} />
            </Route>
            <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
    );
};

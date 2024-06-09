import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReAuthToastErrors } from "./baseQuery";

export const baseApi = createApi({
    reducerPath: "api",
    tagTypes: ["Notification", "Comment", "User", "Session", "Cart"],
    baseQuery: baseQueryWithReAuthToastErrors,
    endpoints: () => ({}),
});

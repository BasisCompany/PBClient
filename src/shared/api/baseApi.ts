import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReAuthToastErrors } from "./baseQuery";

export const baseApi = createApi({
    reducerPath: "api",
    tagTypes: ["Notification"],
    baseQuery: baseQueryWithReAuthToastErrors,
    endpoints: () => ({}),
});

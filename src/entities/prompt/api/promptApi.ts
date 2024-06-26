import { PromptsRequest } from "./types";
import { Prompt } from "@/entities/prompt";
import { baseApi } from "@/shared/api";
import { PageResponse } from "@/shared/types";

export const promptApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getPrompts: build.query<PageResponse<Prompt>, PromptsRequest>({
            query: ({ sort, page, take, ...filters }) => ({
                url: `prompt`,
                params: { sort, page, take, ...filters },
            }),
            providesTags: ["Prompt"],
        }),
    }),
});

export const { useGetPromptsQuery } = promptApi;

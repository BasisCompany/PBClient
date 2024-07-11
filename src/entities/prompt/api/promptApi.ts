import { PromptsRequest } from "./types";
import { Prompt } from "@/entities/prompt";
import { baseApi } from "@/shared/api";
import { PageResponse } from "@/shared/types";

export const promptApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getPrompt: build.query<Prompt, number>({
            query: (id) => ({
                url: `prompt/${id}`,
                credentials: "include",
            }),
            providesTags: ["Prompt"],
        }),
        getPrompts: build.query<PageResponse<Prompt>, PromptsRequest>({
            query: ({ sort, page, take, ...filters }) => ({
                url: `prompt`,
                params: { sort, page, take, ...filters },
            }),
            providesTags: ["Prompt"],
        }),
    }),
});

export const { useGetPromptQuery, useGetPromptsQuery } = promptApi;

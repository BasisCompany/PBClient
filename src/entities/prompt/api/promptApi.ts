import { Prompt } from "@/entities/prompt";
import { baseApi } from "@/shared/api";

export const promptApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllPrompts: build.query<Prompt[], void>({
            query: () => "prompt",
        }),
    }),
});

export const { useGetAllPromptsQuery } = promptApi;

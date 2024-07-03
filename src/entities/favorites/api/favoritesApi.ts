import { PatchCollection } from "@reduxjs/toolkit/dist/query/core/buildThunks";
import { Favorites } from "../model/types";
import { PageResponse, SortRequest } from "@/shared/types";
import { baseApi } from "@/shared/api";
import { Prompt, promptApi } from "@/entities/prompt";
import { PromptsRequest } from "@/entities/prompt/api/types";

export const favoritesApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getFavorites: build.query<Favorites, SortRequest>({
            query: ({ sort }) => ({
                url: "favorites",
                params: { sort },
            }),
            providesTags: ["Favorites"],
        }),
        addToFavorites: build.mutation<void, number>({
            query: (id) => ({
                url: `favorites/${id}`,
                method: "PATCH",
            }),
            invalidatesTags: ["Favorites", "Cart"],
            onQueryStarted(id, { dispatch, queryFulfilled, getState }) {
                const promptCache = promptApi.util.selectInvalidatedBy(
                    getState(),
                    [{ type: "Prompt" }]
                );

                const patches: PatchCollection[] = [];

                for (const { originalArgs } of promptCache) {
                    const args = originalArgs as PromptsRequest;
                    patches.push(
                        dispatch(
                            promptApi.util.updateQueryData(
                                "getPrompts",
                                args,
                                updatePromptFavorites(id, true)
                            )
                        )
                    );
                }

                queryFulfilled.catch(() =>
                    patches.forEach((patch) => {
                        patch.undo();
                    })
                );
            },
        }),
        deleteFromFavorites: build.mutation<void, number>({
            query: (id) => ({
                url: `favorites/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Favorites", "Cart"],
            onQueryStarted(id, { dispatch, queryFulfilled, getState }) {
                const promptCache = promptApi.util.selectInvalidatedBy(
                    getState(),
                    [{ type: "Prompt" }]
                );

                const patches: PatchCollection[] = [];

                for (const { originalArgs } of promptCache) {
                    const args = originalArgs as PromptsRequest;
                    patches.push(
                        dispatch(
                            promptApi.util.updateQueryData(
                                "getPrompts",
                                args,
                                updatePromptFavorites(id, false)
                            )
                        )
                    );
                }

                queryFulfilled.catch(() =>
                    patches.forEach((patch) => {
                        patch.undo();
                    })
                );
            },
        }),
    }),
});

export const {
    useGetFavoritesQuery,
    useAddToFavoritesMutation,
    useDeleteFromFavoritesMutation,
} = favoritesApi;

const updatePromptFavorites = (id: number, isFavorite: boolean) => {
    return (draft: PageResponse<Prompt>) => {
        const prompt = draft.data.find((prompt) => prompt.id === id);
        if (prompt) {
            if (typeof prompt?.isFavorite !== "undefined") {
                prompt.isFavorite = isFavorite;
            }
        }
    };
};

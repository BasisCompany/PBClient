import { Favorites } from "../model/types";
import { SortRequest } from "@/shared/types";
import { baseApi } from "@/shared/api";

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
            //TOOD: Optimistic update
            invalidatesTags: ["Favorites"],
        }),
        deleteFromFavorites: build.mutation<void, number>({
            query: (id) => ({
                url: `favorites/${id}`,
                method: "DELETE",
            }),
            //TOOD: Optimistic update
            invalidatesTags: ["Favorites"],
        }),
    }),
});

export const {
    useGetFavoritesQuery,
    useAddToFavoritesMutation,
    useDeleteFromFavoritesMutation,
} = favoritesApi;

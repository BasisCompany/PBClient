import { Cart } from "../model/types";
import { AddAllToOrderRequest, AddToOrderRequest, CartCount } from "./types";
import { baseApi } from "@/shared/api";

export const cartApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getCart: build.query<Cart, void>({
            query: () => "cart",
            providesTags: ["Cart"],
        }),
        countCart: build.query<CartCount, void>({
            query: () => "cart/count",
            providesTags: [{ type: "Cart", id: "COUNT" }],
        }),
        addToCart: build.mutation<void, number>({
            query: (id) => ({
                url: `cart/${id}`,
                method: "PATCH",
            }),
            invalidatesTags: ["Cart", { type: "Cart", id: "COUNT" }],
        }),
        deleteFromCart: build.mutation<void, number>({
            query: (id) => ({
                url: `cart/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Cart", { type: "Cart", id: "COUNT" }],
        }),

        addToOrder: build.mutation<void, AddToOrderRequest>({
            query: (body) => ({
                url: "cart/order/add",
                method: "PATCH",
                body,
            }),
            onQueryStarted(
                { promptId, includeInOrder },
                { dispatch, queryFulfilled }
            ) {
                const updateCartCheckBoxes = (draft: Cart) => {
                    const cartItem = draft.cartItems.find(
                        (item) => item.prompt.id === promptId
                    );
                    if (cartItem) {
                        cartItem.includeInOrder = includeInOrder;
                    }
                };

                const patchResult = dispatch(
                    cartApi.util.updateQueryData(
                        "getCart",
                        undefined,
                        updateCartCheckBoxes
                    )
                );

                queryFulfilled.catch(patchResult.undo);
            },
        }),
        addAllToOrder: build.mutation<void, AddAllToOrderRequest>({
            query: (body) => ({
                url: "cart/order/add-all",
                method: "PATCH",
                body,
            }),
            onQueryStarted({ includeInOrder }, { dispatch, queryFulfilled }) {
                const updateAllCartCheckBoxes = (draft: Cart) => {
                    draft.cartItems.forEach((item) => {
                        item.includeInOrder = includeInOrder;
                        return item;
                    });
                };

                const patchResult = dispatch(
                    cartApi.util.updateQueryData(
                        "getCart",
                        undefined,
                        updateAllCartCheckBoxes
                    )
                );

                queryFulfilled.catch(patchResult.undo);
            },
        }),
    }),
});

export const {
    useGetCartQuery,
    useCountCartQuery,
    useAddToCartMutation,
    useDeleteFromCartMutation,
    useAddAllToOrderMutation,
    useAddToOrderMutation,
} = cartApi;

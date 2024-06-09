import { lazyImport } from "@/shared/utils/lazyImport";

export const { ShoppingCartPage } = lazyImport(
    () => import("./ShoppingCart.page"),
    "ShoppingCartPage"
);

import { lazyImport } from "@/shared/utils/lazyImport";

export const { MarketplacePage } = lazyImport(
    () => import("./Marketplace.page"),
    "MarketplacePage"
);

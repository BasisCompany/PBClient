import { lazyImport } from "@/shared/utils/lazyImport";

export const { FavoritesPage } = lazyImport(
    () => import("./Favorites.page"),
    "FavoritesPage"
);

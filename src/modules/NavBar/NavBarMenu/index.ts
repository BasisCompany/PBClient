import { lazyImport } from "@/shared/utils/lazyImport";

export const { NavBarMenu } = lazyImport(
    () => import("./NavBarMenu"),
    "NavBarMenu"
);

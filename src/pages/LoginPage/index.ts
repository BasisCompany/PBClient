import { lazyImport } from "@/shared/utils/lazyImport";

export const { LoginPage } = lazyImport(
    () => import("../LoginPage/Login.page"),
    "LoginPage"
);

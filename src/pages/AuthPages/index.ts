import { lazyImport } from "@/shared/utils/lazyImport";

export const { ExpiredPage } = lazyImport(
    () => import("./Expired.page"),
    "ExpiredPage"
);
export const { ForgotPasswordPage } = lazyImport(
    () => import("./ForgotPassword.page"),
    "ForgotPasswordPage"
);
export const { ResetPasswordPage } = lazyImport(
    () => import("./ResetPassword.page"),
    "ResetPasswordPage"
);
export const { VerifiedPage } = lazyImport(
    () => import("./Verified.page"),
    "VerifiedPage"
);

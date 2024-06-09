import { lazyImport } from "@/shared/utils/lazyImport";

export const { PromptPage } = lazyImport(
    () => import("./Prompt.page"),
    "PromptPage"
);

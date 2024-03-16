import { lazyImport } from "@/shared/utils/lazyImport";

export const { HomePage } = lazyImport(() => import("./Home.tsx"), "HomePage");

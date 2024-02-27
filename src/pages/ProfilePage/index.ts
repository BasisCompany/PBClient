import { lazyImport } from "@/shared/utils/lazyImport";

export const { ProfilePage } = lazyImport(
    () => import("./Profile.page"),
    "ProfilePage"
);

export const { ProfilePrompts } = lazyImport(
    () => import("./ProfileTabs/ProfilePrompts"),
    "ProfilePrompts"
);

export const { ProfileComments } = lazyImport(
    () => import("./ProfileTabs/ProfileComments"),
    "ProfileComments"
);

export const { ProfileNotifications } = lazyImport(
    () => import("./ProfileTabs/ProfileNotifications"),
    "ProfileNotifications"
);

export const { ProfileSettings } = lazyImport(
    () => import("./ProfileTabs/ProfileSettings"),
    "ProfileSettings"
);

import { Box } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { ProfilePagination } from "../../components/ProfilePagination";
import { TabLoading } from "../TabLoading";
import { NotificationsToolbar } from "./NotificationsToolbar";
import { ProfileNotification } from "./ProfileNotification/ProfileNotification";
import { NotificationEmpty } from "./NotificationEmpty";
import { useGetNotificationsQuery } from "@/entities/notification";
import { getPageParamSafe, getSortParamSafe } from "@/shared/utils";

const sortParams = ["unread", "read", "all"];

export const ProfileNotifications = () => {
    const [searchParams] = useSearchParams();
    const currentPage = getPageParamSafe(searchParams, 1);

    const currentSort = getSortParamSafe(searchParams, sortParams);

    const { data, isLoading } = useGetNotificationsQuery({
        sort: currentSort,
        page: currentPage,
        take: 5,
    });

    const notifications = data?.data ?? [];
    const hasNotifications = notifications.length > 0;

    //TODO: Test
    if (!isLoading && !hasNotifications && currentPage !== 1) {
        searchParams.set("page", "1");
    }

    if (isLoading) {
        return <TabLoading />;
    }

    return (
        <>
            <NotificationsToolbar />
            <Box>
                {hasNotifications ? (
                    <>
                        {notifications.map((notification) => (
                            <ProfileNotification
                                key={notification.id}
                                notification={notification}
                            />
                        ))}
                        <ProfilePagination
                            totalPages={data?.meta?.totalPages}
                        />
                    </>
                ) : (
                    <NotificationEmpty />
                )}
            </Box>
        </>
    );
};

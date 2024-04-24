import { Box } from "@mui/material";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import { useSearchParams } from "react-router-dom";
import { useMobileDevice } from "../../../../shared/hooks/useMobileDevice";
import {
    getPageParamSafe,
    getSortParamSafe,
} from "../../../../shared/utils/getParamSafely";
import { CommentsEmpty } from "../ProfileComments/CommentsEmpty";
import { ProfilePagination } from "../../components/ProfilePagination";
import { TabLoading } from "../TabLoading";
import { NotificationsToolbar } from "./NotificationsToolbar";
import { ProfileNotification } from "./ProfileNotification/ProfileNotification";
import { useGetNotificationsQuery } from "@/entities/notification";

const notificationsSelectItems = {
    params: ["unread", "read", "all"],
    icons: [
        <DoneRoundedIcon key="unread" sx={{ fontSize: "19px" }} />,
        <DoneAllRoundedIcon key="read" sx={{ fontSize: "19px" }} />,
        <SortRoundedIcon key="all" sx={{ fontSize: "19px" }} />,
    ],
    labels: ["Непрочитанные", "Прочитанные", "Все уведомления"],
};

export const ProfileNotifications = () => {
    const isMobile = useMobileDevice();

    const [searchParams] = useSearchParams();
    const currentPage = getPageParamSafe(searchParams, 1);

    const currentSort = getSortParamSafe(
        searchParams,
        notificationsSelectItems.params
    );

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

    //TODO: Notifications Loading & Empty
    return isLoading ? (
        <TabLoading />
    ) : (
        <>
            <NotificationsToolbar selectItems={notificationsSelectItems} />
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
                            isMobile={isMobile}
                            totalPages={data?.meta?.totalPages}
                        />
                    </>
                ) : (
                    <CommentsEmpty />
                )}
            </Box>
        </>
    );
};

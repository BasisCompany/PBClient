import { Box } from "@mui/material";
import { useMobileDevice } from "../../../../hooks/useMobileDevice";
import { ProfileNotification } from "./ProfileNotification/ProfileNotification";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import { useSearchParams } from "react-router-dom";
import {
    getPageParamSafe,
    getSortParamSafe,
} from "../../../../utils/getParamSafely";
import { useGetNotificationsQuery } from "./store/profileNotificationsApi";
import { CommentsLoading } from "../ProfileComments/CommentsLoading";
import { NotificationsToolbar } from "./NotificationsToolbar";
import { CommentsEmpty } from "../ProfileComments/CommentsEmpty";
import { ProfilePagination } from "../../components/ProfilePagination";

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

    return isLoading ? (
        <CommentsLoading />
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

import { Box } from "@mui/material";
import { PagePagination } from "../../../../UI/PagePagination";
import { useMobileDevice } from "../../../../hooks/useMobileDevice";
import { ProfileCommentItem } from "./ProfileCommentItem";
import { ProfileSelect } from "../../components/ProfileSelect";

import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";
import MarkChatReadIcon from "@mui/icons-material/MarkChatRead";
import { useGetCommentsQuery } from "./store/profileCommentsApi";
import { useSearchParams } from "react-router-dom";
import {
    getPageParamSafe,
    getSortParamSafe,
} from "../../../../utils/getParamSafely";

const commentsSelectItems = {
    params: ["popular", "new", "old"],
    icons: [
        <LocalFireDepartmentIcon sx={{ fontSize: "19px" }} />,
        <MarkChatUnreadIcon sx={{ fontSize: "19px" }} />,
        <MarkChatReadIcon sx={{ fontSize: "19px" }} />,
    ],
    labels: ["Популярные", "Новые", "Старые"],
};
//TODO: При наведение на время показывается дата и время
export const ProfileComments = () => {
    const isMobile = useMobileDevice();

    const [searchParams] = useSearchParams();
    const currentPage = getPageParamSafe(searchParams, 1);
    const currentSort = getSortParamSafe(
        searchParams,
        commentsSelectItems.params
    );

    const { data, isLoading } = useGetCommentsQuery({
        sort: currentSort,
        page: currentPage,
        take: 5,
    });

    if (isLoading) {
        return null;
    }

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: "15px",
                }}
            >
                <ProfileSelect selectItems={commentsSelectItems} />
            </Box>
            <Box>
                {data?.data.map((comment, i) => (
                    <ProfileCommentItem key={i} comment={comment} />
                ))}
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "end",
                    mt: 2,
                }}
            >
                <PagePagination
                    count={data?.meta.totalPages}
                    siblingCount={isMobile ? 0 : 2}
                    size={isMobile ? "small" : "medium"}
                />
            </Box>
        </>
    );
};

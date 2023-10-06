import { Box } from "@mui/material";
import { PagePagination } from "../../../../UI/PagePagination";
import { useMobileDevice } from "../../../../hooks/useMobileDevice";
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
import { ProfileComment } from "./ProfileComment/ProfileComment";
import { CommentsEmpty } from "./CommentsEmpty";
import { CommentsLoading } from "./CommentsLoading";

const commentsSelectItems = {
    params: ["popular", "new", "old"],
    icons: [
        <LocalFireDepartmentIcon sx={{ fontSize: "19px" }} />,
        <MarkChatUnreadIcon sx={{ fontSize: "19px" }} />,
        <MarkChatReadIcon sx={{ fontSize: "19px" }} />,
    ],
    labels: ["Популярные", "Новые", "Старые"],
};

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

    const comments = data?.data || [];

    return isLoading ? (
        <CommentsLoading />
    ) : (
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
                {comments.length ? (
                    comments.map((comment) => (
                        <ProfileComment key={comment.id} comment={comment} />
                    ))
                ) : (
                    <CommentsEmpty />
                )}
            </Box>
            {comments.length > 0 && (
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
            )}
        </>
    );
};

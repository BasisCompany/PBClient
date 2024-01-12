import { useMobileDevice } from "../../../../hooks/useMobileDevice";
import { ProfileSelect } from "../../components/ProfileSelect";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";
import MarkChatReadIcon from "@mui/icons-material/MarkChatRead";
import { useGetCommentsQuery } from "./store/profileCommentsApi";
import { useParams, useSearchParams } from "react-router-dom";
import {
    getPageParamSafe,
    getSortParamSafe,
} from "../../../../utils/getParamSafely";
import { ProfileComment } from "./ProfileComment/ProfileComment";
import { CommentsEmpty } from "./CommentsEmpty";
import { CommentsLoading } from "./CommentsLoading";
import { ProfilePagination } from "../../components/ProfilePagination";
import { FlexBox } from "../../../../UI/FlexBox";

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
    const { id } = useParams();
    const isMobile = useMobileDevice();

    const [searchParams] = useSearchParams();
    const currentPage = getPageParamSafe(searchParams, 1);
    const currentSort = getSortParamSafe(
        searchParams,
        commentsSelectItems.params
    );

    const { data, isLoading } = useGetCommentsQuery({
        id: id as string,
        sort: currentSort,
        page: currentPage,
        take: 5,
    });

    const comments = data?.data || [];
    const hasComments = comments.length > 0;

    return isLoading ? (
        <CommentsLoading />
    ) : (
        <>
            <FlexBox
                sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: "15px",
                }}
            >
                <ProfileSelect selectItems={commentsSelectItems} />
            </FlexBox>
            {hasComments ? (
                <>
                    {comments.map((comment) => (
                        <ProfileComment key={comment.id} comment={comment} />
                    ))}
                    <ProfilePagination
                        isMobile={isMobile}
                        totalPages={data?.meta?.totalPages}
                    />
                </>
            ) : (
                <CommentsEmpty />
            )}
        </>
    );
};

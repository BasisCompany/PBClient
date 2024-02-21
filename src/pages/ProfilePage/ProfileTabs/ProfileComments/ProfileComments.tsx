import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";
import MarkChatReadIcon from "@mui/icons-material/MarkChatRead";
import { useParams, useSearchParams } from "react-router-dom";
import { ProfileSelect } from "../../components/ProfileSelect";
import { useMobileDevice } from "../../../../shared/hooks/useMobileDevice";
import {
    getPageParamSafe,
    getSortParamSafe,
} from "../../../../shared/utils/getParamSafely";
import { ProfilePagination } from "../../components/ProfilePagination";
import { FlexBox } from "../../../../shared/ui/FlexBox";
import { CommentsLoading } from "./CommentsLoading";
import { useGetCommentsQuery } from "./store/profileCommentsApi";
import { CommentsEmpty } from "./CommentsEmpty";
import { ProfileComment } from "./ProfileComment/ProfileComment";

const commentsSelectItems = {
    params: ["popular", "new", "old"],
    icons: [
        <LocalFireDepartmentIcon key="popular" sx={{ fontSize: "19px" }} />,
        <MarkChatUnreadIcon key="new" sx={{ fontSize: "19px" }} />,
        <MarkChatReadIcon key="old" sx={{ fontSize: "19px" }} />,
    ],
    labels: ["Популярные", "Новые", "Старые"],
};

const ProfileComments = () => {
    const { id } = useParams();
    const isMobile = useMobileDevice();

    const [searchParams] = useSearchParams();
    const currentPage = getPageParamSafe(searchParams, 1);
    const currentSort = getSortParamSafe(
        searchParams,
        commentsSelectItems.params
    );

    const { data, isLoading } = useGetCommentsQuery({
        id: id!,
        sort: currentSort,
        page: currentPage,
        take: 5,
    });

    const comments = data?.data ?? [];
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

export default ProfileComments;

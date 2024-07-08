import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";
import MarkChatReadIcon from "@mui/icons-material/MarkChatRead";
import { useParams, useSearchParams } from "react-router-dom";
import { ProfilePagination } from "../../components/ProfilePagination";
import { ProfileSelect } from "../../components/ProfileSelect";
import { TabLoading } from "../TabLoading";
import { CommentsEmpty } from "./CommentsEmpty";
import { ProfileComment } from "./ProfileComment/ProfileComment";
import { useGetCommentsQuery } from "@/entities/comment";
import { FlexBox } from "@/shared/ui/FlexBox";
import {
    getPageParamSafe,
    getSortParamSafe,
} from "@/shared/utils/getParamSafely";

const sortParams = ["popular", "new", "old"];

const commentsSelectItems = {
    params: sortParams,
    icons: [
        <LocalFireDepartmentIcon key="popular" sx={{ fontSize: "19px" }} />,
        <MarkChatUnreadIcon key="new" sx={{ fontSize: "19px" }} />,
        <MarkChatReadIcon key="old" sx={{ fontSize: "19px" }} />,
    ],
    labels: ["Популярные", "Новые", "Старые"],
};

export const ProfileComments = () => {
    const { id } = useParams();

    const [searchParams] = useSearchParams();
    const currentPage = getPageParamSafe(searchParams, 1);
    const currentSort = getSortParamSafe(searchParams, sortParams);

    const { data, isLoading } = useGetCommentsQuery({
        id: id!,
        sort: currentSort,
        page: currentPage,
        take: 5,
    });

    const comments = data?.data ?? [];
    const hasComments = comments.length > 0;

    return isLoading ? (
        <TabLoading />
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
                    <ProfilePagination totalPages={data?.meta?.totalPages} />
                </>
            ) : (
                <CommentsEmpty />
            )}
        </>
    );
};

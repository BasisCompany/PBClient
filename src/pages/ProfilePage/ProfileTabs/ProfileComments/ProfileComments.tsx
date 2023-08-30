import { Box } from "@mui/material";
import { PagePagination } from "../../../../UI/PagePagination";
import { useMobileDevice } from "../../../../hooks/useMobileDevice";
import { ProfileCommentItem } from "./ProfileCommentItem";
import { ProfileSelect } from "../../components/ProfileSelect";

import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";
import MarkChatReadIcon from "@mui/icons-material/MarkChatRead";

const commentsSelectItems = {
    params: ["popular", "new", "old"],
    icons: [
        <LocalFireDepartmentIcon sx={{ fontSize: "19px" }} />,
        <MarkChatUnreadIcon sx={{ fontSize: "19px" }} />,
        <MarkChatReadIcon sx={{ fontSize: "19px" }} />,
    ],
    labels: ["Популярные", "Новые", "Старые"],
};
// При наведение на время показывается дата и время
export const ProfileComments = () => {
    const isMobile = useMobileDevice();
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
                {new Array(10).fill(null).map((_, i) => (
                    <ProfileCommentItem key={i} />
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
                    siblingCount={isMobile ? 0 : 2}
                    size={isMobile ? "small" : "medium"}
                />
            </Box>
        </>
    );
};

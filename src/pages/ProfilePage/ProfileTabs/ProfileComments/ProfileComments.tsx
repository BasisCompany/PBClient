import { Box, Tooltip, IconButton } from "@mui/material";
import { PagePagination } from "../../../../UI/PagePagination";
import { NotificationSelect } from "../ProfileNotifications/NotificationSelect";
import ChecklistIcon from "@mui/icons-material/Checklist";
import TuneIcon from "@mui/icons-material/Tune";
import { useMobileDevice } from "../../../../hooks/useMobileDevice";
import { ProfileCommentItem } from "./ProfileCommentItem";

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
                <NotificationSelect />
                <Box
                    sx={{
                        //backgroundColor: "primary.main",
                        borderRadius: "4px",
                    }}
                >
                    <Tooltip title="Настройки" disableInteractive>
                        <IconButton
                            sx={{
                                borderRadius: "4px",
                                ":hover": {
                                    backgroundColor: "rgba(153, 51, 255,0.2)",
                                },
                            }}
                        >
                            <TuneIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Прочитать всё" disableInteractive>
                        <IconButton
                            sx={{
                                borderRadius: "4px",
                                ":hover": {
                                    backgroundColor: "rgba(153, 51, 255,0.2)",
                                },
                            }}
                        >
                            <ChecklistIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
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

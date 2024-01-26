import { Box } from "@mui/material";
import { Outlet, useParams } from "react-router";
import { useAuth } from "../../../hooks/useAuth";
import { FlexBox } from "../../../UI/FlexBox";
import { POLICIES } from "../../../lib/Authorization/policies";
import { UserTabs } from "./UserTabs";
import { LocalTabs } from "./LocalTabs";

export const ProfileTabs = () => {
    const { id } = useParams();
    const { user } = useAuth();

    return (
        <FlexBox
            sx={{
                position: "relative",
                width: { xs: "100%", lg: "calc(80% - 15px)" },
                flexDirection: "column",
                borderRadius: "15px",
                mt: { xs: "15px", lg: "0px" },
            }}
        >
            <FlexBox sx={{ justifyContent: "center" }}>
                {POLICIES["profile:local"](user, id) ? (
                    <LocalTabs />
                ) : (
                    <UserTabs />
                )}
            </FlexBox>
            <Box
                sx={{
                    borderRadius: "15px",
                    pl: { lg: "15px" },
                    pt: "15px",
                    mt: "15px",
                    color: "white",
                }}
            >
                <Outlet />
            </Box>
        </FlexBox>
    );
};

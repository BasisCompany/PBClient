import { FC } from "react";
import { Badge } from "@mui/material";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import { FlexBox } from "../FlexBox";

interface PromptBadgesProps {
    views: number;
    purchases: number;
    rating: number;
}

export const PromptBadges: FC<PromptBadgesProps> = ({
    views,
    purchases,
    rating,
}) => {
    return (
        <FlexBox
            justifyContent="space-between"
            sx={{
                width: "97px",
                paddingTop: "2px",
            }}
        >
            <Badge badgeContent={views} color="secondary" max={999}>
                <RemoveRedEyeRoundedIcon sx={{ fontSize: 19 }} />
            </Badge>
            <Badge badgeContent={purchases} color="secondary" max={999}>
                <ShoppingCartRoundedIcon sx={{ fontSize: 19 }} />
            </Badge>
            <Badge badgeContent={rating} color="secondary" max={5}>
                <GradeRoundedIcon sx={{ fontSize: 19 }} />
            </Badge>
        </FlexBox>
    );
};

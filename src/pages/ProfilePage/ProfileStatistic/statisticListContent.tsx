import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import IntegrationInstructionsRoundedIcon from "@mui/icons-material/IntegrationInstructionsRounded";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";

export const statisticListContent = [
    {
        id: 0,
        borderColor: "rgba(233,30,99,0.5)",
        iconColor: "rgba(233,30,99,1)",
        icon: (
            <FavoriteRoundedIcon
                sx={{
                    fontSize: 28,
                }}
            />
        ),
        value: "52.7k",
        unit: "лайков",
    },
    {
        id: 1,
        borderColor: "rgba(255,152,0,0.5)",
        iconColor: "rgba(255,152,0,1)",
        icon: (
            <IntegrationInstructionsRoundedIcon
                sx={{
                    fontSize: 28,
                }}
            />
        ),
        value: "34",
        unit: "промта",
    },
    {
        id: 2,
        borderColor: "rgba(4,154,222,0.5)",
        iconColor: "rgba(4,154,222,1)",
        icon: (
            <MonetizationOnRoundedIcon
                sx={{
                    fontSize: 28,
                }}
            />
        ),
        value: "736",
        unit: "продаж",
    },
    {
        id: 3,
        borderColor: "rgba(76,175,80,0.5)",
        iconColor: "rgba(76,175,80,1)",
        icon: (
            <RemoveRedEyeRoundedIcon
                sx={{
                    fontSize: 28,
                }}
            />
        ),
        value: "272.2k",
        unit: "просмотров",
    },
];

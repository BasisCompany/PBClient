import PasswordRoundedIcon from "@mui/icons-material/PasswordRounded";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import CurrencyRubleRoundedIcon from "@mui/icons-material/CurrencyRubleRounded";
import FaceRoundedIcon from "@mui/icons-material/FaceRounded";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";

export const supportListContent = [
    {
        id: 0,
        to: "general",
        borderColor: "rgba(233,30,99,0.5)",
        iconColor: "rgba(233,30,99,1)",
        icon: (
            <StarRateRoundedIcon
                sx={{
                    fontSize: {
                        xs: "6rem",
                        sm: "5rem",
                        md: "7rem",
                        lg: "10rem",
                    },
                }}
            />
        ),
        title: "Общие вопросы",
        description:
            "Найдите ответы на разнообразные вопросы о функционировании сервиса PromtBuy",
    },
    {
        id: 1,
        to: "security",
        borderColor: "rgba(255,152,0,0.5)",
        iconColor: "rgba(255,152,0,1)",
        icon: (
            <PasswordRoundedIcon
                sx={{
                    fontSize: {
                        xs: "6rem",
                        sm: "5rem",
                        md: "7rem",
                        lg: "10rem",
                    },
                }}
            />
        ),
        title: "Безопасность и доступ к аккаунту",
        description:
            "Узнайте, как обеспечить безопасность вашей учетной записи и правильно управлять доступом к ней",
    },
    {
        id: 2,
        to: "monetization",
        borderColor: "rgba(4,154,222,0.5)",
        iconColor: "rgba(4,154,222,1)",
        icon: (
            <CurrencyRubleRoundedIcon
                sx={{
                    fontSize: {
                        xs: "6rem",
                        sm: "5rem",
                        md: "7rem",
                        lg: "10rem",
                    },
                }}
            />
        ),
        title: "Монетизация",
        description:
            "Узнайте о различных способах заработка и монетизации через платформу PromtBuy, а также получите советы по оптимизации вашей прибыли",
    },
    {
        id: 3,
        to: "profile",
        borderColor: "rgba(76,175,80,0.5)",
        iconColor: "rgba(76,175,80,1)",
        icon: (
            <FaceRoundedIcon
                sx={{
                    fontSize: {
                        xs: "6rem",
                        sm: "5rem",
                        md: "7rem",
                        lg: "10rem",
                    },
                }}
            />
        ),
        title: "Настройки профиля",
        description: "Ваш путь к созданию уникального присутствия на платформе",
    },
    {
        id: 4,
        to: "payments",
        borderColor: "rgba(148,0,211,0.5)",
        iconColor: "rgba(148,0,211,1)",
        icon: (
            <CreditCardRoundedIcon
                sx={{
                    fontSize: {
                        xs: "6rem",
                        sm: "5rem",
                        md: "7rem",
                        lg: "10rem",
                    },
                }}
            />
        ),
        title: "Платежи и переводы",
        description:
            "Механизмы, которые обеспечивают удобные и безопасные способы осуществления финансовых операций",
    },
    {
        id: 5,
        to: "comments",
        borderColor: "rgba(255,204,102,0.5)",
        iconColor: "rgba(255,204,102,1)",
        icon: (
            <ForumRoundedIcon
                sx={{
                    fontSize: {
                        xs: "6rem",
                        sm: "5rem",
                        md: "7rem",
                        lg: "10rem",
                    },
                }}
            />
        ),
        title: "Комментарии",
        description: "Что нужно знать о взаимодействии через комментарии",
    },
];

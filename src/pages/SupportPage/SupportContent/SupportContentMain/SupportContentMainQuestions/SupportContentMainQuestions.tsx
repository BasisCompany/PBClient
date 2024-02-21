import { useState } from "react";
import { Box, List } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import { CustomAccordion } from "./CustomAccordion";
import { CustomListItem } from "./CustomListItem";
import { sectionListContent } from "./sectionListContent";

const categories = Object.keys(sectionListContent);

const SupportContentMainQuestions = () => {
    const { category = "general" } = useParams();
    const navigate = useNavigate();

    const [selected, setSelected] = useState(
        categories.includes(category) ? category : "general"
    );

    const handleListItemClick = (
        _: React.MouseEvent<HTMLDivElement, MouseEvent>,
        path: string
    ) => {
        setSelected(path);
        navigate(`/support/questions/${path}`);
    };

    return (
        <Box
            sx={{
                //bgcolor: "#645",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    borderRadius: "5px",
                    minWidth: "205px",
                    mr: "14px",
                }}
            >
                <List
                    sx={{
                        borderRadius: "5px",
                        pr: "8px",
                        pl: "8px",
                        minWidth: "205px",
                        bgcolor: (theme) =>
                            theme.palette.bgcolor.secondary.main,
                    }}
                >
                    <CustomListItem
                        title="Общие вопросы"
                        selected={selected === "general"}
                        onClick={(event) =>
                            handleListItemClick(event, "general")
                        }
                    />
                    <CustomListItem
                        title="Безопасность"
                        selected={selected === "security"}
                        onClick={(event) =>
                            handleListItemClick(event, "security")
                        }
                    />
                    <CustomListItem
                        title="Монетизация"
                        selected={selected === "monetization"}
                        onClick={(event) =>
                            handleListItemClick(event, "monetization")
                        }
                    />
                    <CustomListItem
                        title="Настройки профиля"
                        selected={selected === "profile"}
                        onClick={(event) =>
                            handleListItemClick(event, "profile")
                        }
                    />
                    <CustomListItem
                        title="Платежи и переводы"
                        selected={selected === "payments"}
                        onClick={(event) =>
                            handleListItemClick(event, "payments")
                        }
                    />
                    <CustomListItem
                        title="Комментарии"
                        selected={selected === "comments"}
                        onClick={(event) =>
                            handleListItemClick(event, "comments")
                        }
                    />
                </List>
            </Box>
            <Box
                sx={{
                    width: "775px",
                    //bgcolor: "#653"
                }}
            >
                {sectionListContent?.[selected].map((item, index) => (
                    <CustomAccordion
                        key={`${selected}_${index}`}
                        question={item.question}
                        answer={item.answer}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default SupportContentMainQuestions;

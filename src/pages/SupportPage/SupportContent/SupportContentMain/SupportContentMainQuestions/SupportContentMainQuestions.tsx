import { Box, List } from "@mui/material";
import { Outlet } from "react-router";

import { CustomListItem } from "./CustomListItem";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { CustomAccordion } from "./CustomAccordion";

function extractLastSegmentFromURL(url: string): string {
    const parts = url.split("/").filter((part) => part !== "");
    const lastEl = parts.pop() ?? "questions";
    return lastEl === "questions" ? "" : lastEl;
    //TODO: Сделать, чтобы при инвалидных значениях ("http://localhost:5173/support/questions/security43") возвращал questions
}

export const SupportContentMainQuestions = () => {
    const location = useLocation().pathname;
    const currentLocation = extractLastSegmentFromURL(location);
    const [selected, setSelected] = useState(currentLocation);

    const [expanded, setExpanded] = useState(false);
    useEffect(() => {
        console.log("Eseff сработал");
        setExpanded(false);
    }, [location]);

    const handleListItemClick = (
        _: React.MouseEvent<HTMLDivElement, MouseEvent>,
        path: string
    ) => {
        setSelected(path);
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
                        path=""
                        title="Общие вопросы"
                        selected={selected === ""}
                        onClick={(event) => handleListItemClick(event, "")}
                    />

                    <CustomListItem
                        path="security"
                        title="Безопасность"
                        selected={selected === "security"}
                        onClick={(event) =>
                            handleListItemClick(event, "security")
                        }
                    />

                    <CustomListItem
                        path="monetization"
                        title="Монетизация"
                        selected={selected === "monetization"}
                        onClick={(event) =>
                            handleListItemClick(event, "monetization")
                        }
                    />
                    <CustomListItem
                        path="profile"
                        title="Настройки профиля"
                        selected={selected === "profile"}
                        onClick={(event) =>
                            handleListItemClick(event, "profile")
                        }
                    />

                    <CustomListItem
                        path="payments"
                        title="Платежи и переводы"
                        selected={selected === "payments"}
                        onClick={(event) =>
                            handleListItemClick(event, "payments")
                        }
                    />
                    <CustomListItem
                        path="comments"
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
                <Outlet context={[expanded]} />
            </Box>
        </Box>
    );
};

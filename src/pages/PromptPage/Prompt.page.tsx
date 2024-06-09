import { Box } from "@mui/material";
import { useParams } from "react-router";

export const PromptPage = () => {
    const { url } = useParams();
    return <Box fontSize={26}>Prompt id: {url}</Box>;
};

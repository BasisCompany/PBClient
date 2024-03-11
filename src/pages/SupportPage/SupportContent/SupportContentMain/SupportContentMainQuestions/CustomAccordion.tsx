import { FC, useState } from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from "@mui/material";

export interface CustomAccordionProps {
    question: string;
    answer: string;
}

export const CustomAccordion: FC<CustomAccordionProps> = ({
    question,
    answer,
}) => {
    const [accordionClose, setAccordionClose] = useState(false);

    return (
        <Accordion
            expanded={accordionClose}
            square
            disableGutters
            onChange={() => {
                setAccordionClose((prev) => !prev);
            }}
            sx={{
                bgcolor: (theme) => theme.palette.bgcolor.secondary.main,
                backgroundImage: "none",
                borderRadius: "5px",
                mb: "14px",
                "&:before": {
                    display: "none",
                },
            }}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ fontSize: 30 }} />}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontSize: "18px",
                        color: (theme) => theme.palette.text.secondary,
                    }}
                >
                    {question}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography
                    sx={{
                        fontSize: "16px",
                        cursor: "default",
                        color: (theme) => theme.palette.text.primary,
                    }}
                >
                    {answer}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
};

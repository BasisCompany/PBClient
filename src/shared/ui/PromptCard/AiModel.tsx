import { FC } from "react";
import { Typography } from "@mui/material";
import { Image } from "../Image";
import { FlexBox } from "../FlexBox";
import { getUrlRoot } from "@/shared/utils/getUrlRoot";
import { formatAiModel } from "@/shared/utils/promptFormatter";

interface AiModelProps {
    aIModel: {
        name: string;
        logo: string;
    };
}

export const AiModel: FC<AiModelProps> = ({ aIModel }) => {
    return (
        <FlexBox
            position="absolute"
            sx={{
                padding: "3px",
                pr: 1,
                top: "13px",
                borderRadius: "0px 10px 10px 0px",
                bgcolor: "#272727",
            }}
        >
            <Image src={getUrlRoot(aIModel.logo)} height="24px" width="24px" />
            <Typography
                variant="text"
                fontSize={13}
                fontWeight={500}
                ml={0.5}
                mt={0.2}
            >
                {formatAiModel(aIModel.name)}
            </Typography>
        </FlexBox>
    );
};

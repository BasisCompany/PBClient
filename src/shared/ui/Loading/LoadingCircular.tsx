import { CircularProgress } from "@mui/material";
import { FlexBox } from "../FlexBox";

export const LoadingCircular = () => {
    return (
        <FlexBox
            sx={{
                justifyContent: "center",
                alignItems: "center",
                height: "calc(100vh - 200px)",
            }}
        >
            <CircularProgress color="secondary" size={100} />
        </FlexBox>
    );
};

import { Skeleton, Stack } from "@mui/material";

export const TabLoading = () => {
    return (
        <Stack spacing={1}>
            <Skeleton variant="text" height={60} />
            <Skeleton variant="rounded" height={100} />
            <Skeleton variant="rounded" height={100} />
        </Stack>
    );
};

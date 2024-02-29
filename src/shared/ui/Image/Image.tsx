import { FC, useState } from "react";
import {
    Box,
    BoxProps,
    CircularProgress,
    createSvgIcon,
    styled,
} from "@mui/material";
import { FlexBox } from "../FlexBox";

interface ImageProps extends BoxProps<"img"> {
    srcMedia?: string[];
    showLoading?: boolean;
    showError?: boolean;
}

const BaseImage = styled((props: BoxProps<"img">) => (
    <Box component="img" {...props} />
))({
    width: "100%",
    height: "100%",
    objectFit: "cover",
});

const BrokenImageIcon = createSvgIcon(
    <path d="M21 5v6.59l-2.29-2.3c-.39-.39-1.03-.39-1.42 0L14 12.59 10.71 9.3a.9959.9959 0 0 0-1.41 0L6 12.59 3 9.58V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2zm-3 6.42 3 3.01V19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.58l2.29 2.29c.39.39 1.02.39 1.41 0l3.3-3.3 3.29 3.29c.39.39 1.02.39 1.41 0l3.3-3.28z" />,
    "BrokenImageIcon"
);

export const Image: FC<ImageProps> = ({
    srcMedia,
    width,
    height,
    maxWidth,
    maxHeight,
    showLoading = true,
    showError = true,
    ...props
}) => {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    const onImageLoad = () => {
        setLoaded(true);
        setError(false);
    };

    const onImageError = () => {
        setLoaded(true);
        setError(true);
    };

    const srcSet = srcMedia ? srcMedia.join(", ") : undefined;
    return (
        <FlexBox
            justifyContent="center"
            alignItems="center"
            width={width}
            height={height}
            maxWidth={maxWidth}
            maxHeight={maxHeight}
        >
            <BaseImage
                srcSet={srcSet}
                onLoad={onImageLoad}
                onError={onImageError}
                sx={{ display: !loaded || error ? "none" : "block" }}
                {...props}
            />
            {showLoading && !loaded && (
                <CircularProgress size={56} thickness={6} color="secondary" />
            )}
            {showError && error && (
                <BrokenImageIcon style={{ fontSize: 56, color: "#bdbdbd" }} />
            )}
        </FlexBox>
    );
};

import { FC } from "react";
import { BoxProps } from "@mui/material";
import { Image } from "./Image";
import DefaultAvatar from "@/assets/DefaultAvatar.webp";

export const Avatar: FC<BoxProps<"img">> = ({ src, ...props }) => {
    return <Image src={src ?? DefaultAvatar} {...props} />;
};

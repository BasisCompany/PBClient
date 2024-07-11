import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { Image } from "../Image";
import { LinkBox } from "../Links";
import { FlexBox } from "../FlexBox";
import { AiModel } from "./AiModel";
import { FavoriteButton } from "./FavoriteButton";
import { CartButton } from "./CartButton";
import { PromptBadges } from "./PromptBadges";
import { Prompt } from "@/entities/prompt";
import { getRandomImage } from "@/pages/MarketplacePage/components/MarketplaceGrid/promptTest";

export interface PromptCardProps {
    prompt: Prompt;
}

export const PromptCard: FC<PromptCardProps> = ({ prompt }) => {
    const {
        id,
        url,
        title,
        price,
        views,
        rating,
        aIModel,
        isFavorite,
        isInCart,
    } = prompt;

    //TODO: prompt fields
    const image = getRandomImage(id);
    const description =
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text";

    const purchases = 15;

    return (
        <Box
            component="article"
            position="relative"
            sx={{
                maxWidth: "203px",
                height: "360px",
                borderRadius: "15px",
            }}
        >
            <Box position="relative" mb={1}>
                <Image
                    src={image}
                    height="200px"
                    width="203px"
                    borderRadius="10px"
                />
                <AiModel aIModel={aIModel} />
                <FavoriteButton id={id} isFavorite={isFavorite} />
                {isInCart && <CartButton />}
            </Box>
            <Box p={1}>
                <Typography
                    variant="text"
                    fontWeight={500}
                    fontSize={17}
                    whiteSpace="nowrap"
                    textOverflow="ellipsis"
                    overflow="hidden"
                    mb={0.5}
                >
                    {title}
                </Typography>
                <Typography
                    variant="text"
                    color={(theme) => theme.palette.text.secondary}
                    fontSize={14}
                    overflow="hidden"
                    textOverflow="ellipsis"
                    sx={{
                        display: "-webkit-box",
                        WebkitLineClamp: "2",
                        WebkitBoxOrient: "vertical",
                    }}
                >
                    {description}
                </Typography>
                <FlexBox justifyContent="space-between" mt="26px">
                    <PromptBadges
                        views={views}
                        purchases={purchases}
                        rating={rating}
                    />
                    <Typography variant="text" fontSize="16px" fontWeight="500">
                        {price} ₽
                    </Typography>
                </FlexBox>
            </Box>
            <LinkBox to={`../prompt/${url}`} />
        </Box>
    );
};

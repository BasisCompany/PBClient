import { useSearchParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { MarketplaceFilters } from "./components/MarketplaceFilters/MarketplaceFilters";
import { MarketplaceGrid } from "./components/MarketplaceGrid/MarketplaceGrid";
import { useGetPromptsQuery } from "@/entities/prompt";
import {
    getPageParamSafe,
    getSortParamSafe,
} from "@/shared/utils/getParamSafely";
import { FlexBox } from "@/shared/ui/FlexBox";

const promptSort = ["1"];

export const MarketplacePage = () => {
    const [searchParams] = useSearchParams();
    const currentPage = getPageParamSafe(searchParams, 1);
    const currentSort = getSortParamSafe(searchParams, promptSort);

    const { data, isLoading } = useGetPromptsQuery({
        sort: currentSort,
        page: currentPage,
        take: 20,
        model: "",
        price: "",
    });

    const prompts = data?.data ?? [];
    const hasPrompts = prompts.length > 0;

    return isLoading ? null : (
        <FlexBox height="100%">
            <MarketplaceFilters />
            {hasPrompts ? (
                <MarketplaceGrid prompts={prompts} />
            ) : (
                <Typography variant="title"> Промптов нет</Typography>
            )}
        </FlexBox>
    );
};

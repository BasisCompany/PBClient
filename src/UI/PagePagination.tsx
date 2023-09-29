import { FC } from "react";
import { Pagination, PaginationItem, PaginationProps } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { getPageParamSafe } from "../utils/getParamSafely";

export const PagePagination: FC<PaginationProps> = (props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = getPageParamSafe(searchParams, 1);

    const handlePaginationClick = (page: number | null) => {
        if (page === null) return;

        if (page !== 1) {
            searchParams.set("page", `${page}`);
        } else {
            searchParams.delete("page");
        }
        setSearchParams(searchParams);
    };

    return (
        <Pagination
            page={currentPage}
            showFirstButton
            showLastButton
            renderItem={(item) => (
                <PaginationItem
                    {...item}
                    onClick={() => handlePaginationClick(item.page)}
                />
            )}
            {...props}
        />
    );
};

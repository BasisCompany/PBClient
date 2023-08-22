import { FC } from "react";
import { Pagination, PaginationItem, PaginationProps } from "@mui/material";
import { useSearchParams } from "react-router-dom";

export const PagePagination: FC<PaginationProps> = (props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = parseInt(searchParams.get("page") || "1", 10);

    const handlePaginationClick = (page: number | null) => {
        if (page !== 1) {
            searchParams.set("page", `${page ?? "2"}`);
        } else {
            searchParams.delete("page");
        }
        setSearchParams(searchParams);
    };

    return (
        <Pagination
            page={currentPage}
            count={10}
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
